
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36615)">
<path d="M13.4301 3.75977H15.1528V0.81836C15.1528 0.361328 14.7426 0.00976562 14.2856 0.00976562C13.8286 0.00976562 13.4301 0.361328 13.4301 0.81836V3.75977ZM13.4301 15.7481H15.1528V11.67H13.4301V15.7481ZM14.2856 27.1739C14.7426 27.1739 15.1528 26.8223 15.1528 26.3653V23.4356H13.4301V26.3653C13.4301 26.8223 13.8286 27.1739 14.2856 27.1739Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.86767 12.4668H18.7153C20.4497 12.4668 21.3989 11.541 21.3989 9.83007V5.75195C21.3989 4.04101 20.4497 3.11523 18.7153 3.11523H9.86767C8.12158 3.11523 7.18408 4.04101 7.18408 5.75195V9.83007C7.18408 11.541 8.12158 12.4668 9.86767 12.4668ZM5.71923 24.0801H22.8637C24.5981 24.0801 25.5473 23.1543 25.5473 21.4434V17.3653C25.5473 15.666 24.5981 14.7286 22.8637 14.7286H5.71923C3.97314 14.7286 3.03564 15.666 3.03564 17.3653V21.4434C3.03564 23.1543 3.97314 24.0801 5.71923 24.0801Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36615">
<rect width="22.5117" height="27.1992" fill="currentColor" transform="translate(3.03564 0.00976562)"/>
</clipPath>
</defs>
</svg>

`;

export const AlignHorizontalCenterFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
