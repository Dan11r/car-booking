import { useEffect, useState } from "react";

const useCarModelIsDisabled = (carBrand: string) => {
  const [carModelInputIsDisabled, setCarModelInputIsDisabled] = useState(false);
  useEffect(() => {
    setCarModelInputIsDisabled(!carBrand);
  }, [carBrand]);
  return carModelInputIsDisabled;
};

export default useCarModelIsDisabled;
