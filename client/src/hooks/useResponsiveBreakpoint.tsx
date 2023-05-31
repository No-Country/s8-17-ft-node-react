"use client";

import { useMediaQueries } from "@react-hook/media-query";

export const useResponsiveBreakpoint = () => {
  const { matches } = useMediaQueries({
    sm: "only screen and (min-width: 0px) and (max-width: 400px)",
    md: "only screen and (min-width: 401px) and (max-width: 768px)",
    lg: "only screen and (min-width: 769px) and (max-width: 1024px)",
    xl: "only screen and (min-width: 1025px) and (max-width: 1280px)",
    xxl: "only screen and (min-width: 1281px)"
  });

  return matches;
};
