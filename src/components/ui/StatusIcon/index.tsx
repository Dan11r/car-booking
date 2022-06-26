import { FC } from "react";

import messageIcon from "../../../assets/images/message-icon.svg";
import okIcon from "../../../assets/images/ok-icon.svg";
import synchronize from "../../../assets/images/synchronize-icon.svg";

import styles from "./StatusIcon.module.scss";

interface StatusIconProps {
  isMessageIcon?: boolean;
  isOkIcon?: boolean;
  isSynchronizeIcon?: boolean;
}

const StatusIcon: FC<StatusIconProps> = ({
  isMessageIcon,
  isOkIcon,
  isSynchronizeIcon,
}) => {
  return (
    <div className={styles.icon}>
      {isMessageIcon && <img src={messageIcon} alt="icon" />}
      {isOkIcon && <img src={okIcon} alt="icon" />}
      {isSynchronizeIcon && <img src={synchronize} alt="icon" />}
    </div>
  );
};

export default StatusIcon;
