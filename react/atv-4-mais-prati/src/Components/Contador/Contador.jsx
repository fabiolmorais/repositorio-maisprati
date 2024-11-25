import React, { useState } from "react";
import styles from "./Contador.module.css";

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h2>Contador</h2>
      <p className={styles.counterText}>Contagem: {count}</p>
      <button
        className={`${styles.button} ${styles.increment}`}
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
      <button
        className={`${styles.button} ${styles.decrement}`}
        onClick={() => {
          // condição criada para evitar que o valor seja menor que zero
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
