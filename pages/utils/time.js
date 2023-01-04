export const timestamp2string = (timestamp) => {
  const date = new Date(timestamp);
  return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
};
