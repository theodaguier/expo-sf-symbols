
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
<g clip-path="url(#clip0_2207_34600)">
<path d="M13.9658 25.9398C20.5049 25.9398 25.9189 20.5141 25.9189 13.9867C25.9189 7.44763 20.4932 2.03357 13.9541 2.03357C7.42675 2.03357 2.0127 7.44763 2.0127 13.9867C2.0127 20.5141 7.43848 25.9398 13.9658 25.9398ZM13.9658 23.9477C8.43458 23.9477 4.01661 19.518 4.01661 13.9867C4.01661 8.45545 8.42285 4.02576 13.9541 4.02576C19.4854 4.02576 23.9268 8.45545 23.9268 13.9867C23.9268 19.518 19.4971 23.9477 13.9658 23.9477Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.9072 20.7484C17.2236 20.7484 17.4111 20.5258 17.4111 20.1742V18.4984H17.6924C19.3916 18.4984 20.3291 17.5492 20.3291 15.85V11.432C20.3291 9.74451 19.3916 8.79529 17.6924 8.79529H10.2393C8.54004 8.79529 7.60254 9.75623 7.60254 11.432V15.85C7.60254 17.5492 8.54004 18.4984 10.2393 18.4984H14.165L16.2627 20.3969C16.5205 20.643 16.6729 20.7484 16.9072 20.7484Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34600">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleRightCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
