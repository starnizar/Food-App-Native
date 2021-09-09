import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.501 12.233c0-.863-.071-1.493-.226-2.147h-10.06v3.897h5.905c-.119.968-.762 2.427-2.19 3.407l-.02.13 3.18 2.415.22.021c2.024-1.831 3.191-4.526 3.191-7.723z"
                fill="#4285F4"
            />
            <Path
                d="M12.215 22.5c2.893 0 5.321-.933 7.095-2.543l-3.381-2.567c-.905.618-2.12 1.05-3.714 1.05a6.438 6.438 0 01-6.096-4.363l-.125.01-3.307 2.509-.044.117c1.762 3.43 5.381 5.787 9.572 5.787z"
                fill="#34A853"
            />
            <Path
                d="M6.12 14.076A6.348 6.348 0 015.763 12c0-.724.13-1.424.345-2.077l-.006-.139-3.349-2.549-.11.051A10.339 10.339 0 001.502 12c0 1.691.417 3.29 1.143 4.713l3.476-2.637z"
                fill="#FBBC05"
            />
            <Path
                d="M12.215 5.56c2.012 0 3.369.852 4.143 1.563L19.38 4.23c-1.857-1.692-4.273-2.73-7.166-2.73-4.19 0-7.81 2.357-9.572 5.787l3.465 2.636a6.465 6.465 0 016.107-4.363z"
                fill="#EB4335"
            />
        </Svg>
    )
}

export default SvgComponent
