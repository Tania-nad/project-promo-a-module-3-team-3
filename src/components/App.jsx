import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [project, setProject] = useState({
    name: "Nombre del proyecto",
    slogan: "Slogan del proyecto",
    technologies: "Tecnologías",
    repo: "https://books.adalab.es/materiales-del-curso-a-pw-ft/proyectos/p3_proyecto/p3_planificacion_dia",
    demo: "https://books.adalab.es/materiales-del-curso-a-pw-ft/proyectos/p3_proyecto/p3_planificacion_dia",
    desc: "Descripción del proyecto",
    autor: "Nombre de la autora",
    job: "Trabajo de la autora",
    image: "https://via.placeholder.com/150", // Cambiado a "image"
    photo: "https://via.placeholder.com/150", // Cambiado a "photo"
  });

  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  const handleNameProject = (nameProject) => {
    setProject({ ...project, name: nameProject });
  };
  const handleChangeSlogan = (sloganProject) => {
    setProject({ ...project, slogan: sloganProject });
  };
  const handleTechProject = (techProject) => {
    setProject({ ...project, technologies: techProject });
  };
  const handleAuthorProject = (autorProject) => {
    setProject({ ...project, autor: autorProject });
  };
  const handleJobProject = (jobProject) => {
    setProject({ ...project, job: jobProject });
  };
  const handleDescProject = (descProject) => {
    setProject({ ...project, desc: descProject });
  };
  const handleDemoProject = (demoProject) => {
    setProject({ ...project, demo: demoProject });
  };
  const handleRepoProject = (RepoProject) => {
    setProject({ ...project, repo: RepoProject });
  };

  // Cambios para usar "image" y "photo"
  const handleChangeImage = (image) => {
    setProject({ ...project, image });
  };
  const handleChangePhoto = (photo) => {
    setProject({ ...project, photo });
  };

  const handleSubmitForm = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUrl(data.url);
        } else {
          console.error("Error del servidor:", data.error);
        }
      })
      .catch((error) => console.error("Error en la petición:", error));
  };

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview
            nameProjectUser={project.name}
            sloganProjectUser={project.slogan}
            techProjectUser={project.technologies}
            authorProjectUser={project.autor}
            jobProjectUser={project.job}
            descProjectUser={project.desc}
            demoProjectUser={project.demo}
            repoProjectUser={project.repo}
            imageProjectUser={project.image} // Cambiado a "image"
            imageAuthorUser={project.photo} // Cambiado a "photo"
          />
          <Form
            onChangeInput={handleNameProject}
            onChangeSlogan={handleChangeSlogan}
            onChangeAuthor={handleAuthorProject}
            onChangeJob={handleJobProject}
            onChangeTech={handleTechProject}
            onChangeDesc={handleDescProject}
            onChangeDemo={handleDemoProject}
            onChangeRepo={handleRepoProject}
            onSubmitForm={handleSubmitForm}
            onChangeProjectImage={handleChangeImage} // Cambiado a "image"
            onChangeAuthorImage={handleChangePhoto} // Cambiado a "photo"
          />
          {url}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
