import styles from "@/components/dashboard/dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/Rightbar";
import Transactions from "@/components/dashboard/transactions/Transactions";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
