import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { rootStore } from "@store";

import Button from "@ui/Button";
import ContentWrapper from "@ui/ContentWrapper";

import useCheckProcessing from "@hooks";
import styles from "./ListPage.module.scss";
import ListItem from "./ListItem";

const ListPage = observer(() => {
  const { getRequests, getListItemData, processing, getProcessing } =
    rootStore.requestStore;

  useCheckProcessing();

  useEffect(() => {
    getRequests();
  }, [processing.isProcessing]);
  useEffect(() => {
    getProcessing();
  }, []);

  const setRoute = (status: string, id: string | number) => {
    if (status === "SUCCESS") {
      return `success/${id}`;
    }
    if (status === "DRAFT" && !processing.isProcessing) {
      return `draft/${id}`;
    }
    return "loading";
  };
  return (
    <ContentWrapper
      contentTitle="Список заявок"
      contentDescription="Ваши заявки на покупку автомобиля"
    >
      <div className={styles.listPage}>
        <div className={styles.listWrapper}>
          {getListItemData?.map((r) => (
            <Link key={r.id} to={setRoute(r.status, r.id)}>
              <ListItem
                carModel={r.carModel}
                carBrand={r.carBrand}
                number={r.id}
                date={r.data}
                formattedStatus={r.formattedStatus}
                status={r.status}
              />
            </Link>
          ))}
        </div>
        <Link to={processing.isProcessing ? "loading" : "draft"}>
          <Button type="button">Создать заявку</Button>
        </Link>
      </div>
    </ContentWrapper>
  );
});

export default ListPage;
