
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
<g clip-path="url(#clip0_2207_32921)">
<path d="M11.5618 16.0972L10.261 22.2495C10.0618 23.2105 8.55005 22.9878 8.78442 21.8862L10.1204 15.5816C10.2258 15.0308 10.6829 14.6206 11.2102 14.5855H11.2922L13.2375 8.73779C13.4953 7.96436 14.5149 7.97607 14.7727 8.73779L16.718 14.5855H16.8C17.3391 14.6206 17.7844 15.0308 17.8899 15.5933L19.2375 21.8862C19.4602 22.9878 17.9484 23.2105 17.7609 22.2495L16.4602 16.0972H11.5618ZM13.9992 26.0112C20.5383 26.0112 25.9523 20.5855 25.9523 14.0581C25.9523 7.51904 20.5266 2.10498 13.9875 2.10498C7.4602 2.10498 2.04614 7.51904 2.04614 14.0581C2.04614 20.5855 7.47192 26.0112 13.9992 26.0112Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32921">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PencilTipCropCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
