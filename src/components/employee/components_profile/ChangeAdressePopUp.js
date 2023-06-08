import { useCallback ,useState} from "react";
import styles from "./ChangeAdressePopUp.module.css";

const ChangeAdressePopUp = ({ initialAdresse, onSaveButtonClick }) => {
  const [newAdresse, setNewAdresse] = useState(initialAdresse);

  const handleNewAdresseChange = useCallback((e) => {
    setNewAdresse(e.target.value);
  }, []);

  const handleSaveButtonClick = useCallback(() => {
    console.log(newAdresse);
    onSaveButtonClick(newAdresse);
  }, [newAdresse, onSaveButtonClick]);

  return (
    <div className={styles.changeAdressePopUp}>
      <div className={styles.copyParent}>
        <input
          className={styles.copy}
          type="text"
          placeholder="New address"
          id="newAdresse"
          value={newAdresse}
          onChange={handleNewAdresseChange}
        />
        <button className={styles.saveButton} onClick={handleSaveButtonClick}>
          <div className={styles.save}>Save</div>
        </button>
      </div>
    </div>
  );
};

export default ChangeAdressePopUp;