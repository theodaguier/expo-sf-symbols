
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
<g clip-path="url(#clip0_2207_33121)">
<path d="M14.0454 25.9287C20.5845 25.9287 25.9985 20.503 25.9985 13.9756C25.9985 7.43652 20.5728 2.02246 14.0337 2.02246C7.50634 2.02246 2.09229 7.43652 2.09229 13.9756C2.09229 20.503 7.51807 25.9287 14.0454 25.9287ZM14.0454 23.9366C8.51417 23.9366 4.0962 19.5069 4.0962 13.9756C4.0962 8.44434 8.50244 4.01465 14.0337 4.01465C19.565 4.01465 24.0064 8.44434 24.0064 13.9756C24.0064 19.5069 19.5767 23.9366 14.0454 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.9439 19.0147C13.3657 19.0147 13.6821 18.6983 13.6821 18.2764V15.8623H13.8696C16.3071 15.8623 17.854 16.4834 18.9439 18.5459C19.1665 18.9444 19.4478 19.0147 19.7173 19.0147C20.0454 19.0147 20.3735 18.7217 20.3735 18.1709C20.3735 13.5069 18.3814 10.624 13.8696 10.624H13.6821V8.2334C13.6821 7.81152 13.3657 7.45996 12.9321 7.45996C12.6275 7.45996 12.4282 7.60058 12.1001 7.90527L7.1079 12.5577C6.87353 12.7803 6.7915 13.0264 6.7915 13.2373C6.7915 13.4483 6.87353 13.6944 7.1079 13.917L12.1001 18.6045C12.3931 18.8741 12.6392 19.0147 12.9439 19.0147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33121">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09229 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpLeftCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
