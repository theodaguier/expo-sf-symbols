
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35984)">
<path d="M27.3931 21.8803C28.354 18.3764 25.7994 16.853 19.5298 16.853C16.5767 16.853 13.6001 17.0991 11.0337 17.5444L11.5845 18.2358C11.9595 13.2553 10.5181 9.09522 7.78762 7.16162L8.01028 8.29834C9.07668 4.65381 6.8384 2.04053 4.0845 2.04053C1.81106 2.04053 0.592305 3.68115 1.23684 6.28272L5.64309 24.1655C6.07669 25.9233 7.23684 26.8608 8.9595 26.8608H22.8814C25.2954 26.8608 26.3619 25.7007 27.3931 21.8803ZM25.5884 21.3764C24.7329 24.5522 24.1939 24.9741 22.8814 24.9741H8.9595C8.18606 24.9741 7.68215 24.5288 7.48294 23.7085L3.04153 5.79053C2.76028 4.64209 3.22903 3.92725 4.09622 3.92725C5.43215 3.92725 6.6509 5.146 6.32278 7.34912C6.20559 8.146 6.28762 8.38037 6.73294 8.74365C8.79544 10.2788 9.95559 13.8296 9.86184 18.2358C9.86184 18.9507 10.3071 19.4077 11.022 19.396C12.3579 19.3022 15.3579 18.7397 19.5298 18.7397C24.6744 18.7397 26.0923 19.5014 25.5884 21.3764Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35984">
<rect width="26.5244" height="24.8555" fill="currentColor" transform="translate(1.06519 2.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
