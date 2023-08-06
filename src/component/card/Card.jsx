import styles from "./Card.module.css";

const Card = ({ cardData, title }) => {
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div key={title} className={styles.title}>
        {title}
      </div>
      {Object.entries(cardData).map(([k, v], i) => (
        <div key={i} className={styles.cell}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
