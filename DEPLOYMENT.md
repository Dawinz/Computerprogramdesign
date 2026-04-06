# Deployment Guide

This guide covers everything you need to know about deploying Factos to various platforms.

## Table of Contents

- [Quick Start](#quick-start)
- [Build Process](#build-process)
- [Deployment Platforms](#deployment-platforms)
- [Environment Configuration](#environment-configuration)
- [CI/CD Setup](#cicd-setup)
- [Performance Optimization](#performance-optimization)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Local Production Build

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The build output will be in the `dist/` directory.

## Build Process

### Build Configuration

Factos uses Vite for building. The configuration is in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
});
```

### Build Optimization

```bash
# Production build with analysis
pnpm build --mode production

# Check bundle size
npx vite-bundle-visualizer
```

### Build Output

```
dist/
├── index.html              # Entry HTML file
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Main CSS bundle
│   └── vendor-[hash].js    # Vendor dependencies
└── favicon.ico             # Favicon
```

## Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments

#### Setup

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

#### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Environment Variables

In Vercel dashboard:
- Settings → Environment Variables
- Add: `VITE_API_URL`, `VITE_MCP_ENDPOINT`, etc.

---

### Netlify

**Why Netlify?**
- Simple setup
- Form handling
- Serverless functions
- Split testing

#### Setup

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### AWS S3 + CloudFront

**Why AWS?**
- Full control
- Scalability
- Integration with AWS services
- Cost-effective

#### Setup

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://factos-app
   ```

2. **Configure for Static Hosting**
   ```bash
   aws s3 website s3://factos-app \
     --index-document index.html \
     --error-document index.html
   ```

3. **Upload Build**
   ```bash
   pnpm build
   aws s3 sync dist/ s3://factos-app --delete
   ```

4. **Create CloudFront Distribution**
   - Point to S3 bucket
   - Enable HTTPS
   - Configure caching

#### Automated Deployment Script

Create `deploy-aws.sh`:

```bash
#!/bin/bash

# Build
echo "Building..."
pnpm build

# Upload to S3
echo "Uploading to S3..."
aws s3 sync dist/ s3://factos-app \
  --delete \
  --cache-control max-age=31536000,public \
  --exclude index.html

# Upload index.html separately (no cache)
aws s3 cp dist/index.html s3://factos-app/index.html \
  --cache-control no-cache,no-store,must-revalidate

# Invalidate CloudFront
echo "Invalidating CloudFront..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

---

### Docker

**Why Docker?**
- Consistent environments
- Easy scaling
- Works anywhere

#### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # No cache for index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

#### Build and Run

```bash
# Build image
docker build -t factos:latest .

# Run container
docker run -p 8080:80 factos:latest

# Visit http://localhost:8080
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run:
```bash
docker-compose up -d
```

---

### GitHub Pages

**Why GitHub Pages?**
- Free hosting
- GitHub integration
- Simple setup

#### Setup

1. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "pnpm build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   pnpm deploy
   ```

4. **Configure GitHub Pages**
   - Repository Settings → Pages
   - Source: gh-pages branch

#### Base Path Configuration

Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/factos/', // Repository name
  // ... rest of config
});
```

## Environment Configuration

### Environment Variables

Create `.env` files for different environments:

#### `.env.development`
```env
VITE_API_URL=http://localhost:3000
VITE_MCP_ENDPOINT=ws://localhost:8080
VITE_ENABLE_AI=true
VITE_ENABLE_TELEMETRY=false
```

#### `.env.production`
```env
VITE_API_URL=https://api.factos.app
VITE_MCP_ENDPOINT=wss://mcp.factos.app
VITE_ENABLE_AI=true
VITE_ENABLE_TELEMETRY=true
```

### Using Environment Variables

```typescript
// In your code
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;

// Type safety
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MCP_ENDPOINT: string;
  readonly VITE_ENABLE_AI: string;
  readonly VITE_ENABLE_TELEMETRY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm tsc --noEmit

      - name: Lint
        run: pnpm eslint src/

      - name: Build
        run: pnpm build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_MCP_ENDPOINT: ${{ secrets.VITE_MCP_ENDPOINT }}

      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### GitLab CI/CD

Create `.gitlab-ci.yml`:

```yaml
stages:
  - build
  - deploy

variables:
  NODE_VERSION: "18"

build:
  stage: build
  image: node:18-alpine
  script:
    - npm install -g pnpm
    - pnpm install --frozen-lockfile
    - pnpm build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour

deploy:
  stage: deploy
  image: alpine:latest
  only:
    - main
  script:
    - apk add --no-cache curl
    - curl -X POST $DEPLOY_WEBHOOK_URL
  needs:
    - build
```

## Performance Optimization

### Production Checklist

- [ ] **Minification**: Enabled by default in Vite
- [ ] **Code Splitting**: Configure manual chunks
- [ ] **Tree Shaking**: Use ES modules
- [ ] **Compression**: Enable gzip/brotli
- [ ] **Caching**: Set appropriate cache headers
- [ ] **CDN**: Serve static assets from CDN
- [ ] **Image Optimization**: Use modern formats (WebP, AVIF)
- [ ] **Font Loading**: Use font-display: swap
- [ ] **Lazy Loading**: Load routes on demand

### Lighthouse Score Target

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90

### Performance Commands

```bash
# Analyze bundle
npx vite-bundle-visualizer

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Performance budget
npx bundlesize
```

## Monitoring

### Error Tracking (Sentry)

```typescript
// src/main.tsx
import * as Sentry from '@sentry/react';

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    tracesSampleRate: 1.0,
  });
}
```

### Analytics (Plausible)

```html
<!-- index.html -->
<script defer data-domain="factos.app" src="https://plausible.io/js/script.js"></script>
```

### Uptime Monitoring

- **UptimeRobot**: Free tier available
- **Pingdom**: Comprehensive monitoring
- **StatusCake**: Multiple locations

## Troubleshooting

### Common Issues

#### Build Fails

```bash
# Clear cache
rm -rf node_modules dist .vite
pnpm install
pnpm build
```

#### Routes Not Working (404)

Ensure your server is configured for SPA routing:
- All routes should serve `index.html`
- Check `.htaccess`, `nginx.conf`, or platform config

#### Environment Variables Not Working

- Prefix with `VITE_`
- Restart dev server after changes
- Check they're set in deployment platform

#### Large Bundle Size

```bash
# Analyze
npx vite-bundle-visualizer

# Check for duplicates
npx duplicate-package-checker-webpack-plugin
```

### Debug Mode

```typescript
// Enable debug logs
if (import.meta.env.DEV) {
  console.log('Debug mode enabled');
  window.__FACTOS_DEBUG__ = true;
}
```

## Best Practices

1. **Use environment-specific configs**
2. **Enable source maps for debugging** (but not in production)
3. **Set up monitoring and alerting**
4. **Test production build locally** before deploying
5. **Use preview deployments** for testing
6. **Keep dependencies updated**
7. **Monitor bundle size**
8. **Set up automated backups**

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies scanned for vulnerabilities
- [ ] Secrets not in source code
- [ ] CORS configured correctly
- [ ] Rate limiting enabled (if API)
- [ ] Content Security Policy set

---

**Need Help?**
- Check [GitHub Issues](https://github.com/yourusername/factos/issues)
- Join our [Discord](https://discord.gg/factos)
- Email: support@factos.dev
