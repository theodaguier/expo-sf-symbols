
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
<g clip-path="url(#clip0_2207_35115)">
<path d="M5.51282 13.6358V4.35449C5.51282 4.16699 5.63001 4.03809 5.80579 4.03809H13.2355V13.6358H5.51282ZM14.7707 13.6358V4.03809H22.1886C22.3644 4.03809 22.4816 4.16699 22.4816 4.35449V13.6358H14.7707ZM5.51282 25.0733V15.5225H13.2355V25.0733H5.51282ZM14.7707 25.0733V15.5225H22.4816V25.0733H14.7707Z" fill="currentColor"/>
<path d="M2.04407 26.0459C2.04407 26.5733 2.48938 27.0186 3.01672 27.0186H25.0129C25.5402 27.0186 25.9855 26.5733 25.9855 26.0459C25.9855 25.5069 25.5402 25.0733 25.0129 25.0733H24.38V3.89746C24.38 2.85449 23.6535 2.15137 22.5753 2.15137H5.41907C4.34095 2.15137 3.61438 2.85449 3.61438 3.89746V25.0733H3.01672C2.48938 25.0733 2.04407 25.5069 2.04407 26.0459ZM5.51282 13.6358V4.35449C5.51282 4.16699 5.63001 4.03809 5.80579 4.03809H13.2355V13.6358H5.51282ZM14.7707 13.6358V4.03809H22.1886C22.3644 4.03809 22.4816 4.16699 22.4816 4.35449V13.6358H14.7707ZM5.51282 25.0733V15.5225H13.2355V25.0733H5.51282ZM14.7707 25.0733V15.5225H22.4816V25.0733H14.7707Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35115">
<rect width="23.9414" height="24.8789" fill="currentColor" transform="translate(2.04407 2.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowAwningClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
