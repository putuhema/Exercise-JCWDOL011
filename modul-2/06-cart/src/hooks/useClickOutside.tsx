import { useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  callback: () => void
) => {
  const clickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });
};
