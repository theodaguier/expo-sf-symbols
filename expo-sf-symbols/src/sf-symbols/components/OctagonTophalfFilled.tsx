
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
<g clip-path="url(#clip0_2207_34346)">
<path d="M10.2646 25.8134H17.3779C18.8662 25.8134 19.5693 25.333 20.3427 24.5009L24.6552 19.7197C25.4287 18.8642 25.6279 18.3017 25.6279 17.1416V11.7861C25.6279 10.6143 25.4287 10.0635 24.6552 9.20801L20.3427 4.42676C19.5693 3.59473 18.8662 3.10254 17.3779 3.10254H10.2646C8.77637 3.10254 8.06153 3.59473 7.29981 4.42676L2.9873 9.20801C2.21387 10.0635 2.01465 10.6143 2.01465 11.7861V17.1416C2.01465 18.3017 2.21387 18.8642 2.9873 19.7197L7.29981 24.5009C8.06153 25.333 8.77637 25.8134 10.2646 25.8134ZM23.4599 14.458V16.9189C23.4599 17.7744 23.3544 18.0673 22.8857 18.583L18.9013 22.9775C18.2451 23.6806 17.9169 23.9384 16.7451 23.9384H10.8975C9.72559 23.9384 9.38574 23.6806 8.74121 22.9775L4.74512 18.583C4.28809 18.0673 4.18262 17.7744 4.18262 16.9189V14.458H23.4599Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34346">
<rect width="23.6133" height="22.7227" fill="currentColor" transform="translate(2.01465 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OctagonTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
