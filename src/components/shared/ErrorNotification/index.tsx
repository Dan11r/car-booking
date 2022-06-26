import { toast, ToastContainer } from "react-toastify";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { rootStore } from "../../../store";

import "react-toastify/dist/ReactToastify.css";

const startNotification = (message: string) => toast.error(message);

const ErrorNotification = () => {
  const requestStoreErrors = rootStore.requestStore.errors;
  const dictionaryStoreErrors = rootStore.dictionaryStore.errors;
  const requestFormStoreErrors = rootStore.requestFormStore.errors;

  useEffect(() => {
    const rootErrors = [
      ...requestStoreErrors,
      ...dictionaryStoreErrors,
      ...requestFormStoreErrors,
    ];
    if (rootErrors.length > 0) {
      startNotification(rootErrors[rootErrors.length - 1]);
    }
  }, [requestStoreErrors, dictionaryStoreErrors, requestFormStoreErrors]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
export default observer(ErrorNotification);
