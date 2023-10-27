
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
<g clip-path="url(#clip0_2207_37627)">
<path d="M14.0454 25.9313C20.5845 25.9313 25.9985 20.5056 25.9985 13.9782C25.9985 7.43921 20.5728 2.02515 14.0337 2.02515C7.50634 2.02515 2.09229 7.43921 2.09229 13.9782C2.09229 20.5056 7.51807 25.9313 14.0454 25.9313ZM14.0454 23.9392C8.51417 23.9392 4.0962 19.5095 4.0962 13.9782C4.0962 8.44703 8.50244 4.01734 14.0337 4.01734C19.565 4.01734 24.0064 8.44703 24.0064 13.9782C24.0064 19.5095 19.5767 23.9392 14.0454 23.9392Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2329 19.2282H14.6548C17.0806 19.2282 18.6392 18.0563 18.6392 16.2165C18.6392 14.7868 17.6782 13.779 16.1196 13.5915V13.5212C17.2798 13.2399 17.9946 12.3259 17.9946 11.1541C17.9946 9.54859 16.6939 8.50562 14.6782 8.50562H11.2329C10.5767 8.50562 10.1899 8.89234 10.1899 9.56031V18.1853C10.1899 18.8298 10.5767 19.2282 11.2329 19.2282ZM12.0063 13.0642V9.88842H14.3032C15.4868 9.88842 16.2017 10.4861 16.2017 11.447C16.2017 12.4782 15.3462 13.0642 13.7759 13.0642H12.0063ZM12.0063 17.8454V14.3532H14.5025C15.9321 14.3532 16.7642 15.0095 16.7642 16.1345C16.7642 17.3063 15.8618 17.8454 13.9165 17.8454H12.0063Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37627">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09229 2.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const BCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
