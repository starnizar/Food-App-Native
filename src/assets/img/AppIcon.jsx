import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M104.735 4.208c-.011.01-.022.01-.022.034l-.023.022c-.034.035-.046.046-.034.046L71.965 38.66l-7.7 8.093a.136.136 0 00-.046-.022l-.136-.068-31.486-14.05 1.148-.534 5.308-2.49 7.4-3.466a.112.112 0 01.045-.023h.012L101.73.24a2.543 2.543 0 013.005 3.968z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M.422 21.383h.012c-.012.011-.012.022-.023.034a.041.041 0 01.01-.034zM64.269 46.753s-1.035-.375-2.831-1.057c-1.8-.716-4.365-1.67-7.422-2.921a534.61 534.61 0 01-10.4-4.308c-3.784-1.614-7.81-3.387-11.833-5.16-2-.91-4-1.808-5.967-2.706-1.967-.875-3.888-1.8-5.763-2.659-3.728-1.74-7.195-3.4-10.151-4.865-1.49-.717-2.83-1.4-4.035-2.012-.591-.3-1.16-.592-1.66-.83a2.76 2.76 0 00-1.443-.25 3.094 3.094 0 00-1.9.886 1.291 1.291 0 00-.125.137c-.035.034-.07.079-.1.113a.769.769 0 00-.091.1A3.087 3.087 0 014.48 20.05l28.122 12.56 1.148-.534c3.6 1.625 7.195 3.251 10.56 4.831a578.538 578.538 0 0110.16 4.865c2.967 1.455 5.4 2.716 7.117 3.58a127.89 127.89 0 012.5 1.308l.136.068a.136.136 0 01.045.025z"
                fill="#000"
                opacity={0.2}
            />
            <Path
                d="M64.27 46.753l-12.4 13.038a.16.16 0 00-.023.034s-.012-.011-.012 0l-9.889 10.4a5.563 5.563 0 01-.454.432 5.909 5.909 0 01-8.616-1.057L13.154 42.206v-.011c-.023-.012-.023-.023-.023-.023l-.238-.33L.617 24.803a3.064 3.064 0 01-.211-3.365.011.011 0 00.007-.011v-.011a.041.041 0 01.01-.034h.012c.022-.046.068-.091.113-.159a3.087 3.087 0 013.933-1.171l28.122 12.56 31.486 14.05.136.068c.016.005.031.013.044.023z"
                fill="url(#prefix__paint1_linear)"
            />
            <Path
                d="M71.965 38.66l-7.7 8.093a.134.134 0 00-.046-.022L32.597 32.613l1.148-.534 5.308-2.489 32.912 9.07z"
                fill="#000"
                opacity={0.2}
            />
            <Path
                d="M.422 21.383h.012c-.012.022-.023.034-.023.045a.07.07 0 01.01-.045zM64.269 46.753s-1.035-.375-2.831-1.057c-1.8-.716-4.365-1.67-7.422-2.921a534.61 534.61 0 01-10.4-4.308c-3.784-1.614-7.81-3.387-11.833-5.16-2-.91-4-1.808-5.967-2.706-1.967-.875-3.888-1.8-5.763-2.659-3.728-1.74-7.195-3.4-10.151-4.865-1.49-.717-2.83-1.4-4.035-2.012-.591-.3-1.16-.592-1.66-.83a2.76 2.76 0 00-1.443-.25 3.094 3.094 0 00-1.9.886 1.291 1.291 0 00-.125.137.88.88 0 00-.1.113.769.769 0 00-.091.1A3.087 3.087 0 014.48 20.05l28.122 12.56 31.486 14.05.136.068a.136.136 0 01.044.025z"
                fill="#fff"
                opacity={0.5}
            />
            <Path
                d="M51.833 59.825l-9.889 10.4a5.58 5.58 0 01-.454.432 5.909 5.909 0 01-8.616-1.057L13.152 42.206c.137.148.705.818 1.6 1.9 1 1.25 2.478 3.012 4.172 5.172 1.694 2.16 3.66 4.694 5.717 7.445 2.07 2.728 4.217 5.7 6.377 8.65l1.591 2.24.784 1.113.205.273c.052.08.11.156.171.228.12.163.254.315.4.454a5.078 5.078 0 004.047 1.49 5.152 5.152 0 002.07-.626c.304-.168.59-.37.851-.6l.228-.193.09-.08.1-.114.42-.409a180.02 180.02 0 013.183-3.1c1.967-1.91 3.672-3.444 4.831-4.558 1.04-.946 1.697-1.546 1.844-1.666z"
                fill="#000"
                opacity={0.2}
            />
            <Path
                d="M105.042 3.662a2.338 2.338 0 00-.045-1.989 2.25 2.25 0 00-2.444-1.3 8.288 8.288 0 00-1.773.83c-.648.329-1.33.682-2.035 1.045a580.86 580.86 0 01-9.754 4.9c-1.8.864-3.647 1.8-5.546 2.682-1.9.882-3.807 1.808-5.728 2.717-3.865 1.8-7.73 3.58-11.38 5.206a544.055 544.055 0 01-10 4.353c-2.943 1.262-5.422 2.228-7.15 2.944-1.488.6-2.443.955-2.67 1.046L101.737.237a2.543 2.543 0 013 3.967c.121-.169.223-.35.305-.542z"
                fill="#fff"
                opacity={0.5}
            />
            <Path
                d="M102.428 3.355l-4.149 4.354c-2.989 3.137-5.975 6.274-8.957 9.411L48.106 27.862c9.662-4.524 19.33-9.048 29-13.572 7.695-3.6 15.395-7.207 23.1-10.821.739-.341 1.478-.694 2.217-1.035.905-.432.39.511.005.921zM60.416 47.515a1069.823 1069.823 0 00-5.638 5.922c-.523.546-1.045 1.1-1.569 1.648L3.23 22.1c.574.102 1.125.31 1.625.614 8.093 3.614 16.19 7.229 24.29 10.844 10.425 4.659 20.849 9.311 31.272 13.958z"
                fill="#fff"
                opacity={0.3}
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={12.879}
                    y1={23.377}
                    x2={105.354}
                    y2={23.377}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F8007A" />
                    <Stop offset={1} stopColor="#FC7300" />
                </LinearGradient>
                <LinearGradient
                    id="prefix__paint1_linear"
                    x1={56.878}
                    y1={36.548}
                    x2={11.56}
                    y2={54.207}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FCC400" />
                    <Stop offset={0.162} stopColor="#FBC000" />
                    <Stop offset={0.307} stopColor="#FBB500" />
                    <Stop offset={0.446} stopColor="#FBA300" />
                    <Stop offset={0.581} stopColor="#FA8900" />
                    <Stop offset={0.712} stopColor="#FA6800" />
                    <Stop offset={0.842} stopColor="#F93F00" />
                    <Stop offset={0.967} stopColor="#F81000" />
                    <Stop offset={1} stopColor="#F80300" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
