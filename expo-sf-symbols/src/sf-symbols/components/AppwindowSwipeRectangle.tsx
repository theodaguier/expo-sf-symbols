
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
<g clip-path="url(#clip0_2207_34208)">
<path d="M3.76587 24.5854H24.0393C26.5003 24.5854 27.719 23.3784 27.719 20.9643V6.64404C27.719 4.22998 26.5003 3.01123 24.0393 3.01123H3.76587C1.31665 3.01123 0.0861816 4.22998 0.0861816 6.64404V20.9643C0.0861816 23.3784 1.31665 24.5854 3.76587 24.5854ZM3.7893 22.6987C2.61743 22.6987 1.9729 22.0776 1.9729 20.8589V6.74951C1.9729 5.53076 2.61743 4.89795 3.7893 4.89795H24.0159C25.176 4.89795 25.8323 5.53076 25.8323 6.74951V20.8589C25.8323 22.0776 25.176 22.6987 24.0159 22.6987H3.7893Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.43384 21.105H16.6682C17.3245 21.105 17.6995 20.7182 17.6995 20.0503V7.55811C17.6995 6.89014 17.3245 6.50342 16.6682 6.50342H1.42212C1.19946 6.50342 1.02368 6.6792 1.02368 6.89014V20.7065C1.02368 20.9292 1.21118 21.105 1.43384 21.105ZM20.3245 21.105H26.4534C26.6643 21.105 26.8401 20.9292 26.8401 20.7065V6.89014C26.8401 6.6792 26.6643 6.50342 26.4534 6.50342H20.3245C19.68 6.50342 19.305 6.89014 19.305 7.55811V20.0503C19.305 20.7182 19.68 21.105 20.3245 21.105Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34208">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0861816 3.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const AppwindowSwipeRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
