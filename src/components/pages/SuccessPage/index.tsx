import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { rootStore } from "../../../store";
import SuccessIcon from "../../../assets/images/ok-icon.svg";
import Button from "../../ui/Button";
import formatDDMMYYYY from "../../../utils/dateFormater";

import styles from "./Success.module.scss";

const SuccessPage = observer(() => {
  const { id } = useParams();
  const {
    getCurrentRequest,
    currentRequest,
    resetCurrentRequest,
    resetCurrentRequestStatus,
  } = rootStore.requestStore;
  useEffect(() => {
    if (id) {
      getCurrentRequest(id);
    }
    return () => {
      resetCurrentRequest();
      resetCurrentRequestStatus();
    };
  }, [id]);
  return (
    <div className={styles.successPage}>
      <div className={styles.title}>
        <div className={styles.titleImg}>
          <img src={SuccessIcon} alt="success" />
        </div>
        <div className={styles.titleText}>Заявка № {currentRequest.id}</div>
      </div>
      <div className={styles.description}>
        Автомобиль:
        {` ${currentRequest?.auto?.brand} ${currentRequest?.auto?.model?.name}`}
      </div>
      <div className={styles?.description}>
        Дата заявки: {formatDDMMYYYY(currentRequest?.createDate)}
      </div>
      <div className={styles.button}>
        <Link to="/">
          <Button>К списку заявок</Button>
        </Link>
      </div>
    </div>
  );
});
export default SuccessPage;
