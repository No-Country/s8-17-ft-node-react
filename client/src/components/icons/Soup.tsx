// icon:soup | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconSoup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 19h18M3 11h18a8 8 0 01-8 8h-2a8 8 0 01-8-8zM9 8V5M12 5v3M15 5v3" />
    </svg>
  );
}

export default IconSoup;
