
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
<g clip-path="url(#clip0_2207_32902)">
<path d="M13.9741 26.0112C20.5132 26.0112 25.9272 20.5855 25.9272 14.0581C25.9272 7.51904 20.5015 2.10498 13.9624 2.10498C7.43506 2.10498 2.021 7.51904 2.021 14.0581C2.021 20.5855 7.44678 26.0112 13.9741 26.0112ZM13.9741 24.0191C8.44288 24.0191 4.02491 19.5894 4.02491 14.0581C4.02491 8.52686 8.43116 4.09717 13.9624 4.09717C19.4937 4.09717 23.9351 8.52686 23.9351 14.0581C23.9351 19.5894 19.5054 24.0191 13.9741 24.0191Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2124 19.1322L17.8999 11.4682L16.5171 10.0854L8.84131 17.7377L8.17334 19.2963C8.05616 19.5893 8.33741 19.8354 8.59522 19.7416L10.2124 19.1322ZM18.603 10.7768L19.4468 9.9213C19.8218 9.52286 19.8569 9.10098 19.5054 8.74942L19.2358 8.47989C18.8843 8.12833 18.4507 8.16348 18.0757 8.53848L17.2202 9.38223L18.603 10.7768Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32902">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PencilCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
