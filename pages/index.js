import HeadTag from "../components/HeadTag";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadTag />
      <HomePage />
    </div>
  );
}
