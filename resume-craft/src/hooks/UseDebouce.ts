import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

export const useDebouce = <T>(value: T, delay?: number): T => {
  const [debouce, setDebouce] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouce(value), delay || 500);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debouce;
};
