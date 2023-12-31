
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="28" viewBox="0 0 31 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35763)">
<path d="M2.34656 24.9731H27.6356C28.1512 24.9731 28.5848 24.5395 28.5848 24.0239C28.5848 23.5083 28.1512 23.0864 27.6356 23.0864H2.34656C1.83094 23.0864 1.40906 23.5083 1.40906 24.0239C1.40906 24.5395 1.83094 24.9731 2.34656 24.9731Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.63563 17.1217L26.7333 11.7662C28.9833 11.1568 30.6708 9.50447 30.0614 7.82869C29.4989 6.30526 27.2372 5.93026 25.2216 6.60994L18.1786 9.024C17.6864 9.18807 17.3348 9.17635 16.7723 8.90682L6.95203 4.26619C6.63563 4.12557 6.28407 4.09041 5.96767 4.18416L5.15907 4.43025C4.87782 4.524 4.78406 4.85213 5.04188 5.12166L11.7567 12.2467L11.9794 11.1334L6.0497 13.1724L8.34657 13.2428L1.47939 10.8053C1.16298 10.6998 0.881724 10.7467 0.577037 11.0279L0.237193 11.3443C0.00281791 11.5553 -0.00890078 11.8365 0.190318 12.0474L4.3036 16.6646C4.84267 17.274 5.63953 17.3912 6.63563 17.1217Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35763">
<rect width="30.1366" height="20.9648" fill="currentColor" transform="translate(0.050415 4.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirplaneDeparture = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
