export const onRaf = (fn: (...args: Array<unknown>) => void) => {
  let req: number | null = null;
  return (...args: Array<unknown>) => {
    if (req !== null) {
      window.cancelAnimationFrame(req);
    }
    req = window.requestAnimationFrame(() => {
      req = null;
      fn(...args);
    });
  };
};
