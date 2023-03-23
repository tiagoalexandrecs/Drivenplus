import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import SubscriptionsContext from "./Context/SubscriptionsContext"
import { useEffect } from "react"


export default function Subscriptions(){

    const {planos, setPlanos}= useContext(SubscriptionsContext)

    const usuarioDes= localStorage.getItem("usuario")
    const informacoes=JSON.parse(usuarioDes)
    console.log(informacoes);
    

    useEffect(()=> {const promise=axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",{
        headers: { Authorization: `Bearer ${informacoes.token}` }
    }); promise.then((response)=>{setPlanos(response.data); })})


    return (
        <Background>
            <Text>Escolha seu Plano</Text>
            <div>{planos.map((i)=> <Link><Container><img src={i.image}/><Text2>{i.price}</Text2></Container></Link>)}</div>
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
`;

const Container= styled.div `
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
width: 290px;
height: 180px;
left: 43px;
background: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
margin-top:24px;
img{
    height:95px;
    width:102px;
}`;

const Text2= styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
margin-left: 22px;`
