import { useCallback, useState } from "react";
import styles from "./ResetPasswordPopUp.module.css";

const ResetPasswordPopUp = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onSaveButtonClick = useCallback(() => {
    console.log(newPassword, confirmNewPassword);
    
  }, [newPassword, confirmNewPassword]);

  const passwordsMatch = newPassword === confirmNewPassword;
  const showPasswordMatchNote = confirmNewPassword.length > 0;

  return (
    <div className={styles.resetPasswordPopUp}>
      <div className={styles.copyParent}>
       
        <input
          className={styles.copy}
          type="password"
          placeholder="New Password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          id="newpass#1"
        />
        <div style={{ position: "relative" }}>
          <input
            className={styles.copy}
            type="password"
            placeholder="Confirm New Password"
            required
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            id="newpass#2"
          />
          {showPasswordMatchNote && (
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                fontSize: "9px",
                fontWeight: "lighter",
                color: passwordsMatch ? "green" : "red",
              }}
            >
              {passwordsMatch ? "Passwords match" : "Passwords don't match"}
            </div>
          )}
        </div>
        <button className={styles.saveButton} onClick={onSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPopUp;