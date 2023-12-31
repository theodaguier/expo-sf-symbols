
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
<g clip-path="url(#clip0_2207_37694)">
<path d="M6.69434 24.7154H20.9091C23.3701 24.7154 24.5888 23.4966 24.5888 21.0825V6.77393C24.5888 4.35987 23.3701 3.14111 20.9091 3.14111H6.69434C4.24512 3.14111 3.01465 4.34815 3.01465 6.77393V21.0825C3.01465 23.5083 4.24512 24.7154 6.69434 24.7154Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7021 19.4536C10.0928 19.4536 9.75293 19.0083 9.75293 18.3638V9.3872C9.75293 8.73095 10.0811 8.28564 10.6904 8.28564H14.1827C16.6319 8.28564 18.1787 9.66845 18.1787 11.8481C18.1787 13.3482 17.2646 14.6138 15.8466 15.0825L17.6631 17.9185C17.8038 18.1646 17.8741 18.3521 17.8741 18.6216C17.8741 19.1138 17.5108 19.4536 16.9952 19.4536C16.5616 19.4536 16.3155 19.2779 16.0224 18.8091L13.9365 15.3638H11.6865V18.3638C11.6865 19.0318 11.3467 19.4536 10.7021 19.4536ZM11.6865 13.9458H13.8896C15.3427 13.9458 16.2685 13.2075 16.2685 11.895C16.2685 10.5474 15.3193 9.77392 13.9365 9.77392H11.6865V13.9458Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37694">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01465 3.11768)"/>
</clipPath>
</defs>
</svg>

`;

export const RSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
