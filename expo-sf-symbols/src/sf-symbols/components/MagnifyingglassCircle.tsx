
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
<g clip-path="url(#clip0_2207_33958)">
<path d="M13.9677 26.0014C20.5068 26.0014 25.9208 20.5757 25.9208 14.0483C25.9208 7.50927 20.4951 2.09521 13.956 2.09521C7.42871 2.09521 2.01465 7.50927 2.01465 14.0483C2.01465 20.5757 7.44043 26.0014 13.9677 26.0014ZM13.9677 24.0093C8.43653 24.0093 4.01856 19.5796 4.01856 14.0483C4.01856 8.5171 8.42481 4.0874 13.956 4.0874C19.4873 4.0874 23.9287 8.5171 23.9287 14.0483C23.9287 19.5796 19.499 24.0093 13.9677 24.0093Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.6905 17.5757C15.3741 17.5757 17.5655 15.3843 17.5655 12.7007C17.5655 10.0171 15.3741 7.82568 12.6905 7.82568C10.0068 7.82568 7.81543 10.0288 7.81543 12.7007C7.81543 15.3725 10.0068 17.5757 12.6905 17.5757ZM12.6905 15.9819C10.8975 15.9819 9.40918 14.4936 9.40918 12.7007C9.40918 10.9077 10.8975 9.41943 12.6905 9.41943C14.4834 9.41943 15.9599 10.896 15.9599 12.7007C15.9599 14.4936 14.4834 15.9819 12.6905 15.9819ZM19.1124 20.1655C19.6749 20.1655 20.0616 19.7554 20.0616 19.1694C20.0616 18.8999 19.9326 18.6538 19.7451 18.4546L16.042 14.728L14.5419 16.0874L18.2803 19.814C18.5147 20.06 18.7725 20.1655 19.1124 20.1655Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33958">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01465 2.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const MagnifyingglassCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
