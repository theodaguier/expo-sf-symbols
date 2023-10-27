
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
<g clip-path="url(#clip0_2207_33864)">
<path d="M6.01074 23.3977C6.57324 23.3977 7.01856 22.9758 7.01856 22.425V5.02271C7.01856 4.47192 6.57324 4.03833 6.01074 4.03833C5.45996 4.03833 5.01465 4.47192 5.01465 5.02271V22.425C5.01465 22.9758 5.45996 23.3977 6.01074 23.3977ZM21.4326 22.9289C22.3584 22.9289 23.1201 22.2258 23.1201 20.9133V6.5227C23.1201 5.2102 22.3584 4.50708 21.4326 4.50708C20.9521 4.50708 20.5654 4.65942 20.0849 4.94067L8.14356 11.9719C7.31153 12.4641 6.95996 13.0501 6.95996 13.718C6.95996 14.386 7.31153 14.9719 8.14356 15.4641L20.0849 22.4954C20.5654 22.7766 20.9521 22.9289 21.4326 22.9289ZM20.9287 20.761C20.8466 20.761 20.7529 20.7258 20.6357 20.6555L9.50293 14.0461C9.33887 13.9524 9.24512 13.8704 9.24512 13.718C9.24512 13.554 9.32715 13.4836 9.50293 13.3899L20.6357 6.78052C20.7529 6.7102 20.8466 6.67505 20.9287 6.67505C21.0927 6.67505 21.2451 6.79223 21.2451 7.02661V20.4094C21.2451 20.6438 21.0927 20.761 20.9287 20.761Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33864">
<rect width="18.1055" height="19.3711" fill="currentColor" transform="translate(5.01465 4.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BackwardEnd = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
