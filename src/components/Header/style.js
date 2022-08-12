import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 70px;
/* padding: 0 20px; */
align-items: center;
border-bottom: 1px solid grey; 
display: flex;
justify-content: space-around;
margin-bottom: 10px
`;

const justCont = ({jc})=>{
    switch (jc) {
        case 'center': return 'center'
            break;
        case 'right': return 'right'
            break;
        default: return 'space-around'
            break;
    }
};

export const Card = styled.div`
width: 32%;
display: flex;
justify-content: ${justCont} ;
`;

export const LogoText = styled.p`
font-size: 17px;
font-weight: 700;
color: green;
`;

export const P = styled.p`
/* height: 20px; */
font-size: 12px;
font-weight: bold;
color: grey;
cursor: pointer;
&:hover{
    transform: scale(1.3);
    color: black;
    border-bottom: 1px solid green;
}
`;
export const Btn = styled.button`
background-color: #46A358;
color: white;
padding:10px;
border: none;
border-radius: 10px;
cursor: pointer;

`;
export const Inp = styled.input`
padding: 3px;
outline: none;
display: none;
` 