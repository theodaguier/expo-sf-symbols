
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
<g clip-path="url(#clip0_2207_34403)">
<path d="M6.69434 24.7334H20.9091C23.3701 24.7334 24.5888 23.5146 24.5888 21.1005V6.79199C24.5888 4.37793 23.3701 3.15918 20.9091 3.15918H6.69434C4.24512 3.15918 3.01465 4.36621 3.01465 6.79199V21.1005C3.01465 23.5263 4.24512 24.7334 6.69434 24.7334ZM6.71777 22.8466C5.5459 22.8466 4.90137 22.2255 4.90137 21.0068V6.88574C4.90137 5.66699 5.5459 5.0459 6.71777 5.0459H20.8857C22.0458 5.0459 22.7021 5.66699 22.7021 6.88574V21.0068C22.7021 22.2255 22.0458 22.8466 20.8857 22.8466H6.71777Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4443 19.9755L13.8077 17.5029L17.1709 19.9755C17.8624 20.4912 18.5772 19.9521 18.3194 19.1552L16.9834 15.1826L20.3819 12.7568C21.003 12.2998 20.8154 11.3857 19.9482 11.3975L15.7764 11.4326L14.499 7.43653C14.2529 6.66309 13.3623 6.66309 13.1162 7.43653L11.8389 11.4326L7.66699 11.3975C6.81153 11.3857 6.60059 12.2881 7.2334 12.7568L10.6318 15.1826L9.30762 19.1552C9.03809 19.9521 9.76465 20.4912 10.4443 19.9755Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34403">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01465 3.13574)"/>
</clipPath>
</defs>
</svg>

`;

export const StarSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
