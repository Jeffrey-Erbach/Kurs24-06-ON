import React from "react";
import styles from "./Content.css";

function Content() {
  const handleClick = () => {
    alert("Hallo von home");
  };

  return (
    <div className={styles.content}>
      <p>Hello from Homepage</p>
      <button onClick={handleClick} className={styles.button}>
        Home
      </button>
    </div>
  );
}

export default Content;
