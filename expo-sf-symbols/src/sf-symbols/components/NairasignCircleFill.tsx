
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
<g clip-path="url(#clip0_2207_37824)">
<path d="M13.9867 26.0068C20.5258 26.0068 25.9398 20.5811 25.9398 14.0537C25.9398 7.51465 20.5141 2.10059 13.975 2.10059C7.44763 2.10059 2.03357 7.51465 2.03357 14.0537C2.03357 20.5811 7.45935 26.0068 13.9867 26.0068Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.91248 14.2412C8.91248 13.8897 9.17029 13.6318 9.49841 13.6318H10.1664V9.34278C10.1664 8.76856 10.5531 8.37012 11.1508 8.37012C11.6547 8.37012 11.9945 8.63965 12.2055 9.08497L14.5024 13.6436H16.225V9.17871C16.225 8.69825 16.5414 8.38184 16.9984 8.38184C17.4555 8.38184 17.7836 8.69825 17.7836 9.17871V13.6436H18.475C18.8031 13.6436 19.0609 13.8897 19.0609 14.2412C19.0609 14.5694 18.8031 14.8506 18.475 14.8506H17.7836V19.0928C17.7836 19.6787 17.3969 20.0772 16.7992 20.0772C16.2953 20.0772 15.9555 19.8076 15.7445 19.3623L13.4594 14.8389H11.725V19.2686C11.725 19.749 11.4086 20.0654 10.9515 20.0654C10.4945 20.0654 10.1664 19.749 10.1664 19.2686V14.8389H9.49841C9.15857 14.8389 8.91248 14.5694 8.91248 14.2412ZM11.725 13.6318H12.8617L11.725 11.1943V13.6318ZM15.1 14.8506L16.225 17.2764V14.8506H15.1Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37824">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const NairasignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
