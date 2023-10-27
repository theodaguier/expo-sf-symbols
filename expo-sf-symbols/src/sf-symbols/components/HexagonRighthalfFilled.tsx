
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
<g clip-path="url(#clip0_2207_34351)">
<path d="M23.9236 21.2388C25.0134 20.6059 25.5993 19.9848 25.5993 18.2856V9.16849C25.5993 7.51615 25.0017 6.91849 24.0056 6.34427L15.9665 1.70364C14.5486 0.883332 13.1657 0.859894 11.7126 1.70364L3.6853 6.34427C2.67749 6.91849 2.07983 7.51615 2.07983 9.16849V18.2856C2.07983 19.9848 2.67749 20.6059 3.75561 21.2388L11.7712 25.8559C13.1775 26.6645 14.5251 26.6528 15.9079 25.8559L23.9236 21.2388ZM13.8454 24.4497C13.4236 24.438 13.0134 24.3091 12.5564 24.0513L4.8103 19.563C4.17749 19.1997 3.96655 18.8833 3.96655 18.2388V9.21537C3.96655 8.62943 4.16577 8.33646 4.72827 8.02005L12.4978 3.49662C12.9782 3.22708 13.4118 3.08646 13.8454 3.08646V24.4497Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34351">
<rect width="23.5195" height="25.3799" fill="currentColor" transform="translate(2.07983 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HexagonRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
