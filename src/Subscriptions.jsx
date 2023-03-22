import styled from "styled-components"
import  foto from "./Captura de tela de 2023-03-22 06-41-17.png"
import Normal from "./Normal.png"
import Gold from "./Gold.png"
import Premium from "./Premium.png"
import { Link } from "react-router-dom"
import axios from "axios"


export default function Subscriptions(){
    return (
        <Background>
            <Text>Escolha seu Plano</Text>
            <img src={Normal} alt="normal"/>
            <img src={Gold} alt="normal"/>
            <img src={Premium} alt="normal"/>
        </Background>
    )
}


const Background= styled.div`
width:100%;
height:687px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:#0E0E13;
img{
    width: 290px;
    height: 180px;
    left: 43px;
    background: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
margin-top:24px;
}
input{
    
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:300px;
height:52px;
}
button{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 298px;
height: 52px;
background: #FF4791;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;


}`;

const Text=styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
height: 38px;
width: 300px;
left: 56px;
top: 29px;
border-radius: nullpx;
`