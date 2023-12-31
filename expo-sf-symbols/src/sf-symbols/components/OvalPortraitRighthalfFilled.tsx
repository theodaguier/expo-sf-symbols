
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
<g clip-path="url(#clip0_2207_34318)">
<path d="M13.8496 0.102539C7.46289 0.102539 3.05664 5.8916 3.05664 14.1298C3.05664 22.3681 7.46289 28.1572 13.8496 28.1572C20.2246 28.1572 24.6425 22.3564 24.6425 14.1298C24.6425 5.90332 20.2246 0.102539 13.8496 0.102539ZM13.8496 1.98926V26.2705C8.57617 26.2705 4.94336 21.2548 4.94336 14.1298C4.94336 7.00488 8.57617 1.98926 13.8496 1.98926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34318">
<rect width="21.5859" height="28.0664" fill="currentColor" transform="translate(3.05664 0.102539)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalPortraitRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
