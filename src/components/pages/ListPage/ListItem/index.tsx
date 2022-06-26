import { FC } from "react";

import StatusIcon from "@ui/StatusIcon";
import { IListItem } from "./interface";

import styles from "./ListItem.module.scss";

const ListItem: FC<IListItem> = ({
  number,
  carBrand,
  carModel,
  formattedStatus,
  status,
  date,
}) => {
  return (
    <div className={styles.ListItem}>
      <StatusIcon
        isSynchronizeIcon={status === "PROCESSING"}
        isMessageIcon={status === "DRAFT"}
        isOkIcon={status === "SUCCESS"}
      />
      <div className={styles.description}>
        <p className={styles.carName}>
          Заявка №{number} на автомобиль {carBrand} {carModel}
        </p>
        <p className={styles.status}>Статус: {formattedStatus}</p>
        <p className={styles.date}>Дата: {date}</p>
      </div>
    </div>
  );
};
export default ListItem;
