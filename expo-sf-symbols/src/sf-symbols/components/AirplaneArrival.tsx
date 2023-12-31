
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
<g clip-path="url(#clip0_2207_35762)">
<path d="M1.40479 24.0903H26.6938C27.2094 24.0903 27.6313 23.6567 27.6313 23.1411C27.6313 22.6255 27.2094 22.2036 26.6938 22.2036H1.40479C0.88916 22.2036 0.467285 22.6255 0.467285 23.1411C0.467285 23.6567 0.88916 24.0903 1.40479 24.0903Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.11566 11.7504L23.1899 17.1527C25.4399 17.7621 27.7251 17.1644 28.0415 15.4183C28.2993 13.8129 26.5415 12.3597 24.4438 11.9496L17.143 10.4965C16.6391 10.4027 16.3462 10.2035 15.9946 9.69958L9.79535 0.78161C9.59613 0.50036 9.3266 0.31286 8.99848 0.230829L8.16645 0.019891C7.87348 -0.0504215 7.65082 0.207391 7.73285 0.570672L9.98285 10.098L10.7212 9.23083L4.56879 8.0238L6.53754 9.24255L1.80316 3.7113C1.56879 3.44177 1.3227 3.35973 0.900818 3.45348L0.455505 3.54723C0.139099 3.60583 -0.00152572 3.85192 0.057068 4.13317L1.29926 10.2035C1.46332 10.9769 2.10785 11.4808 3.11566 11.7504Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35762">
<rect width="28.0226" height="27.199" fill="currentColor" transform="translate(0.0440674 0.00830078)"/>
</clipPath>
</defs>
</svg>

`;

export const AirplaneArrival = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
