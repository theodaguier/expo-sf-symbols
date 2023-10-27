
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
<g clip-path="url(#clip0_2207_35676)">
<path d="M8.04614 24.3667C8.04614 25.9135 9.07739 26.8979 10.718 26.8979H16.9993C18.6399 26.8979 19.6711 25.9135 19.6711 24.3667V3.54248C19.6711 2.00732 18.6399 1.01123 16.9993 1.01123H10.718C9.07739 1.01123 8.04614 2.00732 8.04614 3.54248V24.3667ZM13.8704 17.1362C13.0266 17.1362 12.3586 16.4682 12.3586 15.6479C12.3586 14.8042 13.0266 14.1479 13.8704 14.1479C14.6907 14.1479 15.3586 14.8042 15.3586 15.6479C15.3586 16.4682 14.6907 17.1362 13.8704 17.1362ZM13.8704 12.519C11.679 12.519 9.88598 10.7261 9.88598 8.53467C9.88598 6.34326 11.679 4.55029 13.8704 4.55029C16.0618 4.55029 17.843 6.34326 17.843 8.53467C17.843 10.7261 16.0618 12.519 13.8704 12.519ZM13.8704 10.1401C14.761 10.1401 15.4758 9.42529 15.4758 8.53467C15.4758 7.64404 14.761 6.91748 13.8704 6.91748C12.9797 6.91748 12.2532 7.64404 12.2532 8.53467C12.2532 9.42529 12.9797 10.1401 13.8704 10.1401Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35676">
<rect width="11.625" height="25.957" fill="currentColor" transform="translate(8.04614 1.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const AppletvremoteGen1Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
