
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
<g clip-path="url(#clip0_2207_37712)">
<path d="M14.0412 26.0546C20.5803 26.0546 25.9943 20.6289 25.9943 14.1015C25.9943 7.5625 20.5686 2.14844 14.0295 2.14844C7.50219 2.14844 2.08813 7.5625 2.08813 14.1015C2.08813 20.6289 7.51392 26.0546 14.0412 26.0546Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7834 19.7617C10.1624 19.7617 9.74047 19.4218 9.58813 18.8007L7.19751 9.63672C7.16235 9.50782 7.15063 9.37891 7.15063 9.27344C7.15063 8.72266 7.51391 8.34766 8.07641 8.34766C8.65063 8.34766 8.90844 8.61719 9.06079 9.3086L10.8655 16.9843H10.9475L12.9631 9.16797C13.092 8.62891 13.4553 8.3711 14.0295 8.3711C14.6037 8.3711 14.9436 8.62891 15.0842 9.16797L17.1115 16.9843H17.1936L18.9983 9.3086C19.1506 8.61719 19.4201 8.34766 19.9943 8.34766C20.5451 8.34766 20.9201 8.72266 20.9201 9.27344C20.9201 9.37891 20.9084 9.50782 20.8615 9.63672L18.4709 18.8007C18.3186 19.4218 17.8967 19.7617 17.2522 19.7617C16.6193 19.7617 16.174 19.4336 16.0334 18.8242L14.0647 11.2187H13.9826L12.0256 18.8242C11.885 19.4336 11.4397 19.7617 10.7834 19.7617Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37712">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08813 2.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const WCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
