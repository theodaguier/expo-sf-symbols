
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36180)">
<path d="M30.0884 21.6264C30.9205 21.6264 31.6236 20.9467 31.6236 20.1499C31.6236 19.3413 30.9322 18.6733 30.0884 18.6733C29.233 18.6733 28.5533 19.3413 28.5533 20.1499C28.5533 20.9467 29.2564 21.6264 30.0884 21.6264ZM30.0884 16.4233C30.6626 16.4233 31.0611 16.0249 31.0845 15.4272L31.3306 7.13036C31.3541 6.38036 30.8619 5.87646 30.0884 5.87646C29.315 5.87646 28.8111 6.38036 28.8345 7.13036L29.0806 15.4272C29.1041 16.0249 29.5142 16.4233 30.0884 16.4233Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.68604 24.4975H21.1586C23.643 24.4975 24.8383 23.3257 24.8383 20.8764V6.59131C24.8383 4.24756 23.6313 3.05225 21.2641 3.05225H15.5805C13.6704 3.05225 12.4751 3.4624 10.9282 4.62256L1.82276 11.5483C0.475098 12.5679 0.00634766 13.4702 0.00634766 15.146V20.8764C0.00634766 23.3257 1.21338 24.4975 3.68604 24.4975ZM3.75635 13.6928C3.13526 13.6928 3.00635 13.0249 3.48682 12.6733L12.2172 5.99365C13.2133 5.19678 14.0805 4.93897 15.5805 4.93897H21.229C22.3188 4.93897 22.9516 5.54834 22.9516 6.68506V11.9468C22.9516 13.0717 22.3071 13.6928 21.229 13.6928H3.75635Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36180">
<rect width="31.6172" height="21.457" fill="currentColor" transform="translate(0.00634766 3.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarWindowRightExclamationmark = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
