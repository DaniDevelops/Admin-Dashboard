import styles from "./pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        // disabled={!hasPrev}
        // onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        // disabled={!hasNext}
        // onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}
