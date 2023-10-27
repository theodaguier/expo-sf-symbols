
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
<g clip-path="url(#clip0_2207_35503)">
<path d="M3.73669 22.7934C2.56482 22.7934 1.92029 22.1723 1.92029 20.9536V6.83252C1.92029 5.61377 2.56482 4.99268 3.73669 4.99268H23.9633C25.1234 4.99268 25.7797 5.61377 25.7797 6.83252V20.9536C25.7797 22.1723 25.1234 22.7934 23.9633 22.7934H3.73669Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.71326 24.6802H23.9867C26.4477 24.6802 27.6664 23.4614 27.6664 21.0473V6.73877C27.6664 4.32471 26.4477 3.10596 23.9867 3.10596H3.71326C1.26404 3.10596 0.0335693 4.31299 0.0335693 6.73877V21.0473C0.0335693 23.4731 1.26404 24.6802 3.71326 24.6802ZM3.73669 22.7934C2.56482 22.7934 1.92029 22.1723 1.92029 20.9536V6.83252C1.92029 5.61377 2.56482 4.99268 3.73669 4.99268H23.9633C25.1234 4.99268 25.7797 5.61377 25.7797 6.83252V20.9536C25.7797 22.1723 25.1234 22.7934 23.9633 22.7934H3.73669ZM9.32654 21.8911H18.3852C18.7016 21.8911 18.9242 21.6802 18.9242 21.352C18.9242 21.0239 18.7016 20.8013 18.3852 20.8013H9.32654C9.01013 20.8013 8.77576 21.0239 8.77576 21.352C8.77576 21.6802 9.01013 21.8911 9.32654 21.8911Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35503">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0335693 3.08252)"/>
</clipPath>
</defs>
</svg>

`;

export const IpadLandscape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
