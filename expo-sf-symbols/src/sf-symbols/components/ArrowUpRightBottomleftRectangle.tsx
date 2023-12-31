
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
<g clip-path="url(#clip0_2207_34217)">
<path d="M3.76172 24.5939H24.0351C26.4961 24.5939 27.7148 23.3869 27.7148 20.9728V6.65246C27.7148 4.2384 26.4961 3.01965 24.0351 3.01965H3.76172C1.3125 3.01965 0.0820312 4.2384 0.0820312 6.65246V20.9728C0.0820312 23.3869 1.3125 24.5939 3.76172 24.5939ZM3.78515 22.7072C2.61328 22.7072 1.96875 22.0861 1.96875 20.8674V6.75793C1.96875 5.53918 2.61328 4.90637 3.78515 4.90637H24.0117C25.1718 4.90637 25.8281 5.53918 25.8281 6.75793V20.8674C25.8281 22.0861 25.1718 22.7072 24.0117 22.7072H3.78515Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1914 19.9181C11.707 19.9181 12.0586 19.5197 12.0586 18.9806V13.6135C12.0586 12.922 11.6718 12.6525 11.0742 12.6525H5.68359C5.13281 12.6525 4.78125 12.9923 4.78125 13.508C4.78125 14.0236 5.14453 14.3635 5.70703 14.3635H7.67578L9.41015 14.1759L7.58203 15.8752L4.04297 19.4142C3.87891 19.5783 3.76172 19.8127 3.76172 20.047C3.76172 20.5744 4.10156 20.9142 4.62891 20.9142C4.91015 20.9142 5.12109 20.8088 5.28515 20.6447L8.82422 17.1174L10.5117 15.3127L10.3359 17.1291V19.0041C10.3359 19.5549 10.6758 19.9181 11.1914 19.9181Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34217">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0820312 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRightBottomleftRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
