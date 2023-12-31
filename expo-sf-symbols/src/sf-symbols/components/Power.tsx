
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
<g clip-path="url(#clip0_2207_33533)">
<path d="M13.9867 25.6992C20.5258 25.6992 25.9398 20.2735 25.9398 13.7461C25.9398 10.1484 24.2992 7.03125 22.0492 4.98047C21.018 4.04297 19.6938 5.4375 20.7133 6.41016C22.7055 8.22656 23.9359 10.8281 23.9477 13.7461C23.9594 19.2774 19.518 23.7071 13.9867 23.7071C8.45545 23.7071 4.03748 19.2774 4.03748 13.7461C4.04919 10.8047 5.27966 8.21484 7.26013 6.39844C8.29138 5.41406 6.95545 4.03125 5.92419 4.96875C3.66248 7.01953 2.03357 10.1484 2.03357 13.7461C2.03357 20.2735 7.45935 25.6992 13.9867 25.6992ZM13.9867 13.6289C14.5492 13.6289 14.9359 13.2188 14.9359 12.6328V2.10938C14.9359 1.51172 14.5492 1.11328 13.9867 1.11328C13.4242 1.11328 13.0492 1.51172 13.0492 2.10938V12.6328C13.0492 13.2188 13.4242 13.6289 13.9867 13.6289Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33533">
<rect width="23.9062" height="25.2773" fill="currentColor" transform="translate(2.03357 1.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const Power = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
