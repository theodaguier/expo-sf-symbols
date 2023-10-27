
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
<g clip-path="url(#clip0_2207_34347)">
<path d="M10.2563 25.8134H17.3696C18.8579 25.8134 19.561 25.333 20.3344 24.5009L24.6469 19.7197C25.4204 18.8642 25.6196 18.3017 25.6196 17.1416V11.7861C25.6196 10.6143 25.4204 10.0635 24.6469 9.20801L20.3344 4.42676C19.561 3.59473 18.8579 3.10254 17.3696 3.10254H10.2563C8.76807 3.10254 8.05323 3.59473 7.29151 4.42676L2.979 9.20801C2.20557 10.0635 2.00635 10.6143 2.00635 11.7861V17.1416C2.00635 18.3017 2.20557 18.8642 2.979 19.7197L7.29151 24.5009C8.05323 25.333 8.76807 25.8134 10.2563 25.8134ZM4.17432 14.458V12.0088C4.17432 11.1533 4.27979 10.8603 4.73682 10.3447L8.73291 5.9502C9.37744 5.23535 9.71729 4.98926 10.8892 4.98926H16.7368C17.9086 4.98926 18.2368 5.23535 18.893 5.9502L22.8774 10.3447C23.3461 10.8603 23.4516 11.1533 23.4516 12.0088V14.458H4.17432Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34347">
<rect width="23.6133" height="22.7227" fill="currentColor" transform="translate(2.00635 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OctagonBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
