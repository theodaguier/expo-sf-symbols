
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
<g clip-path="url(#clip0_2207_36993)">
<path d="M2.26412 23.0425C1.65475 25.48 2.686 26.8862 5.04146 26.8862H22.3149C24.6704 26.8862 25.7016 25.48 25.0923 23.0425L22.5024 12.5776C22.0688 10.855 20.8266 9.85889 19.0805 9.85889H8.27584C6.52974 9.85889 5.27584 10.855 4.85396 12.5776L2.26412 23.0425ZM4.09224 23.1597L6.61177 13.2339C6.86959 12.2261 7.44381 11.7456 8.41646 11.7456H18.9399C19.9126 11.7456 20.4868 12.2261 20.7446 13.2339L23.2641 23.1597C23.5805 24.3667 23.1118 24.9995 22.0688 24.9995H5.27584C4.24459 24.9995 3.77584 24.3667 4.09224 23.1597ZM12.729 11.23H14.6157V7.89013H12.729V11.23ZM13.6782 8.8042C15.4946 8.8042 17.0298 7.29248 17.0298 5.47607C17.0298 3.64795 15.4946 2.12451 13.6782 2.12451C11.8501 2.12451 10.3266 3.64795 10.3266 5.47607C10.3266 7.3042 11.8618 8.8042 13.6782 8.8042ZM13.6782 7.17529C12.7524 7.17529 11.9672 6.40185 11.9672 5.47607C11.9672 4.55029 12.7407 3.75342 13.6782 3.75342C14.604 3.75342 15.3891 4.55029 15.3891 5.47607C15.3891 6.40185 14.6157 7.17529 13.6782 7.17529Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36993">
<rect width="23.1718" height="24.7852" fill="currentColor" transform="translate(2.09229 2.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const Scalemass = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
