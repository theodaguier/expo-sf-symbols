
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="35" height="29" viewBox="0 0 35 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35098)">
<path d="M0.983643 26.9246C1.51098 26.9246 1.93286 26.5027 1.93286 25.9871V4.56518C1.93286 4.19018 2.17895 3.94409 2.53052 3.94409H31.8039C32.1555 3.94409 32.4016 4.19018 32.4016 4.56518V25.9871C32.4016 26.5027 32.8234 26.9246 33.3508 26.9246C33.8664 26.9246 34.2883 26.5027 34.2883 25.9871V4.44799C34.2883 3.01831 33.3156 2.05737 31.8391 2.05737H2.49536C1.03052 2.05737 0.0461426 3.01831 0.0461426 4.44799V25.9871C0.0461426 26.5027 0.468018 26.9246 0.983643 26.9246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.70239 10.2839H30.6438C30.8547 10.2839 31.0305 10.1082 31.0305 9.89722V5.70191C31.0305 5.47926 30.8547 5.30347 30.6438 5.30347H3.70239C3.47973 5.30347 3.30396 5.47926 3.30396 5.70191V9.89722C3.30396 10.1082 3.47973 10.2839 3.70239 10.2839ZM14.6477 8.36207C14.3078 8.36207 14.0734 8.12769 14.0734 7.79957C14.0734 7.45972 14.3078 7.22535 14.6477 7.22535H19.6984C20.0266 7.22535 20.2609 7.45972 20.2609 7.79957C20.2609 8.12769 20.0266 8.36207 19.6984 8.36207H14.6477Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35098">
<rect width="34.2422" height="24.8789" fill="currentColor" transform="translate(0.0461426 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorGarageDoubleBayOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
