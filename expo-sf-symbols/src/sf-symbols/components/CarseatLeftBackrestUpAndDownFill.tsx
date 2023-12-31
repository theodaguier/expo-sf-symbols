
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36016)">
<path d="M0.240554 21.8686C1.27181 25.6889 2.33821 26.8491 4.75228 26.8491H18.4281C20.1625 26.8491 21.3226 25.9116 21.7562 24.1538L26.1625 6.271C26.8773 3.35303 25.4242 2.04053 23.7367 2.04053C21.4984 2.04053 19.0609 4.43115 20.432 8.29834L20.7718 6.85694C17.2445 8.7085 15.639 12.9975 16.2836 18.2358L16.7054 17.6499C14.2914 17.146 11.139 16.8413 8.10384 16.8413C1.83431 16.8413 -0.720384 18.3647 0.240554 21.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M27.4397 13.5014C27.2756 14.1108 27.6975 14.5093 28.3303 14.3217L32.9827 12.9272C33.592 12.7514 33.7444 12.1421 33.3108 11.7085L29.9475 8.16944C29.5022 7.70069 28.928 7.85303 28.7639 8.46241L27.4397 13.5014Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.6312 9.31787L15.9554 4.26709C16.1195 3.66944 15.6976 3.25928 15.0882 3.44678L10.4007 4.85303C9.81479 5.02881 9.65072 5.62647 10.0843 6.07178L13.4593 9.58741C13.9046 10.0562 14.4671 9.93897 14.6312 9.31787Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36016">
<rect width="33.5144" height="24.832" fill="currentColor" transform="translate(0.0440674 2.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatLeftBackrestUpAndDownFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
