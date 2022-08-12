import styled from "styled-components";
import { NavLink } from "react-router-dom";
import img_bc1 from '../../images/b_image1.png'
import img_bc2 from '../../images/b_image2.png'

export const Body = styled.div`
width: 100%;
margin-top: 20px;
background-color: transparent;
display: flex;
flex-wrap: wrap;
// flex-direction: column;
`

export const LeftBlock = styled.div`
width: 300px;
background-color: #F5F5F5;
padding: 1px 10px;
`
export const H4 = styled.h4`
color: #3D3D3D;
font-weight: bold;
`
export const Block = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 0 20px;
`;
Block.P = styled.p`
width: ${({s})=>s ?"60%" : "25%"};
text-align: center;
font-family: Cera Pro;
color: #3D3D3D;
padding: 0;
cursor: pointer;
&:hover{
    transform: scale(1.2);
    color: #46A358;
    font-weight: bold;
}
`;
export const A = styled.a`
color: #46A358;
font-weight: bold;
`;
export const Btn = styled.button`
background-color: #46A358;
color: white;
/* padding:0px 10px; */
border: none;
border-radius: 10px;
cursor: pointer;
text-transform: uppercase;
font-weight: bolder;
`;

export const RightBlock = styled.div`
width: 850px;
display: block;
padding: 0 25px
`
export const RBHead = styled.div`
width:100%;
display: flex;
padding: 0 0 0 5px ;
`
RBHead.Item = styled.p`
width: 150px;
cursor: pointer;
&:hover{
    color: #46A358;
    font-weight: bold;
}
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
Box.Item = styled.div`
width: 250px;
height: 335px;
margin-bottom: 80px;
background-color: #F5F5F5;
padding:10px;
font-family: Cera Pro;
border-top: 3px solid #F5F5F5 ;
&:hover{
    border-top: 3px solid #46A358;
    cursor: pointer;
}
`;
Box.P = styled.p`
color: #46A358;
font-weight: bold;
`

export const Bottom = styled.div`
margin-top: 70px;
width: 100%;
height: 250px;
background-color: #F5F5F5;
display: flex;
padding:5px;
`
Bottom.Card = styled.div`
width: 50%;
border: 1px solid black;
display: flex;
`
function backImg(bg){
    switch(bg){
        case 'f': return img_bc1
        break;
        case 's': return img_bc2
        break;
    }
}
Bottom.Card.Left = styled.div`
width: 50%;
border: 1px solid black;
background-image: ${backImg};
background-position:
`