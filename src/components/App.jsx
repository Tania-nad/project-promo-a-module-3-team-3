import "../scss/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Hero from "./Hero";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Preview />
          <Form />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
