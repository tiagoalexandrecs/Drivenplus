import styled from "styled-components"
import  foto from "./Captura de tela de 2023-03-22 06-41-17.png"
import { Link, useActionData, useAsyncError } from "react-router-dom"
import { useContext } from "react"
import SignUpContext from "./Context/SignUpContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Cadastro(){

    const navigate = useNavigate()

    const {name}= useContext(SignUpContext)
    const {setName}= useContext(SignUpContext)
    const {cpf}= useContext(SignUpContext)
    const {setCpf}= useContext(SignUpContext)
    const {password}= useContext(SignUpContext)
    const {setPassword}= useContext(SignUpContext)
    const {email}= useContext(SignUpContext)
    const {setEmail}= useContext(SignUpContext)

    function SignUp(event){
        event.preventDefault();
        const requisition= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", { email: email,name: name, cpf: cpf, password: password}); 
        requisition.then((response) =>{navigate("/")})
        requisition.catch((error) =>{
            alert(error.response.data.message)
        })
    }



    return(
        <Background>
         <form onSubmit={SignUp}>
            <div><input data-test="email-input" type="text" required placeholder="Nome" onChange={e => setName(e.target.value)}/></div>
            <br></br>
            <div><input  data-test="password-input" type="text"  required placeholder="CPF" onChange={e => setCpf(e.target.value)} /></div>
            <br></br>
            <div><input  data-test="user-name-input" type="email" required placeholder="E-mail" onChange={e => setEmail(e.target.value)} /></div>
            <br></br>
            <div><input data-test="user-image-input" type="text" required placeholder="Senha" onChange={e => setPassword(e.target.value)}/></div>
            <br></br>
            <button  type="submit" data-test="signup-btn">CADASTRAR</button>
         </form>
            
            <Link data-test="login-link" to="/"><Color>Já possui uma conta? Entre</Color></Link>
            
        </Background>
    )
};

const Background= styled.div`
width:100%;
height:687px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:#0E0E13;
img{
    width: 299px;
height: 49px;
left: 38px;
top: 134px;
margin-bottom:100px;
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

const Color=styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-decoration-line: underline;

color: #FFFFFF;

`