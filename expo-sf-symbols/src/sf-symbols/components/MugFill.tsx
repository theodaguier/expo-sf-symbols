
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
<g clip-path="url(#clip0_2207_36901)">
<path d="M11.1348 26.873H13.3848C18.3418 26.873 21.4356 24.2715 21.4356 20.0996V5.3457C21.4356 3.24805 17.5215 2.09961 12.2598 2.09961C6.99804 2.09961 3.08398 3.24805 3.08398 5.3457V20.0996C3.08398 24.2715 6.18945 26.873 11.1348 26.873ZM12.2598 5.99023C8.1582 5.99023 5.32226 5.54492 5.32226 4.87695C5.32226 4.20899 8.1582 3.75195 12.2598 3.75195C16.3613 3.75195 19.1973 4.20899 19.1973 4.87695C19.1973 5.54492 16.3613 5.99023 12.2598 5.99023ZM20.1934 19.8887H22.1387C24.2246 19.8887 25.5606 18.4824 25.5606 16.3848V11.6973C25.5606 9.58789 24.2246 8.19336 22.1387 8.19336H20.1934V9.96289H22.1387C23.3223 9.96289 23.791 10.4434 23.791 11.6973V16.3848C23.791 17.6269 23.3223 18.1191 22.1387 18.1191H20.1934V19.8887Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36901">
<rect width="22.4766" height="24.7852" fill="currentColor" transform="translate(3.08398 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MugFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
