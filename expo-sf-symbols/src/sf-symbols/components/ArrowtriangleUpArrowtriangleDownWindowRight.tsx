
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
<g clip-path="url(#clip0_2207_36179)">
<path d="M5.77832 24.4808H23.2509C25.7353 24.4808 26.9306 23.309 26.9306 20.8597V6.57458C26.9306 4.23083 25.7236 3.03552 23.3564 3.03552H17.6728C15.7627 3.03552 14.5674 3.44568 13.0205 4.60583L3.91504 11.5316C2.56738 12.5511 2.09863 13.4535 2.09863 15.1293V20.8597C2.09863 23.309 3.30566 24.4808 5.77832 24.4808ZM5.84863 13.6761C5.22754 13.6761 5.09863 13.0082 5.5791 12.6566L14.3095 5.97692C15.3056 5.18005 16.1728 4.92224 17.6728 4.92224H23.3213C24.4111 4.92224 25.0439 5.53161 25.0439 6.66833V11.9301C25.0439 13.055 24.3994 13.6761 23.3213 13.6761H5.84863Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.3839 11.9418H21.5987C22.2198 11.9418 22.5128 11.4379 22.1729 10.8871L19.6182 6.72694C19.3018 6.1996 18.6807 6.18788 18.3526 6.72694L15.8214 10.8871C15.4815 11.4379 15.751 11.9418 16.3839 11.9418Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.3839 15.8558H21.5987C22.2198 15.8558 22.5128 16.3597 22.1729 16.9105L19.6182 21.0707C19.3018 21.598 18.6807 21.6097 18.3526 21.0707L15.8214 16.9105C15.4815 16.3597 15.751 15.8558 16.3839 15.8558Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36179">
<rect width="24.832" height="21.457" fill="currentColor" transform="translate(2.09863 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleUpArrowtriangleDownWindowRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
