
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
<g clip-path="url(#clip0_2207_33126)">
<path d="M14.0224 25.9405C20.5615 25.9405 25.9755 20.5264 25.9755 13.9873C25.9755 7.45996 20.5498 2.03418 14.0107 2.03418C7.4834 2.03418 2.06934 7.45996 2.06934 13.9873C2.06934 20.5264 7.49512 25.9405 14.0224 25.9405Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.9091 19.2022C12.5927 19.2022 12.3466 19.0616 12.042 18.7803L6.89746 13.9522C6.65137 13.7178 6.56934 13.4834 6.56934 13.2491C6.56934 13.0264 6.65137 12.792 6.89746 12.5577L12.042 7.76465C12.3818 7.43652 12.581 7.30762 12.8974 7.30762C13.3545 7.30762 13.6826 7.65918 13.6826 8.09277V10.5537H13.8701C18.5224 10.5537 20.5732 13.5303 20.5732 18.3467C20.5732 18.9092 20.2334 19.2022 19.8935 19.2022C19.6123 19.2022 19.3193 19.1319 19.0966 18.7217C17.9716 16.6006 16.3779 15.9561 13.8701 15.9561H13.6826V18.4522C13.6826 18.8741 13.3545 19.2022 12.9091 19.2022Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33126">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpBackwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
