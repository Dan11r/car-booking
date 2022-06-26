import { forwardRef, HTMLProps, PropsWithChildren } from "react";
import genID from "react-id-generator";

import styles from "./Checkbox.module.scss";

const Checkbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<HTMLProps<HTMLInputElement>>
>(({ children, ...props }, ref) => {
  const id = genID();
  return (
    <>
      <input
        className={styles.input}
        ref={ref}
        {...props}
        id={id}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </>
  );
});
export default Checkbox;
