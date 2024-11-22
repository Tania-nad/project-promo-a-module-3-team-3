import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

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
    image: "",
    photo: "",
  });

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
          />
          <Form
            onChangeInput={handleNameProject}
            onChangeSlogan={handleChangeSlogan}
            onChangeAuthor={handleAuthorProject}
            onChangeJob={handleJobProject}
            onChangeTech={handleTechProject}
            onChangeDesc={handleDescProject}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
