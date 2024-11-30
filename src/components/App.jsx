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
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsocialenterprise.es%2Fprogramas%2Fformacion-social-enterprises%2Fadalab%2F&psig=AOvVaw25EE_IPd39ZTN-_WQwgK9E&ust=1732722734374000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDiuamt-okDFQAAAAAdAAAAABAE",
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsocialenterprise.es%2Fprogramas%2Fformacion-social-enterprises%2Fadalab%2F&psig=AOvVaw25EE_IPd39ZTN-_WQwgK9E&ust=1732722734374000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDiuamt-okDFQAAAAAdAAAAABAE",
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
  }
  const handleRepoProject = (repoProject) => {
    setProject({ ...project, repo: repoProject });
  };

  const handleProjectImage = (projectImage) => {
    setProject({ ...project, image: projectImage }); // Updates the 'image' property
  };

  const handleAuthorImage = (authorImage) => {
    setProject({ ...project, photo: authorImage }); // Updates the 'photo' property
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
        console.log("API Response:", data);
        //constante para recoger los datos del servidor (url)
        setUrl(data.url);



        //pintar en el html la url que devuelve el servidor
      });
  };

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview
            /* tenemos que pasar un objeto con todas las props que sera un objeto, project es nuestro objeto, una sola prop con todas esas propiedades y en preview pasamos project.propiedad
             */
            nameProjectUser={project.name}
            sloganProjectUser={project.slogan}
            techProjectUser={project.technologies}
            authorProjectUser={project.autor}
            jobProjectUser={project.job}
            descProjectUser={project.desc}
            demoProjectUser={project.demo}
            repoProjectUser={project.repo}
            imageProjectUser={project.image}
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
            onChangeProjectImage={handleProjectImage}
            onChangeAuthorImage={handleAuthorImage}
            onSubmitForm={handleSubmitForm}
          />

          <p>Project URL: {url}</p>
        </main>

        <Footer />
      </div>
    </>
  );
  //pintar en el html la url que devuelve el servidor
  //setUrl(data.url);
};



export default App;
