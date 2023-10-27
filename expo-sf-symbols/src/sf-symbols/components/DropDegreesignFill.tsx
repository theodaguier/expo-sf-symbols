
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33813)">
<path d="M12.1443 26.6955C17.0193 26.6955 20.2654 23.5197 20.2654 18.7619C20.2654 16.4182 19.3513 14.0861 18.6599 12.5276C17.406 9.70337 15.4373 6.5979 13.7263 3.94946C13.3162 3.32837 12.8357 2.96509 12.1443 2.96509C11.4529 2.96509 10.9724 3.32837 10.5623 3.94946C8.85131 6.5979 6.88257 9.70337 5.62866 12.5276C4.94897 14.0861 4.02319 16.4182 4.02319 18.7619C4.02319 23.5197 7.26928 26.6955 12.1443 26.6955ZM20.488 7.219C22.492 7.219 24.0623 5.64868 24.0623 3.64478C24.0623 1.62915 22.492 0.0588379 20.488 0.0588379C18.4724 0.0588379 16.9021 1.62915 16.9021 3.64478C16.9021 5.64868 18.4724 7.219 20.488 7.219ZM20.488 5.56665C19.4099 5.56665 18.5544 4.7229 18.5544 3.64478C18.5544 2.55493 19.4099 1.71118 20.488 1.71118C21.5662 1.71118 22.4099 2.55493 22.4099 3.64478C22.4099 4.7229 21.5662 5.56665 20.488 5.56665Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33813">
<rect width="20.0391" height="29.5664" fill="currentColor" transform="translate(4.02319 0.0588379)"/>
</clipPath>
</defs>
</svg>

`;

export const DropDegreesignFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
