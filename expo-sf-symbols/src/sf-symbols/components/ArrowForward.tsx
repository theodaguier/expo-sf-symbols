
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
<g clip-path="url(#clip0_2207_37339)">
<path d="M24.8078 13.8982C24.8078 13.6052 24.6906 13.3357 24.4563 13.113L16.6867 5.36694C16.4289 5.10913 16.1828 5.01538 15.9016 5.01538C15.3273 5.01538 14.882 5.43726 14.882 6.02319C14.882 6.30444 14.9758 6.57397 15.1633 6.76147L17.7883 9.43335L22.4406 13.6755L22.675 13.0896L18.9016 12.8552H4.07739C3.46802 12.8552 3.04614 13.2888 3.04614 13.8982C3.04614 14.5076 3.46802 14.9412 4.07739 14.9412H18.9016L22.675 14.7068L22.4406 14.1326L17.7883 18.3631L15.1633 21.0349C14.9758 21.2107 14.882 21.492 14.882 21.7732C14.882 22.3592 15.3273 22.781 15.9016 22.781C16.1828 22.781 16.4289 22.6756 16.6633 22.4529L24.4563 14.6834C24.6906 14.4607 24.8078 14.1912 24.8078 13.8982Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37339">
<rect width="21.7617" height="17.7773" fill="currentColor" transform="translate(3.04614 5.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowForward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
