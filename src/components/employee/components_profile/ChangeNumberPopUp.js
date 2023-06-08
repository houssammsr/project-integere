import { useCallback,useState } from "react";
import styles from "./ChangeNumberPopUp.module.css";

const ChangeNumberPopUp = ({ initialContactNumber, onSaveButtonClick }) => {
  const [newContactNumber, setNewContactNumber] = useState(initialContactNumber);

  const handleNewContactNumberChange = useCallback((e) => {
    setNewContactNumber(e.target.value);
  }, []);

  const handleSaveButtonClick = useCallback(() => {
    console.log(newContactNumber);
    onSaveButtonClick(newContactNumber);
  }, [newContactNumber, onSaveButtonClick]);

  return (
    <div className={styles.changeNumberPopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="New contact number"
          id="newContactNumber"
          value={newContactNumber}
          onChange={handleNewContactNumberChange}
        />
        <button className={styles.saveButton} onClick={handleSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeNumberPopUp;