
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
<g clip-path="url(#clip0_2207_37570)">
<path d="M14.0288 25.923C20.5679 25.923 25.9819 20.4973 25.9819 13.9699C25.9819 7.43091 20.5562 2.01685 14.0171 2.01685C7.48974 2.01685 2.07568 7.43091 2.07568 13.9699C2.07568 20.4973 7.50146 25.923 14.0288 25.923ZM14.0288 23.9309C8.49756 23.9309 4.07959 19.5012 4.07959 13.9699C4.07959 8.43873 8.48584 4.00904 14.0171 4.00904C19.5484 4.00904 23.9898 8.43873 23.9898 13.9699C23.9898 19.5012 19.5601 23.9309 14.0288 23.9309Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.93115 17.6613C8.93115 18.3293 9.27099 18.7277 9.86865 18.716C10.4663 18.7043 10.8062 18.3293 10.8062 17.6613V14.4035C10.8062 13.3371 11.3218 12.8449 12.3296 12.8449H15.3882V14.6848C15.3882 15.4465 16.2437 15.798 16.8882 15.2473L19.6773 12.8215C20.3804 12.2121 20.3804 11.591 19.6773 10.9817L16.8882 8.5676C16.2437 8.0051 15.3882 8.36838 15.3882 9.11838V10.9582H12.2945C10.021 10.9582 8.93115 12.048 8.93115 14.3098V17.6613Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37570">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07568 2.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowTriangleTurnUpRightCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
