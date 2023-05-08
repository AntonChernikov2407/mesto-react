import { memo, useState } from "react";

const FormValidator = memo((props) => {

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  function checkValidity(evt) {
    const input = evt.target;
    props.onChange && props.onChange({name: input.name, value: input.value});
    if (!input.validity.valid) {
      setError(true);
      setErrorText(input.validationMessage);
      props.setInputValidity({name: input.name, value: false});
    } else {
      setError(false);
      setErrorText('');
      props.setInputValidity({name: input.name, value: true});
    }
  }

  return(
    <>
      <input
        className={`form__input ${error ? "form__input_type_error" : ""}`}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength || ''}
        maxLength={props.maxLength || ''}
        required
        value={props.value || ''}
        onChange={checkValidity}
      />
      <span className={`form__input-error ${props.name}-input-error ${error ? "form__input-error_active" : ""}`}>{errorText}</span>
    </>
  )

})

export default FormValidator;

