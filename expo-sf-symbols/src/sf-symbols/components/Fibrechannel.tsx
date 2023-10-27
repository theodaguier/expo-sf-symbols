
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37069)">
<path d="M0.0966797 4.01367C0.0966797 4.52929 0.518555 4.95117 1.03418 4.95117H28.5498C29.0655 4.95117 29.4873 4.52929 29.4873 4.01367C29.4873 3.49805 29.0655 3.06445 28.5498 3.06445H1.03418C0.518555 3.06445 0.0966797 3.49805 0.0966797 4.01367ZM3.62402 15.1934H20.3936V19.3067C20.3936 20.1387 21.4365 20.5606 22.0459 19.9278L26.7451 15.1465C27.4248 14.4551 27.2022 13.2364 25.9717 13.2364H9.20215V9.12304C9.20215 8.29101 8.15918 7.86914 7.5498 8.50195L2.8623 13.2833C2.1709 13.9747 2.39356 15.1934 3.62402 15.1934ZM0.0966797 24.4043C0.0966797 24.92 0.518555 25.3536 1.03418 25.3536H28.5498C29.0655 25.3536 29.4873 24.92 29.4873 24.4043C29.4873 23.8887 29.0655 23.4668 28.5498 23.4668H1.03418C0.518555 23.4668 0.0966797 23.8887 0.0966797 24.4043Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37069">
<rect width="29.3906" height="22.3008" fill="currentColor" transform="translate(0.0966797 3.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const Fibrechannel = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
