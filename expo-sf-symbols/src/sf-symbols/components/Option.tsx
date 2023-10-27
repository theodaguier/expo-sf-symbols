
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
<g clip-path="url(#clip0_2207_33512)">
<path d="M8.78357 3.10254H3.13513C2.51404 3.10254 2.03357 3.55957 2.03357 4.15723C2.03357 4.75488 2.51404 5.22363 3.13513 5.22363H8.29138C8.71326 5.22363 9.01795 5.41113 9.19373 5.79785L16.9164 23.1416C17.35 24.1259 18.0648 24.583 19.143 24.583H24.8617C25.4711 24.583 25.9633 24.1142 25.9633 23.5283C25.9633 22.9423 25.4711 22.4619 24.8617 22.4619H19.6703C19.2016 22.4619 18.9086 22.2861 18.7211 21.8994L11.0336 4.56738C10.6351 3.65332 9.79138 3.10254 8.78357 3.10254ZM24.8617 3.10254H17.2797C16.6586 3.10254 16.1781 3.54785 16.1781 4.14551C16.1781 4.74316 16.6586 5.2002 17.2797 5.2002H24.8617C25.4828 5.2002 25.9516 4.74316 25.9516 4.14551C25.9516 3.54785 25.4828 3.10254 24.8617 3.10254Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33512">
<rect width="23.9297" height="21.4805" fill="currentColor" transform="translate(2.03357 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const Option = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
