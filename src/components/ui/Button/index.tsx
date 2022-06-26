import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./Button.module.scss";

const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
