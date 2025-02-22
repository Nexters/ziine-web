export const formatYYYYMMDDDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const formatDateWithHyphen = (date: string) => {
  return formatYYYYMMDDDate(date).replace(/\./g, '-').replace(/\s/g, '').replace(/-$/, '');
};
