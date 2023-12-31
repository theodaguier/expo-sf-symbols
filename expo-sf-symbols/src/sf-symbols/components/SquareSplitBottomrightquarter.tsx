
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
<g clip-path="url(#clip0_2207_35269)">
<path d="M12.4697 23.9585H14.3565V15.8609C14.3565 14.9937 14.8838 14.5015 15.8213 14.5015H23.6963V12.6147H15.7861C13.7119 12.6147 12.4697 13.7984 12.4697 15.7788V23.9585ZM6.69239 24.732H20.9072C23.3682 24.732 24.5869 23.5132 24.5869 21.0991V6.79053C24.5869 4.37647 23.3682 3.15771 20.9072 3.15771H6.69239C4.24317 3.15771 3.0127 4.36475 3.0127 6.79053V21.0991C3.0127 23.5249 4.24317 24.732 6.69239 24.732ZM6.71582 22.8452C5.54395 22.8452 4.89942 22.2241 4.89942 21.0054V6.88428C4.89942 5.66553 5.54395 5.04444 6.71582 5.04444H20.8838C22.0439 5.04444 22.7002 5.66553 22.7002 6.88428V21.0054C22.7002 22.2241 22.0439 22.8452 20.8838 22.8452H6.71582Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35269">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplitBottomrightquarter = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
