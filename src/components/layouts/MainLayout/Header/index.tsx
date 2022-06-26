import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
          <h1>Бронирование Автомобилей</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
