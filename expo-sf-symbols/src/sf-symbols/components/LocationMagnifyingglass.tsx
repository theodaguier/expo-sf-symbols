
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
<g clip-path="url(#clip0_2207_33966)">
<path d="M3.09229 11.4424C3.09229 16.5986 7.28759 20.7939 12.4438 20.7939C14.4829 20.7939 16.3462 20.1377 17.8814 19.0361L23.647 24.8135C23.9165 25.083 24.2681 25.2119 24.6431 25.2119C25.44 25.2119 25.9907 24.6142 25.9907 23.8291C25.9907 23.4541 25.8501 23.1142 25.604 22.8681L19.8735 17.1025C21.0806 15.5322 21.7954 13.5752 21.7954 11.4424C21.7954 6.28613 17.6001 2.09082 12.4438 2.09082C7.28759 2.09082 3.09229 6.28613 3.09229 11.4424ZM5.0962 11.4424C5.0962 7.3877 8.38916 4.09473 12.4438 4.09473C16.4985 4.09473 19.7915 7.3877 19.7915 11.4424C19.7915 15.497 16.4985 18.79 12.4438 18.79C8.38916 18.79 5.0962 15.497 5.0962 11.4424ZM8.07276 12.1103H11.4595C11.6118 12.1103 11.7056 12.2158 11.7056 12.3681L11.7173 15.708C11.7173 16.4346 12.479 16.5049 12.7134 15.9892L16.2993 8.34863C16.5923 7.71582 16.065 7.18848 15.4321 7.48144L7.80323 11.1025C7.27588 11.3486 7.36963 12.1103 8.07276 12.1103Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33966">
<rect width="22.8984" height="23.1211" fill="currentColor" transform="translate(3.09229 2.09082)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationMagnifyingglass = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
