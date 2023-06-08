import { useState, useCallback } from "react";
import ResetPasswordPopUp from "./ResetPasswordPopUp";
import PortalPopup from "./PortalPopup";
import styles from "./Password.module.css";
const Password = () => {
  const [isResetPasswordPopUpOpen, setResetPasswordPopUpOpen] = useState(false);

  const openResetPasswordPopUp = useCallback(() => {
    setResetPasswordPopUpOpen(true);
  }, []);

  const closeResetPasswordPopUp = useCallback(() => {
    setResetPasswordPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.password}>
        <div className={styles.password1}>Password</div>
        <button
          className={styles.resetPassword}
          onClick={openResetPasswordPopUp}
        >
          Reset password
        </button>
      </div>
      {isResetPasswordPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeResetPasswordPopUp}
        >
          <ResetPasswordPopUp onClose={closeResetPasswordPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Password;
