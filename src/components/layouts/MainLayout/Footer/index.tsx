import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>Copyritht 2014, Бронирование автомобилей</p>
      </div>
    </footer>
  );
};

export default Footer;
