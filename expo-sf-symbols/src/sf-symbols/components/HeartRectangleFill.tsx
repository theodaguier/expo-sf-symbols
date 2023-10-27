
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
<g clip-path="url(#clip0_2207_34373)">
<path d="M3.72168 24.6523H23.9951C26.4561 24.6523 27.6748 23.4453 27.6748 21.0312V6.71094C27.6748 4.29688 26.4561 3.07812 23.9951 3.07812H3.72168C1.27246 3.07812 0.0419922 4.29688 0.0419922 6.71094V21.0312C0.0419922 23.4453 1.27246 24.6523 3.72168 24.6523Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.9522 8.52734C12.2529 8.52734 13.2608 9.26562 13.8584 10.3672C14.4678 9.26562 15.4873 8.52734 16.7647 8.52734C18.8154 8.52734 20.292 10.0742 20.292 12.2187C20.292 15.3828 16.917 18.2773 14.4678 19.8828C14.2803 20.0234 14.0459 20.1758 13.8818 20.1758C13.7412 20.1758 13.4717 20.0117 13.2608 19.8828C10.7881 18.3125 7.43652 15.3828 7.43652 12.2187C7.43652 10.0742 8.91308 8.52734 10.9522 8.52734Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34373">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0419922 3.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
