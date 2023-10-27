
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
<g clip-path="url(#clip0_2207_35279)">
<path d="M13.9846 25.9985C20.5237 25.9985 25.9377 20.5728 25.9377 14.0454C25.9377 7.50635 20.512 2.09229 13.9729 2.09229C7.44555 2.09229 2.03149 7.50635 2.03149 14.0454C2.03149 20.5728 7.45727 25.9985 13.9846 25.9985ZM13.9846 24.0064C8.45337 24.0064 4.0354 19.5767 4.0354 14.0454C4.0354 8.51417 8.44165 4.08448 13.9729 4.08448C19.5042 4.08448 23.9456 8.51417 23.9456 14.0454C23.9456 19.5767 19.5159 24.0064 13.9846 24.0064Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.74243 18.6626C9.74243 19.5415 10.1292 19.9517 10.9377 19.9517H17.0081C17.8167 19.9517 18.2034 19.5415 18.2034 18.6626V13.9985C18.2034 13.1782 17.8635 12.7798 17.1721 12.7329V11.3384C17.1721 9.18212 15.8831 7.74072 13.9729 7.74072C12.0627 7.74072 10.7737 9.18212 10.7737 11.3384V12.7329C10.0823 12.7798 9.74243 13.1782 9.74243 13.9985V18.6626ZM11.9924 12.7212V11.2095C11.9924 9.83837 12.7893 8.92431 13.9729 8.92431C15.1565 8.92431 15.9534 9.83837 15.9534 11.2095V12.7212H11.9924Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35279">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03149 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
