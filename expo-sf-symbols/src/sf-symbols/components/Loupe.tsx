
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
<g clip-path="url(#clip0_2207_33967)">
<path d="M3.32115 17.8828C1.83286 22.1367 5.87583 25.0665 13.868 25.0665C21.8602 25.0665 25.9149 22.1367 24.4149 17.8828L21.7899 10.3477V6.38672C21.7899 4.54687 18.6258 3.12891 13.868 3.12891C9.12193 3.12891 5.96958 4.54687 5.96958 6.38672V10.3008L3.32115 17.8828ZM5.11411 18.4688L7.16489 12.668C8.40708 13.6992 10.7743 14.3438 13.868 14.3438C16.9149 14.3438 19.3172 13.6993 20.5828 12.6797L22.6219 18.4688C23.5945 21.246 20.2899 23.1679 13.868 23.1679C7.44615 23.1679 4.14146 21.246 5.11411 18.4688ZM7.8563 6.38672C7.8563 5.625 10.2704 4.89844 13.868 4.89844C17.4891 4.89844 19.9031 5.625 19.9031 6.38672C19.9031 7.13672 17.4891 7.875 13.868 7.875C10.2704 7.875 7.8563 7.13672 7.8563 6.38672Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33967">
<rect width="21.706" height="21.9727" fill="currentColor" transform="translate(3.01685 3.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const Loupe = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
