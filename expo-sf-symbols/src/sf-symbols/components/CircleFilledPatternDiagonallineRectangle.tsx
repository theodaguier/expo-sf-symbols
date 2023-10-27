
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
<g clip-path="url(#clip0_2207_36531)">
<path d="M3.76172 24.6203H24.0351C26.4961 24.6203 27.7148 23.4133 27.7148 20.9992V6.67895C27.7148 4.26489 26.4961 3.04614 24.0351 3.04614H3.76172C1.3125 3.04614 0.0820312 4.26489 0.0820312 6.67895V20.9992C0.0820312 23.4133 1.3125 24.6203 3.76172 24.6203ZM3.78515 22.7336C2.61328 22.7336 1.96875 22.1125 1.96875 20.8938V6.78442C1.96875 5.56567 2.61328 4.93286 3.78515 4.93286H24.0117C25.1718 4.93286 25.8281 5.56567 25.8281 6.78442V20.8938C25.8281 22.1125 25.1718 22.7336 24.0117 22.7336H3.78515Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8515 20.3664C17.4492 20.3664 20.3672 17.4484 20.3672 13.8391C20.3672 10.2415 17.4492 7.32349 13.8515 7.32349C10.2422 7.32349 7.32422 10.2415 7.32422 13.8391C7.32422 17.4484 10.2422 20.3664 13.8515 20.3664ZM13.8515 18.8547C11.0625 18.8547 8.83594 16.6281 8.83594 13.8391C8.83594 11.0501 11.0625 8.83521 13.8515 8.83521C16.6406 8.83521 18.8554 11.0501 18.8554 13.8391C18.8554 16.6281 16.6406 18.8547 13.8515 18.8547ZM9.21094 16.757L16.5703 9.39771L15.2343 8.24927L8.71875 14.7649L9.21094 16.757ZM12.539 19.4992L19.0312 13.0071L18.5273 11.0383L11.2148 18.3391L12.539 19.4992Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36531">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0820312 3.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleFilledPatternDiagonallineRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
