import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.144 19.782v-3.067c0-.777.632-1.409 1.414-1.414h2.875c.786 0 1.423.633 1.423 1.414v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 002.444-1 3.41 3.41 0 001.013-2.423V8.865c0-.734-.328-1.43-.895-1.902l-6.662-5.29a3.115 3.115 0 00-3.958.072L2.467 6.963A2.474 2.474 0 001.5 8.865v8.703C1.5 19.463 3.047 21 4.956 21h1.916c.327.003.641-.124.873-.353.232-.229.363-.54.363-.864h.036z"
                stroke="#AAACAE"
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default SvgComponent
