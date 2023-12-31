
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
<g clip-path="url(#clip0_2207_34463)">
<path d="M13.993 25.9474C20.5321 25.9474 25.9461 20.5333 25.9461 13.9942C25.9461 7.46692 20.5204 2.04114 13.9813 2.04114C7.45398 2.04114 2.03992 7.46692 2.03992 13.9942C2.03992 20.5333 7.4657 25.9474 13.993 25.9474Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.69616 18.3536C8.06335 18.3536 7.70007 18.0255 7.70007 17.5567C7.70007 16.8771 8.37975 16.2911 8.95397 15.6935C9.39929 15.213 9.49303 14.2638 9.55163 13.5138C9.5985 10.9239 10.2899 9.16613 12.0594 8.50988C12.3407 7.64269 13.0204 6.95129 14.0047 6.95129C14.9891 6.95129 15.6805 7.64269 15.9501 8.50988C17.7196 9.16613 18.411 10.9239 18.4696 13.5138C18.5165 14.2638 18.5985 15.213 19.0555 15.6935C19.6532 16.2794 20.3094 16.8771 20.3094 17.5567C20.3094 18.0255 19.9461 18.3536 19.3251 18.3536H8.69616ZM14.0047 21.1544C12.868 21.1544 12.0477 20.3341 11.9657 19.3732H16.0438C15.9735 20.3341 15.1415 21.1544 14.0047 21.1544Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34463">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03992 2.02942)"/>
</clipPath>
</defs>
</svg>

`;

export const BellCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
