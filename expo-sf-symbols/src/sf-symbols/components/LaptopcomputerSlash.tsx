
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35401)">
<path d="M0.0712891 22.6831C0.0712891 23.4214 0.668945 24.019 1.39551 24.019H32.544C33.2705 24.019 33.8682 23.4214 33.8682 22.6831C33.8682 21.9448 33.2705 21.3472 32.544 21.3472H29.9775V7.43701C29.9775 5.79639 29.0986 4.95264 27.4697 4.95264H6.46973C4.92285 4.95264 3.96191 5.79639 3.96191 7.43701V21.3472H1.39551C0.668945 21.3472 0.0712891 21.9448 0.0712891 22.6831ZM5.84863 21.3472V7.96436C5.84863 7.21436 6.22363 6.83936 6.97363 6.83936H26.9658C27.7158 6.83936 28.0908 7.21436 28.0908 7.96436V21.3472H5.84863Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M26.4033 27.1948C27.294 28.0854 28.7354 28.0854 29.6143 27.1831C30.4932 26.2925 30.4932 24.8628 29.626 23.9839L7.43067 1.77686C6.55176 0.897956 5.09863 0.886238 4.20801 1.77686C3.3291 2.65576 3.3291 4.12061 4.20801 4.9878L26.4033 27.1948Z" fill="currentColor"/>
<path d="M27.3643 26.2222C27.7158 26.5854 28.3018 26.5854 28.6416 26.2222C28.9932 25.8706 29.0049 25.3081 28.6533 24.9448L6.46973 2.74953C6.11817 2.39797 5.53223 2.38625 5.18067 2.74953C4.8291 3.08938 4.8291 3.67532 5.18067 4.02688L27.3643 26.2222Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35401">
<rect width="33.7969" height="26.7744" fill="currentColor" transform="translate(0.0712891 1.08691)"/>
</clipPath>
</defs>
</svg>

`;

export const LaptopcomputerSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
