
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="35" height="29" viewBox="0 0 35 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37044)">
<path d="M0.570566 15.2777L10.4846 21.0199C11.2346 21.4535 12.1604 21.0199 12.1604 20.2113V8.44568C12.1604 7.62536 11.2229 7.15661 10.4846 7.59021L0.570566 13.4027C-0.0974025 13.7894 -0.109122 14.8676 0.570566 15.2777ZM17.5042 26.5511C17.9612 26.5511 18.3714 26.1879 18.3714 25.7308V2.85583C18.3714 2.3988 17.9612 2.04724 17.5042 2.04724C17.0471 2.04724 16.6487 2.3988 16.6487 2.85583V25.7308C16.6487 26.1879 17.0471 26.5511 17.5042 26.5511ZM34.4495 15.2777C35.1292 14.8676 35.1175 13.7894 34.4495 13.4027L24.5354 7.59021C23.7971 7.15661 22.8596 7.62536 22.8596 8.44568V20.2113C22.8596 21.0199 23.7854 21.4535 24.5354 21.0199L34.4495 15.2777Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37044">
<rect width="34.8897" height="24.5273" fill="currentColor" transform="translate(0.0651855 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeftAndLineVerticalAndArrowtriangleRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
