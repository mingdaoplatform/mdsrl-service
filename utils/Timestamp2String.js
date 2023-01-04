export const timestamp2string = (timestamp) => {
  const date = new Date(timestamp);
  return (
    date.getFullYear() +
    "年" +
    (parseInt(date.getMonth()) + 1) +
    "月" +
    date.getDay() +
    "日\n" +
    date.getHours() +
    "時" +
    date.getMinutes() +
    "分"
  );
};
