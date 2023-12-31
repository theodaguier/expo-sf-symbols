
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
<g clip-path="url(#clip0_2207_36644)">
<path d="M10.9756 14.7524L17.6787 15.4556C21.1944 15.8188 22.9756 17.1665 22.9756 19.1587C22.9756 21.1157 21.3233 22.3579 18.6865 22.3579H11.1162V24.2446H18.6865C22.4717 24.2446 24.8623 22.2759 24.8623 19.1587C24.8623 15.9712 22.5069 13.8852 17.96 13.4282L11.2803 12.7251C7.75293 12.3618 5.9834 11.0142 5.9834 9.02198C5.9834 7.06494 7.63574 5.82276 10.2725 5.82276H17.8311V3.93604H10.2725C6.4873 3.93604 4.09668 5.90479 4.09668 9.02198C4.09668 12.2095 6.44043 14.2954 10.9756 14.7524Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.88184 27.0688C9.96777 27.0688 11.6553 25.3696 11.6553 23.2837C11.6553 21.2095 9.96777 19.5102 7.88184 19.5102C5.7959 19.5102 4.1084 21.2095 4.1084 23.2837C4.1084 25.3696 5.7959 27.0688 7.88184 27.0688ZM7.88184 25.229C6.80371 25.229 5.94824 24.3735 5.94824 23.2837C5.94824 22.1938 6.80371 21.3501 7.88184 21.3501C8.97168 21.3501 9.81543 22.1938 9.81543 23.2837C9.81543 24.3735 8.9834 25.229 7.88184 25.229ZM21.0772 8.67041C23.1748 8.67041 24.8623 6.9712 24.8623 4.88526C24.8623 2.81104 23.1748 1.11182 21.0772 1.11182C19.0029 1.11182 17.3037 2.81104 17.3037 4.88526C17.3037 6.9712 19.0029 8.67041 21.0772 8.67041Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36644">
<rect width="20.7656" height="25.957" fill="currentColor" transform="translate(4.09668 1.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PointBottomleftForwardToPointToprightFilledScurvepath = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
