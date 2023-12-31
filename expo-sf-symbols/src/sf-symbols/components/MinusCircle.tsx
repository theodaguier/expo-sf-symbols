
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37201)">
<path d="M13.9531 26.0039C20.4922 26.0039 25.9062 20.5782 25.9062 14.0508C25.9062 7.51172 20.4805 2.09766 13.9414 2.09766C7.41406 2.09766 2 7.51172 2 14.0508C2 20.5782 7.42578 26.0039 13.9531 26.0039ZM13.9531 24.0118C8.42188 24.0118 4.00391 19.5821 4.00391 14.0508C4.00391 8.51954 8.41016 4.08985 13.9414 4.08985C19.4727 4.08985 23.9141 8.51954 23.9141 14.0508C23.9141 19.5821 19.4844 24.0118 13.9531 24.0118Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.34766 15.0468H18.5469C19.2031 15.0468 19.6484 14.6953 19.6484 14.0742C19.6484 13.4414 19.2266 13.0781 18.5469 13.0781H9.34766C8.66797 13.0781 8.23438 13.4414 8.23438 14.0742C8.23438 14.6953 8.69141 15.0468 9.34766 15.0468Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37201">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
