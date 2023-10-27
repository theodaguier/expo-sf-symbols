
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
<g clip-path="url(#clip0_2207_37720)">
<path d="M14.0517 26.0585C20.5908 26.0585 26.0048 20.6328 26.0048 14.1054C26.0048 7.5664 20.5791 2.15234 14.04 2.15234C7.51269 2.15234 2.09863 7.5664 2.09863 14.1054C2.09863 20.6328 7.52441 26.0585 14.0517 26.0585Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0517 19.6484C13.4306 19.6484 13.0908 19.2031 13.0908 18.5468V15.4296L9.68066 9.75781C9.56347 9.55859 9.5166 9.37109 9.5166 9.19531C9.5166 8.72656 9.90332 8.33984 10.4072 8.33984C10.8408 8.33984 11.0752 8.49218 11.333 8.94922L14.0283 13.5898H14.0986L16.8174 8.94922C17.0634 8.5039 17.2861 8.33984 17.708 8.33984C18.2236 8.33984 18.5869 8.71484 18.5869 9.21875C18.5869 9.38281 18.54 9.58203 18.4228 9.75781L15.0361 15.4062V18.5468C15.0361 19.2382 14.6845 19.6484 14.0517 19.6484Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37720">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09863 2.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const YCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
