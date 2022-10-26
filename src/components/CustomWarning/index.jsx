import styles from "./style.module.css";


export const CustomWarning = (
  { action,
    setRenderWarning,
    warningMessage,
    actionMessage,
    actionCancellationMessage
  }) => {

  window.scrollTo(0, 0);
  document.body.style.overflowY = "hidden";


  const doActions = (option) => {

    if (option) {

      action();
      setRenderWarning(false);

    } else {
      setRenderWarning(false);
    }

    document.body.style.overflowY = "auto";
  }


  return (
    <div className={styles.warning_main_container}>
      <div className={styles.warning_card}>
        <p>{warningMessage}</p>
        <div className={styles.warning_card_options}>
          <button onClick={() => doActions(true)}>{actionMessage}</button>
          <button onClick={() => doActions(false)}>{actionCancellationMessage}</button>
        </div>
      </div>
    </div>
  );
}