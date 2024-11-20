import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  //const [slogan, setSlogan] = useState("");
  const handleNameProject = (nameProject) => {
    setName(nameProject);
  };
  /*const handleSloganProject = (sloganProject) => {
    setSlogan(sloganProject);
  };
  */
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview nameProjectUser={name} />
          <Form
            onChangeInput={handleNameProject}
            //onChangeSlogan={handleSloganProject}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
