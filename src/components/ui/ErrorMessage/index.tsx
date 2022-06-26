import { FC } from "react";

import styles from "./ErrorMessage.module.scss";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ message }) => {
  return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;
