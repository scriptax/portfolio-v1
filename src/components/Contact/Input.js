import { useContext } from "react";
import { AccentContext } from "../../App";

function Input(props) {
  const accent = useContext(AccentContext);
  const {
    name,
    placeholder,
    type,
    value,
    movePlaceHolder,
    control: { changeHandler, blurHandler, focusHandler },
  } = props;

  return (
    <>
      {type === "textarea" ? (
        <label className={`inpt inpt-${accent} mb-2`}>
          <textarea
            className="font-md fontfam-temp pl-1 pt-1"
            name={name}
            type={type}
            value={value}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
            required
          />
          <span></span>
          <span></span>
          <span
            className={`${
              movePlaceHolder && "input-filled"
            } font-md fontfam-cont`}
          >
            {placeholder}
          </span>
        </label>
      ) : (
        <label className={`inpt inpt-${accent} mb-2`}>
          <input
            className="font-md fontfam-temp pl-1"
            name={name}
            type={type}
            value={value}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
            required
          />
          <span></span>
          <span></span>
          <span
            className={`${
              movePlaceHolder && "input-filled"
            } font-md fontfam-cont`}
          >
            {placeholder}
          </span>
        </label>
      )}
    </>
  );
}

export default Input;
