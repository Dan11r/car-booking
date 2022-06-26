import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { rootStore } from "@store";

import ContentWrapper from "@ui/ContentWrapper";
import RegistrationCarForm from "./RegistrationCarForm";

import styles from "./DraftPage.module.scss";

const { getDictionary } = rootStore.dictionaryStore;
const {
  getCurrentRequest,
  resetCurrentRequest,
  resetCurrentRequestStatus,
  getRequestStatus,
} = rootStore.requestStore;

const DraftPage = () => {
  const { id } = useParams();

  useEffect(() => {
    getDictionary("DICT_AUTO");
    getDictionary("DICT_CITIES");
  }, []);
  useEffect(() => {
    if (id) {
      getCurrentRequest(id);
      getRequestStatus(id);
    } else {
      resetCurrentRequest();
      resetCurrentRequestStatus();
    }
    return () => {
      resetCurrentRequest();
      resetCurrentRequestStatus();
    };
  }, [id]);
  return (
    <ContentWrapper
      contentTitle="Оставить заявку"
      contentDescription="Заполните данные формы"
    >
      <div className={styles.draftPage}>
        <RegistrationCarForm id={id} />
      </div>
    </ContentWrapper>
  );
};
export default observer(DraftPage);
