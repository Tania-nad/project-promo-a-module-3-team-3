import "../scss/App.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Input ({
    technologies, onChangeInput
}) {
    return (
        <main className="main">
            <Hero />

            <Preview 
                technologies={technologies}
            />

            <Form onChangeInput={onChangeInput} />
        </main>
    )
}
Input.propTypes = {
    technologies: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
}
export default Input;



