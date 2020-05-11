import styled from "styled-components";


export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.1rem solid;
color: var(--lightBlue);
margin:auto;
transition:all .5s;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);

}

`;