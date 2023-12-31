
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
<g clip-path="url(#clip0_2207_34450)">
<path d="M3.00191 11.5483C1.38473 12.2983 1.84176 14.4662 3.62301 14.4779L12.1542 14.5131C12.2948 14.5131 12.33 14.5483 12.33 14.6889L12.3534 23.1615C12.3651 25.0131 14.58 25.3412 15.3651 23.642L24.0136 5.02088C24.8222 3.28651 23.4511 2.05604 21.7401 2.86463L3.00191 11.5483ZM5.0527 12.6498C5.00582 12.6498 4.9941 12.6029 5.04098 12.5795L21.8925 4.86854C21.9628 4.83338 22.0097 4.85682 21.9628 4.95057L14.2167 21.7787C14.1933 21.8256 14.1581 21.8139 14.1581 21.767L14.205 13.4818C14.205 12.9662 13.8534 12.6029 13.3144 12.6029L5.0527 12.6498Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.0098 23.0093C22.9004 23.8999 24.3535 23.8999 25.2324 22.9859C26.0879 22.1069 26.0996 20.689 25.2207 19.7984L7.17379 1.75147C6.29489 0.872558 4.83004 0.872558 3.95114 1.75147C3.07223 2.63038 3.07223 4.09522 3.95114 4.97413L22.0098 23.0093Z" fill="currentColor"/>
<path d="M22.9707 22.0484C23.3223 22.3999 23.9082 22.3999 24.2481 22.0484C24.5879 21.6968 24.5996 21.1226 24.2481 20.771L6.20115 2.72413C5.8613 2.37256 5.27536 2.37256 4.91208 2.72413C4.57224 3.06397 4.57224 3.66163 4.91208 4.00147L22.9707 22.0484Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34450">
<rect width="23.8706" height="25.1426" fill="currentColor" transform="translate(2.00635 1.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
