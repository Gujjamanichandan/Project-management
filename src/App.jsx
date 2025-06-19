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
  
  let content;

  if(projectsState.selctedProjectId === null){
    content = <NewProject />
  }else if(projectsState.selctedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
 

  return (
    <main className="h-screen my-8 flex gap-8">
   <ProjectSidebar onStartAddProject={handleStartAddProject}/>
   {content}
    </main>
  );
}

export default App;
