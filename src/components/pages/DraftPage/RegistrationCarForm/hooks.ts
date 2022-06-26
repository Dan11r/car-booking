import { RefObject, useEffect, useRef, useState } from "react";
import { IRegistrationCarForm } from "@interface/requests";
import { UseFormReset } from "react-hook-form/dist/types/form";

export const useSetDefaultValues = (
  defaultValues: IRegistrationCarForm | undefined,
  reset: UseFormReset<IRegistrationCarForm>,
) => {
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues]);
};

export const useCheckboxIsChecked = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const listener = () => {
    setIsChecked(checkboxRef?.current?.checked || false);
  };
  useEffect(() => {
    const ref = checkboxRef.current;
    checkboxRef?.current?.addEventListener("change", listener);
    return () => {
      ref?.removeEventListener("change", listener);
    };
  }, []);
  const result: [boolean, RefObject<HTMLInputElement>] = [
    isChecked,
    checkboxRef,
  ];
  return result;
};
