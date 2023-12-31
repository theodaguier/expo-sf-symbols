
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
<g clip-path="url(#clip0_2207_35109)">
<path d="M3.52539 13.1279V6.36621C3.52539 6.17871 3.64258 6.03809 3.81836 6.03809H14.4121V13.1279H3.52539ZM15.9472 13.1279V6.03809H26.5527C26.7285 6.03809 26.8457 6.17871 26.8457 6.36621V13.1279H15.9472ZM3.52539 21.6944V14.6631H14.4121V21.6944H3.52539ZM15.9472 21.6944V14.6631H26.8457V21.6944H15.9472Z" fill="currentColor"/>
<path d="M0.0566406 22.667C0.0566406 23.2061 0.501953 23.6397 1.0293 23.6397H29.3652C29.9043 23.6397 30.3378 23.2061 30.3378 22.667C30.3378 22.128 29.9043 21.6944 29.3652 21.6944H28.7324V5.89746C28.7324 4.85449 28.0175 4.15137 26.9277 4.15137H3.43164C2.35352 4.15137 1.62695 4.85449 1.62695 5.89746V21.6944H1.0293C0.501953 21.6944 0.0566406 22.128 0.0566406 22.667ZM3.52539 13.1279V6.36621C3.52539 6.17871 3.64258 6.03809 3.81836 6.03809H14.4121V13.1279H3.52539ZM15.9472 13.1279V6.03809H26.5527C26.7285 6.03809 26.8457 6.17871 26.8457 6.36621V13.1279H15.9472ZM3.52539 21.6944V14.6631H14.4121V21.6944H3.52539ZM15.9472 21.6944V14.6631H26.8457V21.6944H15.9472Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35109">
<rect width="30.2812" height="19.5117" fill="currentColor" transform="translate(0.0566406 4.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowHorizontalClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
