
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
<g clip-path="url(#clip0_2207_37643)">
<path d="M13.9782 25.9707C20.5173 25.9707 25.9313 20.545 25.9313 14.0176C25.9313 7.47851 20.5056 2.06445 13.9665 2.06445C7.43921 2.06445 2.02515 7.47851 2.02515 14.0176C2.02515 20.545 7.45093 25.9707 13.9782 25.9707ZM13.9782 23.9786C8.44703 23.9786 4.02906 19.5489 4.02906 14.0176C4.02906 8.48633 8.43531 4.05664 13.9665 4.05664C19.4978 4.05664 23.9392 8.48633 23.9392 14.0176C23.9392 19.5489 19.5095 23.9786 13.9782 23.9786Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3884 19.3847C11.9978 19.3847 12.3259 18.9746 12.3259 18.33V14.6972H16.5563C17.0134 14.6972 17.3415 14.4511 17.3415 13.9824C17.3415 13.5019 17.0134 13.2324 16.5563 13.2324H12.3259V10.1035H17.0134C17.4704 10.1035 17.7985 9.79883 17.7985 9.33007C17.7985 8.84961 17.4704 8.56836 17.0134 8.56836H11.3767C10.7791 8.56836 10.4626 8.99023 10.4626 9.62304V18.33C10.4626 18.9511 10.7791 19.3847 11.3884 19.3847Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37643">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02515 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
