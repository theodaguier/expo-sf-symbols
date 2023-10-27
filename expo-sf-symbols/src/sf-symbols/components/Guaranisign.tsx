
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
<g clip-path="url(#clip0_2207_37827)">
<path d="M14.9867 24.9234C20.1547 24.9234 22.9906 21.6187 22.9906 16.2632V15.1148C22.9906 14.3765 22.5453 13.9195 21.8305 13.9195H15.3734V15.8882H20.7524V16.7554C20.7524 20.4468 18.5844 22.8726 14.9984 22.8726C10.9906 22.8726 8.38904 19.5093 8.38904 14.189C8.38904 8.93896 10.9906 5.64599 14.9867 5.64599C17.6469 5.64599 19.8617 7.25146 20.4945 9.53662C20.7055 10.2163 20.9984 10.4858 21.6078 10.4858C22.2406 10.4858 22.6508 10.064 22.6391 9.44287C22.6391 9.10302 22.5805 8.76318 22.4633 8.43506C21.432 5.55224 18.5141 3.59521 14.9867 3.59521C9.58435 3.59521 6.03357 7.70849 6.03357 14.189C6.03357 20.7515 9.56091 24.9234 14.9867 24.9234ZM14.8812 27.3843C15.3148 27.3843 15.6429 27.0679 15.6429 26.6109V1.93115C15.6429 1.48584 15.3148 1.16943 14.8812 1.16943C14.4476 1.16943 14.1195 1.48584 14.1195 1.93115V26.6109C14.1195 27.0679 14.4476 27.3843 14.8812 27.3843Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37827">
<rect width="16.957" height="26.3086" fill="currentColor" transform="translate(6.03357 1.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const Guaranisign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
