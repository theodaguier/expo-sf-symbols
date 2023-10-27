
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
<g clip-path="url(#clip0_2207_34594)">
<path d="M8.28052 26.7783C8.85474 26.7783 9.25318 26.4736 9.96802 25.8408L14.011 22.2431H21.5344C25.0266 22.2431 26.9016 20.3095 26.9016 16.876V7.89942C26.9016 4.46582 25.0266 2.53223 21.5344 2.53223H6.44068C2.94849 2.53223 1.07349 4.45411 1.07349 7.89942V16.876C1.07349 20.3213 2.94849 22.2431 6.44068 22.2431H7.00318V25.29C7.00318 26.1924 7.46021 26.7783 8.28052 26.7783ZM8.76099 24.6338V21.2353C8.76099 20.6025 8.5149 20.3564 7.88208 20.3564H6.44068C4.07349 20.3564 2.96021 19.1494 2.96021 16.8642V7.89942C2.96021 5.61426 4.07349 4.41895 6.44068 4.41895H21.5344C23.8899 4.41895 25.0149 5.61426 25.0149 7.89942V16.8642C25.0149 19.1494 23.8899 20.3564 21.5344 20.3564H13.9407C13.2844 20.3564 12.9563 20.4502 12.511 20.9072L8.76099 24.6338Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34594">
<rect width="25.8281" height="25.7461" fill="currentColor" transform="translate(1.07349 1.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const Bubble = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
