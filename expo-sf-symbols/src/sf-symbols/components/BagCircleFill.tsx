
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
<g clip-path="url(#clip0_2207_34766)">
<path d="M14.0014 25.9446C20.5405 25.9446 25.9545 20.5305 25.9545 13.9914C25.9545 7.46411 20.5288 2.03833 13.9897 2.03833C7.4624 2.03833 2.04834 7.46411 2.04834 13.9914C2.04834 20.5305 7.47412 25.9446 14.0014 25.9446Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4038 19.9328C9.07959 19.9328 8.41162 19.2883 8.41162 17.9993V11.4719C8.41162 10.1711 9.07959 9.53833 10.4038 9.53833H11.3999C11.4233 8.20239 12.5717 7.07739 14.0014 7.07739C15.4311 7.07739 16.5795 8.20239 16.603 9.53833H17.5991C18.9233 9.53833 19.5913 10.1829 19.5913 11.4719V17.9993C19.5913 19.2883 18.935 19.9328 17.7983 19.9328H10.4038ZM12.5717 9.53833H15.4311C15.396 8.71802 14.8569 8.19067 14.0014 8.19067C13.146 8.19067 12.6069 8.71802 12.5717 9.53833Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34766">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04834 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BagCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
