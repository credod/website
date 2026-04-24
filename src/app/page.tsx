import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Credo Duarte</h1>
        <p className={styles.tagline}>[Software Engineer]</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/clouds.jpg"
          width={2500}
          height={1875}
          alt="A bright blue sky with scattered fluffy white clouds, including a few larger cloud clusters near the center and smaller ones drifting across the open space."
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1280px) 65vw, (min-width: 1020px) 80vw, 95vw"
          className={styles.image}
        />
      </div>
      <p className={styles.email}>studio@credoduarte.com</p>
    </main>
  );
}
