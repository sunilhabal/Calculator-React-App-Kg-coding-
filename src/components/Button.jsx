import styles from "./Buttton.module.css";
export default function Button() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className ={styles.btn}>{buttonName}</button>
      ))}
    </div>
  );
}
