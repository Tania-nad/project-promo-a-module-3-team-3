import PropTypes from "prop-types";
/* eslint-disable react/prop-types*/

const Preview = (props) => {
  console.log(props);
  return (
    <section className="preview">
      {/* Imagen del proyecto */}
      <div className="projectImage">
        {props.photo ? (
          <img src={props.photo} alt="Imagen del proyecto" className="projectImage__img" />
        ) : null}
      </div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            {props.nameProjectUser}
          </span>
        </h2>

        <div className="card__author">
          {/* Foto de la autora */}
          <div className="card__authorPhoto">
            {props.image ? (
              <img src={props.image} alt="Imagen de la autora" className="authorPhoto__img" />
            ) : null}
          </div>
          <p className="card__job">{props.jobProjectUser}</p>
          <h3 className="card__name">{props.authorProjectUser}</h3>
        </div>
        <div className="card__project">
          <h3 className="card__name"></h3>
          <p className="card__slogan">{props.sloganProjectUser}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{props.descProjectUser}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{props.techProjectUser}</p>

            <a
              className="icon icon__www"
              href={props.demoProjectUser}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={props.repoProjectUser}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

Preview.propTypes = {
  nameProjectUser: PropTypes.string,
  technologies: PropTypes.string,
  imageProjectUser: PropTypes.string, // Puede ser null si no se sube la imagen
  imageAuthorUser: PropTypes.string,  // Puede ser null si no se sube la imagen
};
export default Preview;
Preview.PropTypes = {
  nameProjectUser: PropTypes.function,
};
