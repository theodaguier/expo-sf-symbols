
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
<g clip-path="url(#clip0_2207_35384)">
<path d="M2.7666 22.3838H25.3018C26.9893 22.3838 28.0088 21.3643 28.0088 19.6768V5.62597C28.0088 3.93847 26.9893 2.93066 25.3018 2.93066H2.7666C1.09082 2.93066 0.0712891 3.93847 0.0712891 5.62597V19.6768C0.0712891 21.3643 1.09082 22.3838 2.7666 22.3838ZM2.46191 17.2159C2.11035 17.2159 1.95801 17.087 1.95801 16.712V5.66113C1.95801 5.13379 2.28613 4.81738 2.80176 4.81738H25.2783C25.794 4.81738 26.1221 5.13379 26.1221 5.66113V16.712C26.1221 17.087 25.958 17.2159 25.6065 17.2159H2.46191ZM10.3369 25.1729H17.7432V22.2315H10.3369V25.1729ZM10.2666 26.544H17.8135C18.3291 26.544 18.751 26.1221 18.751 25.5948C18.751 25.0674 18.3291 24.6456 17.8135 24.6456H10.2666C9.75098 24.6456 9.31738 25.0674 9.31738 25.5948C9.31738 26.1221 9.75098 26.544 10.2666 26.544Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1338 14.8837C11.1338 15.3642 11.6377 15.5517 12.0361 15.3173L18.3174 11.6259C18.7041 11.3916 18.6924 10.8759 18.3057 10.6533L12.0361 6.96188C11.6377 6.72751 11.1338 6.90329 11.1338 7.39548V14.8837Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35384">
<rect width="27.9375" height="24.4336" fill="currentColor" transform="translate(0.0712891 2.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayDesktopcomputer = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
