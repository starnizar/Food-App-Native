import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.872 8.598c-1.073-3.35.18-7.18 3.698-8.312a6.007 6.007 0 015.43.912C11.455.073 13.572-.307 15.42.286c3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4S2.598 13.97.872 8.598z"
                fill="#FE554A"
            />
            <Path
                d="M14 3.7a2.781 2.781 0 011.917 2.421"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
