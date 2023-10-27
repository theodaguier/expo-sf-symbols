
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
<g clip-path="url(#clip0_2207_34519)">
<path d="M6.73633 24.6788H20.9511C23.4121 24.6788 24.6308 23.46 24.6308 21.0459V6.7373C24.6308 4.32324 23.4121 3.10449 20.9511 3.10449H6.73633C4.28711 3.10449 3.05664 4.31152 3.05664 6.7373V21.0459C3.05664 23.4717 4.28711 24.6788 6.73633 24.6788ZM6.75976 22.792C5.58789 22.792 4.94336 22.1709 4.94336 20.9522V6.83105C4.94336 5.6123 5.58789 4.99121 6.75976 4.99121H20.9277C22.0878 4.99121 22.7441 5.6123 22.7441 6.83105V20.9522C22.7441 22.1709 22.0878 22.792 20.9277 22.792H6.75976Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.66602 18.1749H18.5722C19.9668 18.1749 21.0566 17.0616 21.0566 15.7022C21.0566 14.5303 20.2714 13.5577 19.2285 13.2999C19.2402 13.1827 19.2519 13.0654 19.2519 12.96C19.2519 10.5811 17.3535 8.64746 14.916 8.64746C13.4863 8.64746 12.2207 9.32714 11.4355 10.4053C11.2832 10.3701 11.1074 10.3467 10.9668 10.3467C9.75976 10.3467 8.74023 11.2256 8.56445 12.4326C7.47461 12.8662 6.66602 13.9327 6.66602 15.21C6.66602 17.1436 7.9668 18.1749 9.66602 18.1749Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34519">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05664 3.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const IcloudSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
