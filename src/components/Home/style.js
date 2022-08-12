import styled from "styled-components";
import mainBg from '../../images/01.png'

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`

export const Container = styled.div`
background-color: #F5F5F5;
width: 100%;
height: 450px;
display: flex;
`;
export const Card = styled.div`
width: 50%;
height: 100%;
padding: 50px 50px;

`;

Card.T = styled.p`
color: #3D3D3D;
font-weight: bold;
text-transform: uppercase;
`;


Card.Mt = styled.a`
color:${({g})=>g?"#46A358":'#3D3D3D'};
font-weight: bold;
text-transform: uppercase;
font-size: 60px;
`
Card.MiniText = styled.p`
color:#3D3D3D;
font-size: 14px;
`
export const Btn = styled.button`
background-color: #46A358;
color: white;
padding:15px 25px;
border: none;
border-radius: 10px;
cursor: pointer;
text-transform: uppercase;
font-weight: bolder;
`;

export const MainPic = styled.div`
width: 80%;
height: 80%;
background-image: url(${mainBg});
background-position: center;
background-size: cover;
`

