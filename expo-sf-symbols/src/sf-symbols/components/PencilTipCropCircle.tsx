
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
<g clip-path="url(#clip0_2207_32920)">
<path d="M13.2229 8.73779L11.0315 15.312H16.9612L14.7581 8.73779C14.5003 7.97607 13.4807 7.97607 13.2229 8.73779ZM18.7542 24.0073C19.1057 24.0073 19.5745 23.5972 19.4807 23.1167L17.8753 15.5933C17.7581 15.0073 17.2893 14.5855 16.7268 14.5855H11.2541C10.7034 14.5855 10.2229 15.0073 10.1057 15.5816L8.50023 23.1167C8.4182 23.5269 8.69945 23.9253 9.09789 23.9956C9.50804 24.0777 9.90648 23.8316 9.98851 23.4214L11.5705 15.9917L11.4182 16.0972H16.5745L16.4104 15.9917L17.9924 23.4214C18.0627 23.7847 18.3792 24.0191 18.7542 24.0073Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9846 26.0112C20.5237 26.0112 25.9377 20.5855 25.9377 14.0581C25.9377 7.51904 20.512 2.10498 13.9729 2.10498C7.44555 2.10498 2.03149 7.51904 2.03149 14.0581C2.03149 20.5855 7.45727 26.0112 13.9846 26.0112ZM13.9846 24.0191C8.45337 24.0191 4.0354 19.5894 4.0354 14.0581C4.0354 8.52686 8.44165 4.09717 13.9729 4.09717C19.5042 4.09717 23.9456 8.52686 23.9456 14.0581C23.9456 19.5894 19.5159 24.0191 13.9846 24.0191Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32920">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03149 2.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PencilTipCropCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
