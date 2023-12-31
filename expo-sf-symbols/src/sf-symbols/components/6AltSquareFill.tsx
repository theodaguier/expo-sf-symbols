
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37962)">
<path d="M6.72583 24.6048H20.9406C23.4016 24.6048 24.6203 23.386 24.6203 20.9719V6.66333C24.6203 4.24927 23.4016 3.03052 20.9406 3.03052H6.72583C4.27661 3.03052 3.04614 4.23755 3.04614 6.66333V20.9719C3.04614 23.3977 4.27661 24.6048 6.72583 24.6048Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8742 19.554C11.3547 19.554 9.65552 17.9602 9.65552 15.6399C9.65552 14.3274 10.1829 13.0032 11.425 11.3508C12.0579 10.5188 12.7844 9.59302 13.5813 8.55005C13.7688 8.31567 14.0031 8.05786 14.3899 8.05786C14.9758 8.05786 15.2219 8.43286 15.2219 8.79614C15.2219 9.03052 15.1164 9.21802 14.9406 9.46411C14.343 10.2258 13.5461 11.2102 12.9368 12.0071C12.5618 12.4993 12.3977 12.7102 12.2805 12.9211L12.3977 12.9563C12.8079 12.5461 13.6399 12.2297 14.4602 12.2297C16.5695 12.2297 18.0695 13.718 18.0695 15.7102C18.0695 17.9602 16.3586 19.554 13.8742 19.554ZM13.8742 18.0305C15.3039 18.0305 16.3703 17.0579 16.3703 15.804C16.3703 14.5266 15.3039 13.6009 13.8625 13.6009C12.4329 13.6009 11.3664 14.5266 11.3664 15.7805C11.3664 17.0579 12.4446 18.0305 13.8742 18.0305Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37962">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.04614 3.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 6AltSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
