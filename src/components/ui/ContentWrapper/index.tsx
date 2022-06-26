import { FC, PropsWithChildren } from "react";

import styles from "./ContentWrapper.module.scss";

interface IContentWrapper {
  contentTitle: string;
  contentDescription: string;
}

const ContentWrapper: FC<PropsWithChildren<IContentWrapper>> = ({
  contentTitle,
  contentDescription,
  children,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.contentTitle}>{contentTitle}</h2>
        <p className={styles.contentDescription}>{contentDescription}</p>
      </div>
      {children}
    </>
  );
};
export default ContentWrapper;
