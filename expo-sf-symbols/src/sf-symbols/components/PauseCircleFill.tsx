
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
<g clip-path="url(#clip0_2207_33843)">
<path d="M14.0266 26.0097C20.5657 26.0097 25.9797 20.584 25.9797 14.0566C25.9797 7.51758 20.554 2.10352 14.0149 2.10352C7.48755 2.10352 2.07349 7.51758 2.07349 14.0566C2.07349 20.584 7.49927 26.0097 14.0266 26.0097Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6165 18.7676C10.0188 18.7676 9.74927 18.4394 9.74927 17.9707V10.1191C9.74927 9.6621 10.0188 9.33398 10.6165 9.33398H11.8C12.4094 9.33398 12.679 9.6621 12.679 10.1191V17.9707C12.679 18.4394 12.4094 18.7676 11.8 18.7676H10.6165ZM16.2766 18.7676C15.6673 18.7676 15.3977 18.4394 15.3977 17.9707V10.1191C15.3977 9.6621 15.6673 9.33398 16.2766 9.33398H17.4602C18.0462 9.33398 18.3157 9.6621 18.3157 10.1191V17.9707C18.3157 18.4394 18.0462 18.7676 17.4602 18.7676H16.2766Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33843">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07349 2.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const PauseCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
