
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
<g clip-path="url(#clip0_2207_37389)">
<path d="M6.70069 24.6131H20.9155C23.3765 24.6131 24.5952 23.3943 24.5952 20.9802V6.67163C24.5952 4.25757 23.3765 3.03882 20.9155 3.03882H6.70069C4.25147 3.03882 3.021 4.24585 3.021 6.67163V20.9802C3.021 23.406 4.25147 24.6131 6.70069 24.6131ZM6.72412 22.7263C5.55225 22.7263 4.90772 22.1052 4.90772 20.8865V6.76538C4.90772 5.54663 5.55225 4.92554 6.72412 4.92554H20.8921C22.0522 4.92554 22.7085 5.54663 22.7085 6.76538V20.8865C22.7085 22.1052 22.0522 22.7263 20.8921 22.7263H6.72412Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.4819 10.9021C16.9663 10.9021 16.6265 11.2537 16.6265 11.8162V13.8435L16.8022 15.6716L15.1148 13.867L10.8022 9.55444C10.6382 9.39038 10.4155 9.28491 10.1343 9.28491C9.61866 9.28491 9.27881 9.62476 9.27881 10.1521C9.27881 10.3865 9.38428 10.6209 9.54834 10.7849L13.8726 15.0974L15.7007 16.8084L13.9663 16.6209H11.8335C11.271 16.6209 10.9077 16.9607 10.9077 17.4763C10.9077 17.992 11.2593 18.3318 11.8101 18.3318H17.3648C17.9624 18.3318 18.3491 18.0623 18.3491 17.3709V11.8396C18.3491 11.2888 17.9976 10.9021 17.4819 10.9021Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37389">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.021 3.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRightSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
