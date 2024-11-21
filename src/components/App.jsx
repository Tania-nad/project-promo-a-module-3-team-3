import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Nombre del proyecto");
  const [slogan, setSlogan] = useState("Slogan");
  const [author, setAuthor] = useState("Nombre de la autora");
  const [job, setJob] = useState("Profesión");

  const handleNameProject = (nameProject) => {
    setName(nameProject);
  };
  const handleChangeSlogan = (sloganProject) => {
    setSlogan(sloganProject);
  };
  const handleAuthorProject = (authorProject) => {
    setAuthor(authorProject);
  };
  const handleJobProject = (jobProject) => {
    setJob(jobProject);
  };

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview
            nameProjectUser={name}
            sloganProjectUser={slogan}
            authorProjectUser={author}
            jobProjectUser={job}
          />
          <Form
            onChangeInput={handleNameProject}
            onChangeSlogan={handleChangeSlogan}
            onChangeAuthor={handleAuthorProject}
            onChangeJob={handleJobProject}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
