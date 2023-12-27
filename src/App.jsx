import ProjectSideBar from "./Components/ProjectSideBar";
import NoProjectSelected from "./Components/NoProjectSelected";
import React, { useState } from "react";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    task: [],
  });

  function handleAddTask(text) {
    setprojectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };

      const updatedTasks = [newTask, ...prevState.task];
      console.log("Updated Tasks:", updatedTasks);

      return {
        ...prevState,
        task: updatedTasks,
      };
    });
  }

  function handleDeleteTask(id) {
    setprojectState((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((task) => task.id !== id),
      };
    });
  }

  const handleStartAddProject = () => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setprojectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const cancelHandler = () => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDelet = () => {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  // console.log(projectState.projects);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      tasks={projectState.task}
      onDelete={handleDelet}

    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={cancelHandler} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // console.log(projectState);

  return (
    <main className="h-screen flex  gap-9">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
