
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
<g clip-path="url(#clip0_2207_37268)">
<path d="M14.0078 25.9497C20.5469 25.9497 25.9609 20.524 25.9609 13.9966C25.9609 7.45752 20.5352 2.04346 13.9961 2.04346C7.46875 2.04346 2.05469 7.45752 2.05469 13.9966C2.05469 20.524 7.48047 25.9497 14.0078 25.9497ZM14.0078 23.9576C8.47657 23.9576 4.0586 19.5279 4.0586 13.9966C4.0586 8.46534 8.46485 4.03565 13.9961 4.03565C19.5274 4.03565 23.9688 8.46534 23.9688 13.9966C23.9688 19.5279 19.5391 23.9576 14.0078 23.9576Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.7188 19.563C13.1055 19.563 13.4336 19.3755 13.668 19.0123L19.0235 10.5864C19.1524 10.352 19.3047 10.0942 19.3047 9.83643C19.3047 9.30908 18.8359 8.96924 18.3438 8.96924C18.0508 8.96924 17.7578 9.15674 17.5352 9.49658L12.6719 17.3013L10.3633 14.313C10.082 13.938 9.82422 13.8443 9.4961 13.8443C8.99219 13.8443 8.59375 14.2544 8.59375 14.7701C8.59375 15.0279 8.69922 15.274 8.86328 15.4966L11.7227 19.0123C12.0156 19.399 12.332 19.563 12.7188 19.563Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37268">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05469 2.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
