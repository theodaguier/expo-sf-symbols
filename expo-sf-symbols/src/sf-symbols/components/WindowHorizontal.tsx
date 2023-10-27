
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35108)">
<path d="M3.52344 12.9287V6.36621C3.52344 6.17871 3.64063 6.03809 3.81641 6.03809H14.4102V12.9287H3.52344ZM15.9453 12.9287V6.03809H26.5508C26.7266 6.03809 26.8438 6.17871 26.8438 6.36621V12.9287H15.9453Z" fill="currentColor"/>
<path d="M0.0546875 22.667C0.0546875 23.2061 0.5 23.6397 1.02734 23.6397H29.3633C29.9024 23.6397 30.3359 23.2061 30.3359 22.667C30.3359 22.128 29.9024 21.6944 29.3633 21.6944H28.7305V5.89746C28.7305 4.85449 28.0156 4.15137 26.9258 4.15137H3.42969C2.35157 4.15137 1.625 4.85449 1.625 5.89746V21.6944H1.02734C0.5 21.6944 0.0546875 22.128 0.0546875 22.667ZM3.52344 12.9287V6.36621C3.52344 6.17871 3.64063 6.03809 3.81641 6.03809H14.4102V12.9287H3.52344ZM15.9453 12.9287V6.03809H26.5508C26.7266 6.03809 26.8438 6.17871 26.8438 6.36621V12.9287H15.9453ZM3.52344 21.6944V14.8741H26.8438V21.6944H3.52344Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35108">
<rect width="30.2812" height="19.5117" fill="currentColor" transform="translate(0.0546875 4.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
