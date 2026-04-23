import { styled } from 'styled-components'

export const Header = styled.h1`
    color:green;
    width: ${({name})=>name?"10px":"20px"};
    &.outer{
    background-color:blue
    }
    #inner{
    color:yellow;
    }
`

// width:${({ name }) => name ? "100px" : "200px"};





























