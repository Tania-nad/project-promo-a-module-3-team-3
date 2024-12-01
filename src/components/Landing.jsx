import "../scss/layout/_landing.scss";

function Landing() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <img src="brain-lightbulb.png" alt="Logo Proyectos Molones" />
                        <h1>Proyectos Molones</h1>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#about">Sobre Nosotros</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="container">
                    <h2>Escaparate en línea para recoger ideas a través de la tecnología</h2>
                    <a href="#projects" className="btn">Ver Proyectos</a>
                </div>
            </section>

            <section className="projects" id="projects">
                <div className="container">
                    <h2>Nuestros Proyectos Destacados</h2>
                    <div className="projects__list">
                        <article className="project-card">
                            <img src="project1.jpg" alt="Proyecto 1" />
                            <h3>Proyecto 1</h3>
                            <p>Descripción breve del proyecto 1.</p>
                            <a href="#" className="btn-small">Ver más</a>
                        </article>
                        <article className="project-card">
                            <img src="project2.jpg" alt="Proyecto 2" />
                            <h3>Proyecto 2</h3>
                            <p>Descripción breve del proyecto 2.</p>
                            <a href="#" className="btn-small">Ver más</a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <h2>¿Quiénes Somos?</h2>
                    <p>
                        Somos un equipo apasionado que busca dar vida a ideas únicas mediante el uso de tecnología.
                        Creemos en la creatividad y en el impacto positivo de los proyectos innovadores.
                    </p>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <h2>¡Contáctanos!</h2>
                    <form>
                        <input type="text" placeholder="Nombre" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Mensaje" rows="4" required></textarea>
                        <button type="submit" className="btn">Enviar</button>
                    </form>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© 2024 Brilliant Brains. Todos los derechos reservados.</p>
                    <nav>
                        <a href="#home">Inicio</a> |
                        <a href="#projects">Proyectos</a> |
                        <a href="#about">Sobre Nosotros</a>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Landing;
