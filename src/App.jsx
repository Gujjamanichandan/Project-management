import{ useState } from "react";

import  NewProject  from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjrctSelected";


function App() {
  const [projectsState,setProjectsState] = useState({
    selctedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selctedProjectId: null,
      };
    });

  }

  function handleAddProject(projectData){
    setProjectsState((prevState) => {

      const projectId = Math.random();
        const newProject = {
          ...projectData,
          id: projectId,
        };

      return {
        ...prevState,
        selctedProjectId: undefined,
         // Add the new project to the projects array
        projects: [...prevState.projects, newProject]
      };
    });
  }
  

  let content;

  if(projectsState.selctedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(projectsState.selctedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
 

  return (
    <main className="h-screen my-8 flex gap-8">
   <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
   {content}
    </main>
  );
}

export default App;
