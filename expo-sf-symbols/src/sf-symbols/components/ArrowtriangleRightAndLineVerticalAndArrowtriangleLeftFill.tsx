
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37046)">
<path d="M15.9961 26.5511C16.4531 26.5511 16.8632 26.1879 16.8632 25.7308V2.85583C16.8632 2.3988 16.4531 2.04724 15.9961 2.04724C15.539 2.04724 15.1406 2.3988 15.1406 2.85583V25.7308C15.1406 26.1879 15.539 26.5511 15.9961 26.5511ZM1.75781 21.0199L11.6718 15.2777C12.3515 14.8676 12.3398 13.7894 11.6718 13.4027L1.75781 7.59021C1.01953 7.15661 0.0820312 7.62536 0.0820312 8.44568V20.2113C0.0820312 21.0199 1.00781 21.4535 1.75781 21.0199ZM30.2461 21.0199C30.9961 21.4535 31.9101 21.0199 31.9101 20.2113V8.44568C31.9101 7.62536 30.9843 7.15661 30.2461 7.59021L20.332 13.4027C19.664 13.7894 19.6406 14.8676 20.332 15.2777L30.2461 21.0199Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37046">
<rect width="31.8281" height="24.5273" fill="currentColor" transform="translate(0.0820312 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleRightAndLineVerticalAndArrowtriangleLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
