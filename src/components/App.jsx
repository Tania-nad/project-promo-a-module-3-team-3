import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

/* 
  Cuando la usuaria haga click en guardar proyecto,
    realizamos la petición al servidor para enviarle toda la info del formulario
      recogemos la url que nos devuelve el servidor
      pintamos esa url en la página web

*/
function App() {
  //const [name, setName] = useState("Nombre del proyecto");
  //const [slogan, setSlogan] = useState("Slogan");
  //const [author, setAuthor] = useState("Nombre de la autora");
  //const [job, setJob] = useState("Profesión");
  const [project, setProject] = useState({
    name: "Nombre del proyecto",
    slogan: "Slogan del proyecto",
    technologies: "Tecnologías",
    repo: "",
    demo: "",
    desc: "Descripción del proyecto",
    autor: "Nombre de la autora",
    job: "Trabajo de la autora",
    imageProject: "",
    imageAuthor: "",
  });
  //variable de estado que modifica la página para que aparezca la url
  const [url, setUrl] = useState("");

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

  //imágenes proyecto y autora
  const handleChangeProjectImage = (image) => {
    setProject({ ...project, imageProject: image });
  };
  const handleChangeAuthorImage = (image) => {
    setProject({ ...project, imageAuthor: image });
  };

  const handleSubmitForm = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => {
      console.log(data);
      //constante para recoger los datos del servidor (url)
      setUrl(data.url);

      //pintar en el html la url que devuelve el servidor
      setUrl(data.url);
    });
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
            //imageProjectUser={project.image}

            imageProjectUser={project.imageProject}
            imageAuthorUser={project.imageAuthor}
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
            onChangeProjectImage={handleChangeProjectImage}
            onChangeAuthorImage={handleChangeAuthorImage}
          />
          {url}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
