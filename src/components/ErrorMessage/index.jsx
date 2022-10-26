import stlyes from "./style.module.css";


export const ErrorMessage = ({message, internalErrorMessage}) => {
  return (
    <div className={stlyes.error_container}>
      <p>{message ? message : internalErrorMessage}</p>
    </div>
  );
}