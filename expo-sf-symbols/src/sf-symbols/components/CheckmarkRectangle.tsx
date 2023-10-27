
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
<g clip-path="url(#clip0_2207_37277)">
<path d="M3.76367 24.6177H24.0371C26.4981 24.6177 27.7168 23.4107 27.7168 20.9966V6.67627C27.7168 4.26221 26.4981 3.04346 24.0371 3.04346H3.76367C1.31445 3.04346 0.0839844 4.26221 0.0839844 6.67627V20.9966C0.0839844 23.4107 1.31445 24.6177 3.76367 24.6177ZM3.7871 22.731C2.61523 22.731 1.9707 22.1099 1.9707 20.8912V6.78174C1.9707 5.56299 2.61523 4.93018 3.7871 4.93018H24.0137C25.1738 4.93018 25.8301 5.56299 25.8301 6.78174V20.8912C25.8301 22.1099 25.1738 22.731 24.0137 22.731H3.7871Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.6348 19.3912C13.0215 19.3912 13.3496 19.2037 13.5723 18.8404L18.9395 10.4145C19.0684 10.1802 19.2207 9.92236 19.2207 9.66454C19.2207 9.1372 18.752 8.79736 18.2598 8.79736C17.9551 8.79736 17.6621 8.98486 17.4512 9.3247L12.5879 17.1294L10.2676 14.1412C9.99805 13.7662 9.72852 13.6724 9.41211 13.6724C8.89649 13.6724 8.50977 14.0826 8.50977 14.5982C8.50977 14.856 8.60351 15.1021 8.77929 15.3247L11.627 18.8404C11.9317 19.2271 12.2363 19.3912 12.6348 19.3912Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37277">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0839844 3.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
