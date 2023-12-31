
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
<g clip-path="url(#clip0_2207_33562)">
<path d="M3.08984 8.70117C3.08984 9.36914 3.55859 10.0019 4.48438 10.0019H23.5391C24.4766 10.0019 24.9336 9.36914 24.9336 8.70117C24.9336 8.25586 24.7344 7.78711 24.2774 7.44727L15.4649 0.662109C14.9727 0.287109 14.5039 0.0996094 14.0117 0.0996094C13.5195 0.0996094 13.0508 0.287109 12.5586 0.662109L3.74609 7.44727C3.30078 7.78711 3.08984 8.25586 3.08984 8.70117ZM3.06641 13.8223C3.06641 14.4316 3.48828 14.8418 4.1211 14.8418H23.9024C24.5352 14.8418 24.957 14.4316 24.957 13.8223C24.957 13.2129 24.5352 12.791 23.9024 12.791H4.1211C3.48828 12.791 3.06641 13.2129 3.06641 13.8223ZM3.05469 18.9434C3.05469 19.3887 3.25391 19.8574 3.71094 20.1973L12.5234 26.9824C13.0156 27.3574 13.4844 27.5449 13.9766 27.5449C14.4688 27.5449 14.9375 27.3574 15.4297 26.9824L24.2422 20.1973C24.6992 19.8574 24.8985 19.3887 24.8985 18.9434C24.8985 18.2637 24.4414 17.6308 23.5039 17.6308H4.44922C3.52344 17.6308 3.05469 18.2637 3.05469 18.9434Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33562">
<rect width="21.9023" height="27.457" fill="currentColor" transform="translate(3.05469 0.0996094)"/>
</clipPath>
</defs>
</svg>

`;

export const MountFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
