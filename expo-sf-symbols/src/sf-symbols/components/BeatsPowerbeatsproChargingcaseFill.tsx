
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
<g clip-path="url(#clip0_2207_35627)">
<path d="M9.26342 25.3015H18.2634C23.0095 25.3015 25.4821 22.8406 25.4821 18.1179V9.21167C25.4821 4.48902 23.0095 2.02808 18.2634 2.02808H9.26342C4.54077 2.02808 2.07983 4.48902 2.07983 9.21167V18.1179C2.07983 22.8406 4.54077 25.3015 9.26342 25.3015ZM13.7751 19.3836C10.6228 19.3836 8.06811 16.8406 8.06811 13.6648C8.06811 11.5437 9.21655 9.6687 11.033 8.64917V13.6648C11.033 15.1883 12.24 16.3836 13.7751 16.3836C15.2868 16.3836 16.529 15.1648 16.529 13.6648C16.529 12.1648 15.2634 10.8875 13.7751 10.8875C13.2478 10.8875 12.7087 11.0632 12.2634 11.3914V8.15699C12.7087 8.01636 13.2243 7.96949 13.7751 7.96949C16.8806 7.96949 19.4939 10.5125 19.4939 13.6648C19.4939 16.782 16.9392 19.3836 13.7751 19.3836ZM13.7751 15.1765C12.9665 15.1765 12.2868 14.4969 12.2868 13.6648C12.2868 12.8562 12.99 12.1765 13.7751 12.1765C14.5603 12.1765 15.2751 12.8914 15.2751 13.6648C15.2751 14.4617 14.5837 15.1765 13.7751 15.1765Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35627">
<rect width="23.4023" height="23.2852" fill="currentColor" transform="translate(2.07983 2.02808)"/>
</clipPath>
</defs>
</svg>

`;

export const BeatsPowerbeatsproChargingcaseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
