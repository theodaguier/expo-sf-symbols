
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
<g clip-path="url(#clip0_2207_37912)">
<path d="M2.17408 23.8545H10.553C11.1975 23.8545 11.6428 23.4443 11.6428 22.8115C11.6428 22.1787 11.1741 21.7568 10.553 21.7568H3.38111V14.749H10.2014C10.8577 14.749 11.2327 14.3037 11.2327 13.7529C11.2327 13.1436 10.8108 12.7334 10.2014 12.7334H3.38111V6.15918H10.553C11.1741 6.15918 11.6428 5.76074 11.6428 5.11621C11.6428 4.47168 11.1975 4.06152 10.553 4.06152H2.17408C1.52954 4.06152 1.0022 4.4834 1.0022 5.31543V22.6123C1.0022 23.4443 1.52954 23.8545 2.17408 23.8545ZM15.885 23.8545H26.1272C26.76 23.8545 27.1702 23.456 27.1702 22.8115C27.1702 22.167 26.76 21.7451 26.1272 21.7451H17.467V21.6396L26.5608 6.31152C26.7366 6.01855 26.9124 5.70214 26.9124 5.28027C26.9124 4.53027 26.4084 4.06152 25.6467 4.06152H15.8499C15.217 4.06152 14.7717 4.50684 14.7717 5.11621C14.7717 5.7373 15.217 6.1709 15.8499 6.1709H24.135V6.25293L14.9827 21.6045C14.7717 21.956 14.6545 22.249 14.6545 22.6592C14.6545 23.374 15.1467 23.8545 15.885 23.8545Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37912">
<rect width="26.168" height="19.8164" fill="currentColor" transform="translate(1.0022 4.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const Eurozonesign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
