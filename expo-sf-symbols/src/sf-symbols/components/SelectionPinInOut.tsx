
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="32" viewBox="0 0 29 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35362)">
<path d="M8.54529 24.2783H20.6742C21.0961 24.2783 21.4828 23.7979 21.4828 23.3994C21.4828 22.9893 21.0961 22.5088 20.6742 22.5088H8.51013C7.53748 22.5088 7.04529 21.9698 7.04529 21.0322V3.06739H5.15857V20.9502C5.15857 23.1651 6.29529 24.2783 8.54529 24.2783ZM20.182 29.1533H22.0688V10.919C22.0688 8.77442 20.9672 7.70801 18.8109 7.70801H6.54138C6.13123 7.70801 5.74451 8.18848 5.74451 8.58692C5.74451 8.98536 6.13123 9.47754 6.54138 9.47754H18.7172C19.6898 9.47754 20.182 10.0166 20.182 10.9541V29.1533ZM21.1195 31.2393C22.2563 31.2393 23.1703 30.3252 23.1703 29.1885C23.1703 28.0635 22.2563 27.1377 21.1195 27.1377C19.9945 27.1377 19.0688 28.0635 19.0688 29.1885C19.0688 30.3252 19.9945 31.2393 21.1195 31.2393ZM6.08435 4.84864C7.22107 4.84864 8.13513 3.93457 8.13513 2.79786C8.13513 1.67286 7.22107 0.74707 6.08435 0.74707C4.95935 0.74707 4.03357 1.67286 4.03357 2.79786C4.03357 3.93457 4.95935 4.84864 6.08435 4.84864Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35362">
<rect width="19.1367" height="31.1133" fill="currentColor" transform="translate(4.03357 0.125977)"/>
</clipPath>
</defs>
</svg>

`;

export const SelectionPinInOut = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
