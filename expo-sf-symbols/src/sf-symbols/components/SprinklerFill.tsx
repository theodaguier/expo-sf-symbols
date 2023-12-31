
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
<g clip-path="url(#clip0_2207_35143)">
<path d="M11.6316 9.10059H17.0339C17.9011 9.10059 18.4988 8.49122 18.4988 7.62403V6.62793C18.4988 5.16309 17.4441 4.14355 15.8972 4.14355H12.7683C11.2214 4.14355 10.1667 5.16309 10.1667 6.62793V7.62403C10.1667 8.49122 10.7644 9.10059 11.6316 9.10059ZM12.5339 11.8076H16.1433V8.40918H12.5339V11.8076ZM11.6433 15.9209H17.0339C17.9011 15.9209 18.4988 15.3232 18.4988 14.4443V12.3232C18.4988 11.4561 17.9011 10.8584 17.0339 10.8584H11.6433C10.7761 10.8584 10.1667 11.4561 10.1667 12.3232V14.4443C10.1667 15.3232 10.7761 15.9209 11.6433 15.9209ZM12.5339 22.1435H16.1433V15.2177H12.5339V22.1435ZM2.0105 22.3193C2.0105 22.8466 2.43237 23.2685 2.948 23.2685H25.7175C26.2332 23.2685 26.6667 22.8466 26.6667 22.3193C26.6667 21.8037 26.2332 21.3818 25.7175 21.3818H2.948C2.43237 21.3818 2.0105 21.8037 2.0105 22.3193Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35143">
<rect width="24.6562" height="19.1367" fill="currentColor" transform="translate(2.0105 4.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const SprinklerFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
