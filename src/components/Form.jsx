import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";

function Form(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.onSubmitForm();
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={(e) => props.onChangeInput(e.target.value)}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          onChange={(e) => props.onChangeSlogan(e.target.value)}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            onChange={(e) => props.onChangeRepo(e.target.value)}
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            className="addForm__input"
            onChange={(e) => props.onChangeDemo(e.target.value)}
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
          />
        </div>
        <input
          onChange={(e) => props.onChangeTech(e.target.value)}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          onChange={(e) => props.onChangeDesc(e.target.value)}
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={(e) => props.onChangeAuthor(e.target.value)}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={(e) => props.onChangeJob(e.target.value)}
        />
      </fieldset>

      {/* File Uploads Handled by GetAvatar */}
      <GetAvatar
        text="Subir foto de la autora"
        updateAvatar={props.onChangeAuthorImage}
      />
      <GetAvatar
        text="Subir foto del proyecto"
        updateAvatar={props.onChangeProjectImage}
      />

      <button className="button--large" type="submit" onClick={handleSubmit}>
        Guardar proyecto
      </button>
    </form>
  );
}

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onChangeSlogan: PropTypes.func.isRequired,
  onChangeAuthor: PropTypes.func.isRequired,
  onChangeJob: PropTypes.func.isRequired,
  onChangeTech: PropTypes.func.isRequired,
  onChangeDesc: PropTypes.func.isRequired,
  onChangeRepo: PropTypes.func.isRequired,
  onChangeDemo: PropTypes.func.isRequired,
  onChangeProjectImage: PropTypes.func.isRequired,
  onChangeAuthorImage: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;


