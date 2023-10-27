
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
<g clip-path="url(#clip0_2207_35546)">
<path d="M5.07557 23.1101C4.89979 23.4499 5.26307 23.7546 5.54432 23.6023L7.30214 22.6882L6.02479 21.4109L5.07557 23.1101ZM18.6927 8.06325L6.93885 19.7468L6.56385 20.4148L8.30995 22.1726L9.00135 21.8093L20.7552 10.114L18.6927 8.06325ZM23.2631 5.55543C22.6888 4.98121 21.7748 4.98121 21.2123 5.54371L19.7006 7.05543L21.7631 9.11793L23.2631 7.61793C23.8373 7.04371 23.8373 6.11793 23.2631 5.55543Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35546">
<rect width="18.6643" height="18.6314" fill="currentColor" transform="translate(5.02942 5.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const ApplepencilGen1 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
