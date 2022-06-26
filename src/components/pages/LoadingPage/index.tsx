import { observer } from "mobx-react-lite";

import loader from "@images/restart-icon.svg";
import useRedirectToSuccessPage from "./hooks";

import styles from "./LoadingPage.module.scss";

const Loader = observer(() => {
  useRedirectToSuccessPage();
  return (
    <div className={styles.loader}>
      <div className={styles.LoaderImg}>
        <img src={loader} alt="loading" />
      </div>
    </div>
  );
});
export default Loader;
