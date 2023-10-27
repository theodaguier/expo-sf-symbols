
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
<g clip-path="url(#clip0_2207_37419)">
<path d="M4.10376 23.5455C4.71314 23.5455 5.15845 23.1237 5.15845 22.5026C5.15845 22.0924 5.12329 21.7057 5.12329 21.1549C5.12329 16.8073 6.63501 15.0377 10.9358 15.0377H19.0217L21.9045 14.8619L17.9436 18.4713L15.342 21.1198C15.1663 21.3073 15.0608 21.5885 15.0608 21.8698C15.0608 22.4557 15.5061 22.8776 16.092 22.8776C16.3616 22.8776 16.6194 22.7721 16.8538 22.5494L24.635 14.7799C24.8811 14.5455 24.9983 14.276 24.9983 13.983C24.9983 13.7018 24.8811 13.4205 24.635 13.1979L16.8772 5.45178C16.6194 5.19397 16.3616 5.10022 16.092 5.10022C15.5061 5.10022 15.0608 5.52209 15.0608 6.10803C15.0608 6.38928 15.1545 6.65881 15.342 6.84631L17.9436 9.49475L21.8928 13.1041L19.0217 12.9401H10.8303C5.27564 12.9401 3.0022 15.3776 3.0022 21.0494C3.0022 21.7291 3.02563 22.3151 3.10767 22.6666C3.20142 23.1471 3.48267 23.5455 4.10376 23.5455Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37419">
<rect width="21.9961" height="18.5273" fill="currentColor" transform="translate(3.0022 5.01819)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowTurnUpRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
