
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
<g clip-path="url(#clip0_2207_32904)">
<path d="M7.22512 22.5351L20.022 9.76172L17.9595 7.69922L5.17434 20.4726L4.04935 23.0859C3.94388 23.3671 4.23685 23.6953 4.5181 23.5781L7.22512 22.5351ZM21.0415 8.75391L22.2251 7.59375C22.8345 6.9961 22.8696 6.35157 22.3188 5.8125L21.9321 5.41407C21.3931 4.88672 20.7485 4.93359 20.1626 5.51953L18.9673 6.69141L21.0415 8.75391Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.9985 22.7109C20.9009 23.6015 22.354 23.6015 23.2329 22.6875C24.0884 21.8085 24.0884 20.3789 23.2212 19.5L8.47903 4.76946C7.44778 3.73821 5.64309 3.90228 4.89309 5.29681C4.41262 6.15228 4.54153 7.26556 5.25637 7.9804L19.9985 22.7109Z" fill="currentColor"/>
<path d="M20.9712 21.7501C21.3227 22.1016 21.9087 22.1016 22.2485 21.7501C22.5884 21.3868 22.6001 20.8243 22.2485 20.4727L7.51809 5.7422C7.16653 5.39064 6.56887 5.37892 6.22903 5.7422C5.88919 6.08204 5.88919 6.6797 6.22903 7.01954L20.9712 21.7501Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32904">
<rect width="19.8457" height="20.3719" fill="currentColor" transform="translate(4.02734 4.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PencilSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
