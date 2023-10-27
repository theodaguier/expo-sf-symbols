
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
<g clip-path="url(#clip0_2207_35392)">
<path d="M13.6016 27.8554C18.957 27.8554 22.1211 25.8165 22.1211 22.371V5.58984C22.1211 4.23047 21.6289 3.12891 20.8086 2.35547C20.3867 1.91016 19.8593 1.89844 19.625 2.32031C19.0156 3.66797 16.4726 4.47656 13.6016 4.47656C10.7305 4.47656 8.17578 3.66797 7.56641 2.32031C7.33203 1.89844 6.80469 1.91016 6.39453 2.35547C5.57422 3.12891 5.08203 4.23047 5.08203 5.58984V22.371C5.08203 25.8165 8.24609 27.8554 13.6016 27.8554ZM13.6016 25.9688C9.27734 25.9688 6.95703 24.5859 6.95703 22.3125V5.73047C6.95703 5.29687 7.07422 4.94531 7.30859 4.64063C8.64453 5.76563 10.9648 6.375 13.6016 6.375C16.2382 6.375 18.5586 5.76563 19.8945 4.64063C20.1289 4.94531 20.2461 5.29687 20.2461 5.73047V22.3125C20.2461 24.5859 17.9258 25.9688 13.6016 25.9688ZM13.6016 3.11719C16.2734 3.11719 18.4414 2.44922 18.4414 1.60547C18.4414 0.785156 16.2734 0.105469 13.6016 0.105469C10.9297 0.105469 8.76172 0.785156 8.76172 1.60547C8.76172 2.44922 10.9297 3.11719 13.6016 3.11719Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35392">
<rect width="17.0391" height="27.7617" fill="currentColor" transform="translate(5.08203 0.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const MacproGen2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
