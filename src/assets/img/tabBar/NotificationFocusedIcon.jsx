import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 15.848c5.64 0 8.248-.724 8.5-3.628 0-2.901-1.819-2.715-1.819-6.275C15.681 3.165 13.045 0 9 0S2.319 3.164 2.319 5.945C2.319 9.505.5 9.32.5 12.22c.253 2.915 2.862 3.628 8.5 3.628z"
                fill="#FE554A"
            />
            <Path
                d="M11.389 18.857c-1.364 1.515-3.492 1.533-4.87 0"
                stroke="#FE554A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
