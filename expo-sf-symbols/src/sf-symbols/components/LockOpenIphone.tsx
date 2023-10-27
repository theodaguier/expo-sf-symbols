
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
<g clip-path="url(#clip0_2207_35475)">
<path d="M6.07129 23.854C6.07129 25.6821 7.34863 26.9009 9.25879 26.9009H17.9424C19.8525 26.9009 21.1299 25.6821 21.1299 23.854V5.13917C21.1299 3.31104 19.8525 2.09229 17.9424 2.09229H9.25879C7.34863 2.09229 6.07129 3.31104 6.07129 5.13917V23.854ZM7.95801 23.5493V5.44385C7.95801 4.50635 8.50879 3.97901 9.50488 3.97901H17.708C18.6924 3.97901 19.2432 4.50635 19.2432 5.44385V23.5493C19.2432 24.4868 18.6924 25.0142 17.708 25.0142H9.50488C8.50879 25.0142 7.95801 24.4868 7.95801 23.5493Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.39941 17.479C9.39941 18.147 9.71582 18.4751 10.3486 18.4751H14.3213C14.9658 18.4751 15.2822 18.147 15.2822 17.479V14.4321C15.2822 13.7642 14.9658 13.4243 14.3213 13.4243H10.3486C9.71582 13.4243 9.39941 13.7642 9.39941 14.4321V17.479ZM13.419 14.104H14.5791V12.44C14.5791 11.5728 15.0479 11.0103 15.8447 11.0103C16.6416 11.0103 17.0986 11.5728 17.0986 12.44V13.272C17.0986 13.5884 17.3682 13.8579 17.6846 13.8579C18.001 13.8579 18.2588 13.5884 18.2588 13.272V12.44C18.2588 10.9634 17.3096 9.88525 15.8447 9.88525C14.3799 9.88525 13.419 10.9634 13.419 12.5454V14.104Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35475">
<rect width="15.0586" height="24.832" fill="currentColor" transform="translate(6.07129 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockOpenIphone = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
