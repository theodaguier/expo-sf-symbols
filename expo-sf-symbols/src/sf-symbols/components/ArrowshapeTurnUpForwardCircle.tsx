
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
<g clip-path="url(#clip0_2207_33135)">
<path d="M14.0288 25.9287C20.5679 25.9287 25.9819 20.503 25.9819 13.9756C25.9819 7.43652 20.5562 2.02246 14.0171 2.02246C7.48974 2.02246 2.07568 7.43652 2.07568 13.9756C2.07568 20.503 7.50146 25.9287 14.0288 25.9287ZM14.0288 23.9366C8.49756 23.9366 4.07959 19.5069 4.07959 13.9756C4.07959 8.44434 8.48584 4.01465 14.0171 4.01465C19.5484 4.01465 23.9898 8.44434 23.9898 13.9756C23.9898 19.5069 19.5601 23.9366 14.0288 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.19287 19.0147C8.4624 19.0147 8.75537 18.9444 8.9663 18.5459C10.0679 16.4834 11.603 15.8623 14.0523 15.8623H14.2398V18.2764C14.2398 18.6983 14.5445 19.0147 14.9663 19.0147C15.2827 19.0147 15.5288 18.8741 15.8218 18.6045L20.8023 13.917C21.0484 13.6944 21.1304 13.4483 21.1304 13.2373C21.1304 13.0264 21.0484 12.7803 20.8023 12.5577L15.8218 7.90527C15.4937 7.60058 15.2945 7.45996 14.978 7.45996C14.5445 7.45996 14.2398 7.81152 14.2398 8.2334V10.624H14.0523C9.54052 10.624 7.54834 13.5069 7.54834 18.1709C7.54834 18.7217 7.86474 19.0147 8.19287 19.0147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33135">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07568 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpForwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
