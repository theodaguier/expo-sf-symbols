
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
<g clip-path="url(#clip0_2207_37446)">
<path d="M10.5522 25.2983C15.0405 25.2983 18.1226 22.2749 18.1226 16.9194V8.98584L17.9585 5.35303L17.4195 5.56397L19.9038 8.4585L23.1968 11.8335C23.3843 12.021 23.6187 12.1265 23.9116 12.1265C24.521 12.1265 24.9429 11.7046 24.9429 11.0835C24.9429 10.8257 24.8257 10.521 24.6265 10.3218L17.8648 3.43115C17.6421 3.19678 17.3609 3.09131 17.0796 3.09131C16.7866 3.09131 16.5171 3.19678 16.2945 3.43115L9.53271 10.3218C9.33349 10.521 9.20459 10.8257 9.20459 11.0835C9.20459 11.7046 9.63818 12.1265 10.2358 12.1265C10.5405 12.1265 10.7749 12.021 10.9624 11.8335L14.2554 8.4585L16.7398 5.56397L16.189 5.35303L16.0366 8.98584V17.0952C16.0366 21.0913 13.8218 23.2124 10.6694 23.2124C7.51709 23.2124 5.16162 21.0913 5.16162 17.0952V14.3999C5.16162 13.7554 4.69287 13.3335 4.11865 13.3335C3.54443 13.3335 3.07568 13.7554 3.07568 14.3999V17.1069C3.07568 22.3569 6.06396 25.2983 10.5522 25.2983Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37446">
<rect width="21.8672" height="22.2773" fill="currentColor" transform="translate(3.07568 3.021)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUturnUp = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
