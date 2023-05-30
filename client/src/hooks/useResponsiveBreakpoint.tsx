import { useCallback } from "react";
import { useMediaQuery } from "react-responsive";

type TBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export const useResponsiveBreakpoint = () => {
  const isSM = useMediaQuery({ maxWidth: 768 });
  const isMD = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isLG = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });
  const isXL = useMediaQuery({ minWidth: 1280, maxWidth: 1536 });
  const is2XL = useMediaQuery({ minWidth: 1536 });

  console.log("hook");

  const getBreakpoint = useCallback((): TBreakpoint => {
    if (isSM) return "sm";
    if (isMD) return "md";
    if (isLG) return "lg";
    if (isXL) return "xl";
    if (is2XL) return "2xl";
    return "sm"; // Default value
  }, [isSM, isMD, isLG, isXL, is2XL]);

  return {
    breakpoint: getBreakpoint()
  };
};
