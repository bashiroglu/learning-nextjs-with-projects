import Head from "next/head";
import AnouncementCard from "../components/AnouncementCard";
import styles from "../styles/Home.module.css";
const anouncements = [
  {
    title: "Alma satiram",
    link: "/anouncements/hi",
  },
  {
    title: "Köynək satıram",
    link: "/anouncements/hi2",
  },
];
export default function Home() {
  return (
    <div className={styles.container}>
      {anouncements.map(({ title, link }) => {
        return <AnouncementCard key={title} title={title} link={link} />;
      })}
    </div>
  );
}
