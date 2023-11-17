import { useEffect } from "react";

export const useELementLoaded = (
  element: React.RefObject<HTMLInputElement>
) => {
  debugger;
  console.log("USEELEMENT");
  useEffect(() => {
    if (element.current !== null) {
      element.current.addEventListener("ready", () => {
        debugger;
      });
    }

    return (): void => {
      if (element.current !== null) {
        element.current.removeEventListener("ready", () => {
          console.log("ELEMENT is READY FROM REMOVE");
        });
      }
    };
  }, [element]);
};
