
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
<g clip-path="url(#clip0_2207_34452)">
<path d="M13.9614 25.9985C20.5005 25.9985 25.9145 20.5728 25.9145 14.0454C25.9145 7.50635 20.4888 2.09229 13.9497 2.09229C7.42236 2.09229 2.0083 7.50635 2.0083 14.0454C2.0083 20.5728 7.43408 25.9985 13.9614 25.9985ZM13.9614 24.0064C8.43018 24.0064 4.01221 19.5767 4.01221 14.0454C4.01221 8.51417 8.41846 4.08448 13.9497 4.08448C19.481 4.08448 23.9224 8.51417 23.9224 14.0454C23.9224 19.5767 19.4927 24.0064 13.9614 24.0064Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.52782 15.0297L12.438 15.0414C12.6606 15.0414 12.813 15.182 12.813 15.4164V20.268C12.813 21.311 13.9145 21.4164 14.2661 20.6664L19.4692 9.56879C19.9028 8.66645 19.1177 7.89301 18.2036 8.32661L7.1411 13.5766C6.37938 13.9399 6.49657 15.0297 7.52782 15.0297Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.6606 20.6665C19.1997 21.1939 20.0669 21.2056 20.5825 20.6665C21.1333 20.1275 21.1216 19.2954 20.5825 18.7564L9.23877 7.4126C8.69971 6.87354 7.84424 6.87354 7.31689 7.4126C6.77783 7.93995 6.77783 8.80713 7.31689 9.33448L18.6606 20.6665Z" fill="currentColor"/>
<path d="M19.2466 20.0923C19.4458 20.2915 19.7974 20.2915 19.9966 20.0923C20.2075 19.8696 20.2075 19.5532 19.9966 19.3423L8.66455 7.99854C8.45361 7.7876 8.11377 7.7876 7.90283 7.99854C7.69189 8.19776 7.70361 8.54932 7.90283 8.74854L19.2466 20.0923Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34452">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0083 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationSlashCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
