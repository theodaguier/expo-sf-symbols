
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
<g clip-path="url(#clip0_2207_37671)">
<path d="M13.9887 26C20.5278 26 25.9418 20.5742 25.9418 14.0469C25.9418 7.50781 20.5161 2.09375 13.977 2.09375C7.4497 2.09375 2.03564 7.50781 2.03564 14.0469C2.03564 20.5742 7.46142 26 13.9887 26ZM13.9887 24.0079C8.45752 24.0079 4.03955 19.5781 4.03955 14.0469C4.03955 8.51563 8.4458 4.08594 13.977 4.08594C19.5083 4.08594 23.9497 8.51563 23.9497 14.0469C23.9497 19.5781 19.52 24.0079 13.9887 24.0079Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.41846 19.4844C9.95753 19.4844 10.2739 19.1329 10.2739 18.5235V11.7617H10.3794L13.0747 18.5118C13.2504 18.9336 13.52 19.1329 13.9653 19.1329C14.3989 19.1329 14.6918 18.9336 14.8559 18.5118L17.5747 11.7617H17.6684V18.5235C17.6684 19.1211 17.9848 19.4844 18.5004 19.4844C19.0512 19.4844 19.3676 19.1329 19.3676 18.5235V9.54687C19.3676 8.90234 18.9106 8.45703 18.2661 8.45703C17.7036 8.45703 17.3286 8.71484 17.1176 9.21875L14.0122 17.0118H13.9536L10.8247 9.21875C10.6255 8.71484 10.2505 8.45703 9.68799 8.45703C9.03174 8.45703 8.57471 8.90234 8.57471 9.54687V18.5235C8.57471 19.1211 8.90284 19.4844 9.41846 19.4844Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37671">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03564 2.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const MCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
