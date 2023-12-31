
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
<g clip-path="url(#clip0_2207_35107)">
<path d="M5.53174 13.6358V4.35449C5.53174 4.16699 5.64893 4.03809 5.82471 4.03809H13.2544V13.6358H5.53174ZM14.7896 13.6358V4.03809H22.2075C22.3833 4.03809 22.5005 4.16699 22.5005 4.35449V13.6358H14.7896ZM5.53174 25.0733V15.5225H13.2544V25.0733H5.53174ZM14.7896 25.0733V15.5225H22.5005V25.0733H14.7896Z" fill="currentColor"/>
<path d="M2.06299 26.0459C2.06299 26.5733 2.5083 27.0186 3.03564 27.0186H25.0318C25.5591 27.0186 26.0044 26.5733 26.0044 26.0459C26.0044 25.5069 25.5591 25.0733 25.0318 25.0733H24.3989V3.89746C24.3989 2.85449 23.6724 2.15137 22.5942 2.15137H5.43799C4.35987 2.15137 3.6333 2.85449 3.6333 3.89746V25.0733H3.03564C2.5083 25.0733 2.06299 25.5069 2.06299 26.0459ZM5.53174 13.6358V4.35449C5.53174 4.16699 5.64893 4.03809 5.82471 4.03809H13.2544V13.6358H5.53174ZM14.7896 13.6358V4.03809H22.2075C22.3833 4.03809 22.5005 4.16699 22.5005 4.35449V13.6358H14.7896ZM5.53174 25.0733V15.5225H13.2544V25.0733H5.53174ZM14.7896 25.0733V15.5225H22.5005V25.0733H14.7896Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35107">
<rect width="23.9414" height="24.8789" fill="currentColor" transform="translate(2.06299 2.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowVerticalClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
