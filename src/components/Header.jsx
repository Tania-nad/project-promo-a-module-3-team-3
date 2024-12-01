import icon from "../images/logo_brains.png";


const Header = () => {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={icon}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Brillant Brains</h1>
      </a>
      <h1 className="nameOfProject">BRILLIANT BRAINS</h1>
    </header>
  );
};
export default Header;
