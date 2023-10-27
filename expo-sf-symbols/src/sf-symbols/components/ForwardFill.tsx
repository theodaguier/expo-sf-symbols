
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33861)">
<path d="M1.77979 23.5049C2.26026 23.5049 2.6587 23.3525 3.12745 23.0713L15.0689 16.0401C15.9009 15.5479 16.2642 14.9736 16.2642 14.2939C16.2642 13.626 15.9009 13.0518 15.0689 12.5596L3.12745 5.52832C2.64698 5.24707 2.26026 5.09473 1.77979 5.09473C0.865723 5.09473 0.0922852 5.79785 0.0922852 7.09863V21.501C0.0922852 22.8018 0.865723 23.5049 1.77979 23.5049ZM17.8814 23.5049C18.3618 23.5049 18.7603 23.3525 19.229 23.0713L31.1821 16.0401C32.0025 15.5479 32.3657 14.9736 32.3657 14.2939C32.3657 13.626 32.0025 13.0518 31.1821 12.5596L19.229 5.52832C18.7603 5.24707 18.3618 5.09473 17.8814 5.09473C16.9673 5.09473 16.1939 5.79785 16.1939 7.09863V21.501C16.1939 22.8018 16.9673 23.5049 17.8814 23.5049Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33861">
<rect width="32.2734" height="18.4336" fill="currentColor" transform="translate(0.0922852 5.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const ForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
