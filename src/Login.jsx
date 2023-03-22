
import styled from "styled-components"
import  foto from "./Captura de tela de 2023-03-22 06-41-17.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "./Contexts/UserContext"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"

export default function Login(){
    return(
        <Background>
            <img src={foto} alt="logo"/>
            <form onSubmit={Subscribe}>
               <div><input disabled={invalido} data-test="email-input" type="email" required value={email} placeholder="email"  /></div>
               <br></br>
               <div><input disabled={invalido} data-test="password-input" type="text" required value={senha} placeholder="senha"/></div>
               <br></br>
               <button disabled={invalido} type="submit" data-test="login-btn">{invalido? <ThreeDots/> :"Entrar"}</button>
            </form>
            <Link data-test="signup-link" to="/sign-up">Não tem uma conta? Cadastre-se</Link>
            
        </Background>
    )
}


const Background= styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:black;
img{
    width: 299px;
height: 49px;
left: 38px;
top: 134px;
}
input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB; 
    padding: 5px;
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