
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
<g clip-path="url(#clip0_2207_36711)">
<path d="M2.21191 20.6509V24.2016C2.21191 25.6196 2.8916 26.2759 4.33301 26.2759H8.08301C5.5166 25.0337 3.60645 23.1821 2.21191 20.6509ZM25.8838 20.6509C24.4893 23.1821 22.5791 25.0337 20.0244 26.2759H23.7627C25.2041 26.2759 25.8838 25.6196 25.8838 24.2016V20.6509ZM14.0244 26.1118C20.5635 26.1118 25.9775 20.686 25.9775 14.1587C25.9775 7.61963 20.5518 2.20557 14.0127 2.20557C7.48535 2.20557 2.07129 7.61963 2.07129 14.1587C2.07129 20.686 7.49707 26.1118 14.0244 26.1118ZM14.0244 24.1196C8.49317 24.1196 4.0752 19.6899 4.0752 14.1587C4.0752 8.62744 8.48145 4.19775 14.0127 4.19775C19.544 4.19775 23.9854 8.62744 23.9854 14.1587C23.9854 19.6899 19.5557 24.1196 14.0244 24.1196Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0049 11.2876L13.4854 14.768C13.8135 15.1079 14.3174 15.0962 14.6455 14.768L19.9893 9.42432C20.3174 9.10792 20.3291 8.59229 19.9893 8.27589C19.6494 7.95948 19.169 7.94776 18.8408 8.27589L14.0596 13.0571L11.1651 10.1392C10.8252 9.81104 10.333 9.81104 10.0049 10.1392C9.6885 10.4556 9.67678 10.9595 10.0049 11.2876Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36711">
<rect width="23.9062" height="24.2227" fill="currentColor" transform="translate(2.07129 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const Deskclock = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
