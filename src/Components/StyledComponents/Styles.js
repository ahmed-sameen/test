import { styled } from 'styled-components'

export const Header = styled.h1`
    color:green;
    width:${({ name }) => name ? "100px" : "200px"};
    &.outer{
    background-color:blue
    }
    #inner{
    color:yellow;
    }
`