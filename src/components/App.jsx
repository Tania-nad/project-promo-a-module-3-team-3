import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [technologies, setTechnologies] = useState("React JS - HTML -CSS");
  
  // Función para manejar el cambio en el nombre del proyecto
  const handleNameProject = (nameProject) => {
    setName (nameProject);

  };
 // Función para manejar el cambio en los inputs (incluye tecnologías)
  const handleValueInput = (value, id) => {
    if (id === "technologies") {
      setTechnologies(value);
  
  }
};

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview 
            nameProjectUser={name}
            technologies={technologies} />
          <Form 
          onChangeInput = {handleValueInput} 
          onChangeName = {handleNameProject}
          /> 
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
