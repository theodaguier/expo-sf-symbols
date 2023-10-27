
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
<g clip-path="url(#clip0_2207_34913)">
<path d="M0.010498 22.2295C0.010498 24.5498 1.20581 25.7685 3.51441 25.7685H18.0105C20.3425 25.7685 21.5613 24.5732 21.5613 22.2764V17.331C21.5613 17.0967 21.7488 16.9912 21.9832 17.1787C22.6277 17.6709 23.3894 18.0693 24.3972 18.0693C26.3894 18.0693 27.9363 16.499 27.9363 14.4834C27.9363 12.4795 26.3894 10.9092 24.3972 10.9092C23.3894 10.9092 22.6277 11.3076 21.9832 11.7998C21.7488 11.9873 21.5613 11.8818 21.5613 11.6475V6.6084C21.5613 4.31152 20.3425 3.11621 18.0105 3.11621H3.51441C1.20581 3.11621 0.010498 4.33496 0.010498 6.65527V11.6826C0.010498 12.4443 0.608154 12.9482 1.31128 12.9482C1.698 12.9482 2.10816 12.7842 2.47144 12.4326C3.02222 11.917 3.70191 11.2607 5.06128 11.2607C6.83081 11.2607 8.22534 12.667 8.22534 14.46C8.22534 16.2529 6.83081 17.6592 5.06128 17.6592C3.70191 17.6592 3.02222 16.9912 2.47144 16.4756C2.10816 16.1357 1.698 15.9717 1.31128 15.9717C0.608154 15.9717 0.010498 16.4756 0.010498 17.2373V22.2295Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34913">
<rect width="27.9258" height="22.6992" fill="currentColor" transform="translate(0.010498 3.11621)"/>
</clipPath>
</defs>
</svg>

`;

export const PuzzlepieceExtensionFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
