
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
<g clip-path="url(#clip0_2207_37022)">
<path d="M7.81274 22.4767L20.5979 24.715C22.8362 25.1134 24.1721 23.7072 24.1721 21.1994V7.74628C24.1721 5.10956 22.9299 3.80878 20.5979 4.21893L7.81274 6.46893C5.48071 6.87909 4.23852 8.01581 4.23852 9.98456V18.9494C4.23852 20.9064 5.48071 22.0666 7.81274 22.4767ZM7.71899 20.7072C6.60571 20.5197 6.00805 19.9572 6.00805 18.9728V9.96112C6.00805 8.97675 6.60571 8.41425 7.71899 8.22675L20.6917 5.98846C21.8049 5.80096 22.4026 6.42206 22.4026 7.72284V21.2228C22.4026 22.465 21.7698 23.133 20.6917 22.9572L7.71899 20.7072ZM0.968994 15.3517H27.4417C28.0276 15.3517 28.3792 15.0119 28.3792 14.4728C28.3792 13.9103 28.0276 13.5822 27.4417 13.5822H0.968994C0.383056 13.5822 0.0314941 13.9103 0.0314941 14.4728C0.0314941 15.0119 0.383056 15.3517 0.968994 15.3517Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37022">
<rect width="28.3477" height="20.809" fill="currentColor" transform="translate(0.0314941 4.14453)"/>
</clipPath>
</defs>
</svg>

`;

export const TrapezoidAndLineHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
