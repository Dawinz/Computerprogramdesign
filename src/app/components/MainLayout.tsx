import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { RightPanel } from './RightPanel';
import { BottomPanel } from './BottomPanel';
import { mockProjects, mockProject } from '../data/mockData';

export function MainLayout() {
  const [currentProjectId, setCurrentProjectId] = useState(mockProjects[0].id);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const currentProject = mockProjects.find(p => p.id === currentProjectId) || mockProject;

  return (
    <div className="h-screen bg-[#0f0f0f] text-white flex overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar
        projects={mockProjects}
        currentProjectId={currentProjectId}
        onProjectSelect={setCurrentProjectId}
        isVisible={isSidebarVisible}
        onToggle={() => setIsSidebarVisible(!isSidebarVisible)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar 
          project={currentProject}
          onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
          isSidebarVisible={isSidebarVisible}
        />

        {/* Workspace + Right Panel */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Workspace */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <Outlet />
            </div>
            
            {/* Bottom Panel */}
            <BottomPanel />
          </div>

          {/* Right Panel */}
          <RightPanel project={currentProject} />
        </div>
      </div>
    </div>
  );
}