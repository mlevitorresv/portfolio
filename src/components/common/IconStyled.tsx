import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";



const sharedIconStyle = `
    color: white;
    margin: 0 1em;
    cursor: pointer;
`

export const BurgerMenuIconSyled = styled(GiHamburgerMenu)`
    ${sharedIconStyle}
`