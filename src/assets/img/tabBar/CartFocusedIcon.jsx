import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.75 1.25l2.08.36.963 11.473a1.8 1.8 0 001.8 1.653h10.909a1.8 1.8 0 001.785-1.546l.949-6.558a1.341 1.341 0 00-1.135-1.52C18.037 5.105 3.164 5.1 3.164 5.1"
                fill="#FE554A"
            />
            <Path
                d="M.75 1.25l2.08.36.963 11.473a1.8 1.8 0 001.8 1.653h10.909a1.8 1.8 0 001.785-1.546l.949-6.558a1.341 1.341 0 00-1.135-1.52C18.037 5.105 3.164 5.1 3.164 5.1"
                stroke="#FE554A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12.125 8.795h2.773"
                stroke="#130F26"
                strokeOpacity={0.4}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.154 18.203a.544.544 0 110 1.087.544.544 0 010-1.087zM16.435 18.203a.545.545 0 110 1.09.545.545 0 010-1.09z"
                fill="#FE554A"
                stroke="#FE554A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
