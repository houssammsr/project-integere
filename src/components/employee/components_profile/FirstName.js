import styles from "./FirstName.module.css";
const FullName = ({ fullName }) => {
  return (
    <div className={styles.firstName}>
      <div className={styles.fullName}>Full Name</div>
      <div className={styles.mansourHoussam}>{fullName}</div>
    </div>
  );
};

export default FullName;
