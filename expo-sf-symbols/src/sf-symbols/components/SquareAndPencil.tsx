
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
<g clip-path="url(#clip0_2207_32910)">
<path d="M2.07764 21.2451C2.07764 23.6709 3.31983 24.8779 5.75733 24.8779H19.1635C21.6128 24.8779 22.8432 23.6709 22.8432 21.2451V7.74511C22.8432 5.33105 21.6128 4.1123 19.1635 4.1123H5.75733C3.31983 4.1123 2.07764 5.33105 2.07764 7.74511V21.2451ZM5.79248 5.99902H19.1401C20.312 5.99902 20.9565 6.63183 20.9565 7.85058V21.1514C20.9565 22.3701 20.312 22.9912 19.1401 22.9912H5.79248C4.62061 22.9912 3.96436 22.3701 3.96436 21.1514V7.85058C3.96436 6.63183 4.62061 5.99902 5.79248 5.99902Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6558 18.7607L13.2221 17.6357L26.101 4.73343C27.1206 3.7139 27.1206 2.14359 26.101 1.12406L25.8198 0.854524C24.8354 -0.14157 23.2534 -0.0946947 22.2456 0.913118L9.39013 13.7686L8.21825 16.2178C7.49169 17.7295 9.08544 19.4287 10.6558 18.7607Z" fill="currentColor"/>
<path d="M10.0229 17.2841L12.3081 16.288L23.2534 5.35444L21.6479 3.77241L10.7143 14.706L9.65964 16.9091C9.56589 17.1083 9.80027 17.3778 10.0229 17.2841ZM24.1206 4.49897L24.9643 3.63178C25.3628 3.20991 25.3628 2.64741 24.9643 2.26069L24.6948 1.97944C24.3315 1.61616 23.7573 1.66303 23.3706 2.03803L22.5151 2.88178L24.1206 4.49897Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32910">
<rect width="24.7881" height="27.9649" fill="currentColor" transform="translate(2.07764 0.131836)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareAndPencil = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
