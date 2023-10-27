
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
<g clip-path="url(#clip0_2207_34835)">
<path d="M6.71118 24.6524H20.926C23.387 24.6524 24.6057 23.4336 24.6057 21.0195V6.71094C24.6057 4.29688 23.387 3.07812 20.926 3.07812H6.71118C4.26196 3.07812 3.03149 4.28516 3.03149 6.71094V21.0195C3.03149 23.4453 4.26196 24.6524 6.71118 24.6524Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.262 10.3906C18.1721 10.3672 17.2698 9.51171 17.2698 8.41015C17.2698 7.33202 18.1721 6.46484 19.262 6.46484C20.3284 6.46484 21.2073 7.33202 21.2073 8.41015C21.2073 9.51171 20.3284 10.4141 19.262 10.3906ZM13.8245 15.8281C12.7346 15.8281 11.8674 14.9492 11.8674 13.8477C11.8674 12.7695 12.7346 11.9023 13.8245 11.9023C14.8909 11.9023 15.7815 12.7695 15.7815 13.8477C15.7815 14.9492 14.8909 15.8281 13.8245 15.8281ZM8.39868 21.2656C7.30883 21.2656 6.44165 20.3867 6.44165 19.2969C6.44165 18.207 7.30883 17.3399 8.39868 17.3399C9.46508 17.3399 10.3557 18.207 10.3557 19.2969C10.3557 20.3867 9.46508 21.2656 8.39868 21.2656Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34835">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03149 3.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DieFace3Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
