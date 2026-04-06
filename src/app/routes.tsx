import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { PlanningView } from "./components/views/PlanningView";
import { ExtractionView } from "./components/views/ExtractionView";
import { DesignView } from "./components/views/DesignView";
import { ArchitectureView } from "./components/views/ArchitectureView";
import { DevelopmentView } from "./components/views/DevelopmentView";
import { TestingView } from "./components/views/TestingView";
import { SecurityView } from "./components/views/SecurityView";
import { DeploymentView } from "./components/views/DeploymentView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: PlanningView },
      { path: "planning", Component: PlanningView },
      { path: "extraction", Component: ExtractionView },
      { path: "design", Component: DesignView },
      { path: "architecture", Component: ArchitectureView },
      { path: "development", Component: DevelopmentView },
      { path: "testing", Component: TestingView },
      { path: "security", Component: SecurityView },
      { path: "deployment", Component: DeploymentView },
    ],
  },
]);
