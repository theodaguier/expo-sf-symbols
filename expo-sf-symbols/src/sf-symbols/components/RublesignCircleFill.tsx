
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
<g clip-path="url(#clip0_2207_37764)">
<path d="M14.0014 26.0307C20.5405 26.0307 25.9545 20.605 25.9545 14.0776C25.9545 7.53857 20.5288 2.12451 13.9897 2.12451C7.4624 2.12451 2.04834 7.53857 2.04834 14.0776C2.04834 20.605 7.47412 26.0307 14.0014 26.0307Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.9624 20.1245C11.4936 20.1245 11.1538 19.7964 11.1538 19.3276V18.1089H10.0991C9.74756 18.1089 9.50146 17.8628 9.50146 17.5112C9.50146 17.1714 9.74756 16.9136 10.0991 16.9136H11.1538V15.7417H10.0874C9.72412 15.7417 9.48975 15.4722 9.48975 15.1323C9.48975 14.7925 9.72412 14.5347 10.0874 14.5347H11.1538V9.34326C11.1538 8.86279 11.4702 8.53467 11.9507 8.53467H14.81C17.0717 8.53467 18.4897 10.0581 18.4897 12.1323C18.4897 14.23 17.06 15.73 14.7983 15.73H12.7358V16.9136H15.56C15.9116 16.9136 16.146 17.1714 16.146 17.5112C16.146 17.8628 15.9116 18.1089 15.56 18.1089H12.7358V19.3276C12.7358 19.7964 12.4194 20.1245 11.9624 20.1245ZM12.7475 14.312L14.5288 14.3354C16.0874 14.3354 16.896 13.4917 16.896 12.144C16.896 10.8198 16.0991 9.98779 14.5288 9.98779H12.7475V14.312Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37764">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04834 2.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const RublesignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
