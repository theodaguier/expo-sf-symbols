
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37122)">
<path d="M14.4531 22.4512C15.0625 22.4512 15.3789 22.2168 15.6016 21.5606L17.1133 17.4238H24.0273L25.5391 21.5606C25.7617 22.2168 26.0664 22.4512 26.6758 22.4512C27.2969 22.4512 27.6953 22.0762 27.6953 21.4903C27.6953 21.291 27.6602 21.1035 27.5664 20.8574L22.0703 6.2207C21.8008 5.50586 21.3203 5.14258 20.5703 5.14258C19.8438 5.14258 19.3516 5.49414 19.0938 6.20899L13.5977 20.8692C13.5039 21.1153 13.4688 21.3028 13.4688 21.502C13.4688 22.0879 13.8438 22.4512 14.4531 22.4512ZM17.6875 15.6426L20.5352 7.75586H20.5938L23.4414 15.6426H17.6875Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.97266 22.416C2.45312 22.416 2.76953 22.1699 2.95703 21.5957L3.92969 18.7246H8.51172L9.48438 21.5957C9.67188 22.1934 9.98828 22.416 10.4805 22.416C11.0664 22.416 11.4648 22.0528 11.4648 21.5254C11.4648 21.291 11.4062 21.0684 11.3125 20.8223L7.66797 11.1426C7.39844 10.4277 6.90625 10.0527 6.21484 10.0527C5.53516 10.0527 5.04297 10.4043 4.77344 11.1426L1.12891 20.8223C1.03516 21.0449 1 21.2793 1 21.5254C1 22.0645 1.375 22.416 1.97266 22.416ZM4.44531 17.2012L6.08594 12.3145H6.35547L7.99609 17.2012H4.44531Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37122">
<rect width="26.6953" height="17.332" fill="currentColor" transform="translate(1 5.14258)"/>
</clipPath>
</defs>
</svg>

`;

export const TextformatSize = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
