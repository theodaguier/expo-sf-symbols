
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
<g clip-path="url(#clip0_2207_37634)">
<path d="M6.69239 24.6326H20.9072C23.3682 24.6326 24.5869 23.4138 24.5869 20.9997V6.69116C24.5869 4.2771 23.3682 3.05835 20.9072 3.05835H6.69239C4.24317 3.05835 3.0127 4.26538 3.0127 6.69116V20.9997C3.0127 23.4255 4.24317 24.6326 6.69239 24.6326Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8291 19.4997C10.6768 19.4997 8.68457 17.2497 8.68457 13.7224C8.68457 10.1951 10.6885 7.93335 13.8291 7.93335C15.9619 7.93335 17.6729 8.95288 18.2588 10.5701C18.3408 10.7927 18.3643 10.9333 18.3643 11.1326C18.3643 11.6482 18.0361 11.9646 17.5322 11.9646C17.1572 11.9646 16.9229 11.7888 16.7236 11.3787C16.2197 10.1833 15.2119 9.53882 13.8525 9.53882C11.9307 9.53882 10.6416 11.2263 10.6416 13.7224C10.6416 16.2185 11.9307 17.8943 13.8525 17.8943C15.2119 17.8943 16.2197 17.2497 16.7236 16.0661C16.9229 15.656 17.1572 15.4685 17.5322 15.4685C18.0361 15.4685 18.3643 15.7849 18.3643 16.3005C18.3643 16.4763 18.3408 16.6404 18.2588 16.863C17.6729 18.4919 15.9736 19.4997 13.8291 19.4997Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37634">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.03491)"/>
</clipPath>
</defs>
</svg>

`;

export const CSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
