
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
<g clip-path="url(#clip0_2207_37199)">
<path d="M2.35398 16.9923L11.7407 26.379C13.4751 28.1134 15.186 28.1251 16.9086 26.4141L26.3422 16.9688C28.0532 15.2579 28.0415 13.5352 26.3071 11.8009L16.9321 2.42588C15.1977 0.691499 13.4868 0.668061 11.7641 2.39072L2.31882 11.8243C0.596162 13.547 0.6196 15.2579 2.35398 16.9923Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.61182 14.414C8.61182 13.8047 9.04541 13.3828 9.65479 13.3828H13.3227V9.71484C13.3227 9.10547 13.7329 8.67188 14.3188 8.67188C14.9399 8.67188 15.3501 9.10547 15.3501 9.71484V13.3828H19.0297C19.6391 13.3828 20.061 13.8047 20.061 14.414C20.061 15.0117 19.6274 15.4101 19.0297 15.4101H15.3501V19.0898C15.3501 19.6992 14.9399 20.1211 14.3188 20.1211C13.7329 20.1211 13.3227 19.6875 13.3227 19.0898V15.4101H9.65479C9.04541 15.4101 8.61182 15.0117 8.61182 14.414Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37199">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.03992 1.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusDiamondFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
