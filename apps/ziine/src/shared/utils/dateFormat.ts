export const formatYYYYMMDDDate = (date: string) => {
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const formatDateWithHyphen = (date: string) => {
  return formatYYYYMMDDDate(date).replace(/\./g, '-').replace(/\s/g, '').replace(/-$/, '');
};
