import dayjs from "dayjs";

const formatDDMMYYYY = (date: string | number) => {
  return dayjs(date).format("DD.MM.YYYY");
};
export default formatDDMMYYYY;
