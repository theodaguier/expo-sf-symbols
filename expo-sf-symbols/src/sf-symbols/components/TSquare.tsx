
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
<g clip-path="url(#clip0_2207_37701)">
<path d="M6.70288 24.7383H20.9177C23.3787 24.7383 24.5974 23.5195 24.5974 21.1054V6.79688C24.5974 4.38281 23.3787 3.16406 20.9177 3.16406H6.70288C4.25366 3.16406 3.02319 4.37109 3.02319 6.79688V21.1054C3.02319 23.5312 4.25366 24.7383 6.70288 24.7383ZM6.72631 22.8515C5.55444 22.8515 4.90991 22.2304 4.90991 21.0117V6.89062C4.90991 5.67188 5.55444 5.05078 6.72631 5.05078H20.8943C22.0544 5.05078 22.7107 5.67188 22.7107 6.89062V21.0117C22.7107 22.2304 22.0544 22.8515 20.8943 22.8515H6.72631Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.7927 19.3476C14.4021 19.3476 14.7302 18.9375 14.7302 18.2929V10.0664H17.6482C18.0935 10.0664 18.4334 9.76172 18.4334 9.29297C18.4334 8.81251 18.0935 8.53125 17.6482 8.53125H9.98413C9.53881 8.53125 9.19897 8.81251 9.19897 9.29297C9.19897 9.76172 9.53881 10.0664 9.98413 10.0664H12.8669V18.2929C12.8669 18.914 13.1834 19.3476 13.7927 19.3476Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37701">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02319 3.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const TSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
