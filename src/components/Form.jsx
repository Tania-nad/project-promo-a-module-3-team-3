import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";

function Form(props) {
  const handleChangeProject = (event) => {
    props.onChangeInput(event.target.value);
  };
  const handleChangeSlogan = (event) => {
    props.onChangeSlogan(event.target.value);
  };
  const handleAuthorName = (event) => {
    props.onChangeAuthor(event.target.value);
  };
  const handleChangeJob = (event) => {
    props.onChangeJob(event.target.value);
  };
  const handleChangeTech = (event) => {
    props.onChangeTech(event.target.value);
  };
  const handleChangeDesc = (event) => {
    props.onChangeDesc(event.target.value);
  };
  const handleChangeRepo = (event) => {
    props.onChangeRepo(event.target.value);
  };
  const handleChangeDemo = (event) => {
    props.onChangeDemo(event.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.onSubmitForm();
  };
  const handleClickImage = () => {
    props.onSubmitImage();
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleChangeProject}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          onChange={handleChangeSlogan}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            onChange={handleChangeRepo}
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            className="addForm__input"
            onChange={handleChangeDemo}
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            //target="_blank" no unciona en un input
          />
        </div>
        <input
          onChange={handleChangeTech}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          onChange={handleChangeDesc}
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
          onChange={handleAuthorName}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleChangeJob}
        />
      </fieldset>

      <GetAvatar
        text="Subir foto de la autora"
        updateAvatar={handleChangeProjectImage}
      />
      <GetAvatar
        text="Subir foto del proyecto"
        updateAvatar={handleChangeAuthorImage}
      />

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
          onClick={handleClickImage}
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button className="button--large" onClick={handleSubmit}>
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onChangeName: PropTypes.func, // Declaramos la nueva prop
  onChangeProjectImage: PropTypes.func.isRequired,
  onChangeAuthorImage: PropTypes.func.isRequired,
};

export default Form;
