
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
<g clip-path="url(#clip0_2207_34644)">
<path d="M13.8928 27.0141C14.4202 27.0141 14.9124 26.7914 15.3811 25.9828L17.5491 22.3617H21.4631C24.9553 22.3617 26.8303 20.4281 26.8303 16.9945V8.01795C26.8303 4.58435 24.9553 2.65076 21.4631 2.65076H6.36939C2.8772 2.65076 1.0022 4.57263 1.0022 8.01795V16.9945C1.0022 20.4398 2.8772 22.3617 6.36939 22.3617H10.2366L12.4045 25.9828C12.8733 26.7914 13.3655 27.0141 13.8928 27.0141ZM13.8928 25.0922L11.9358 21.4242C11.5491 20.6625 11.2678 20.475 10.4358 20.475H6.36939C4.0022 20.475 2.88892 19.268 2.88892 16.9828V8.01795C2.88892 5.73279 4.0022 4.53748 6.36939 4.53748H21.4631C23.8186 4.53748 24.9436 5.73279 24.9436 8.01795V16.9828C24.9436 19.268 23.8186 20.475 21.4631 20.475H17.3499C16.5178 20.475 16.2366 20.6625 15.8499 21.4242L13.8928 25.0922Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34644">
<rect width="25.8281" height="25.9805" fill="currentColor" transform="translate(1.0022 1.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleMiddleBottom = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
