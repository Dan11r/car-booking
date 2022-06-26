import { FC } from "react";

import ErrorMessage from "@ui/ErrorMessage";

import { useFormContext } from "react-hook-form";
import styles from "./Input.module.scss";
import { IBaseField } from "../interface";

const Input: FC<IBaseField> = ({ name, rules, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        placeholder={placeholder}
        {...register(name, rules)}
        className={styles.input}
      />
      {errors[name]?.message && (
        <ErrorMessage message={errors[name]?.message} />
      )}
    </>
  );
};

export default Input;
