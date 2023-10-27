
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
<g clip-path="url(#clip0_2207_35488)">
<path d="M5.09302 21.1924H23.8078C25.6359 21.1924 26.8664 19.9034 26.8664 17.9932V9.29785C26.8664 7.38769 25.6477 6.11035 23.8195 6.11035H5.10473C3.27661 6.11035 2.04614 7.38769 2.04614 9.29785V17.9932C2.04614 19.9034 3.26489 21.1924 5.09302 21.1924ZM5.3977 19.3057C4.4602 19.3057 3.93286 18.7432 3.93286 17.7588V9.54394C3.93286 8.55957 4.4602 7.99707 5.3977 7.99707H23.5149C24.4523 7.99707 24.9797 8.55957 24.9797 9.54394V17.7588C24.9797 18.7432 24.4523 19.3057 23.5031 19.3057H5.3977Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.24926 15.8721H12.4289C13.0617 15.8721 13.4719 15.4619 13.4719 14.8057V12.4736C13.4719 11.8291 13.0617 11.4072 12.4289 11.4072H7.24926C6.62817 11.4072 6.2063 11.8291 6.2063 12.4736V14.8057C6.2063 15.4619 6.62817 15.8721 7.24926 15.8721ZM16.4836 15.8721H21.6633C22.2844 15.8721 22.7063 15.4619 22.7063 14.8057V12.4736C22.7063 11.8291 22.2844 11.4072 21.6633 11.4072H16.4836C15.8625 11.4072 15.4406 11.8291 15.4406 12.4736V14.8057C15.4406 15.4619 15.8625 15.8721 16.4836 15.8721Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35488">
<rect width="24.8203" height="15.1055" fill="currentColor" transform="translate(2.04614 6.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const Platter2FilledIphoneLandscape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
