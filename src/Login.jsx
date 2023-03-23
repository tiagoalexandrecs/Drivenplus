
import styled from "styled-components"
import  foto from "./Captura de tela de 2023-03-22 06-41-17.png"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import LoginContext from "./Context/LoginContext"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const navigate= useNavigate();

    const {mail, setMail, senha, setSenha}= useContext(LoginContext)

    function Subscribe(event){
        event.preventDefault();
        const requisition= axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", { email: mail, password: senha}); 
        requisition.then((response) => {const user=JSON.stringify(response.data);
        localStorage.setItem("usuario",user);
        if(response.data.membership === null){
            navigate("/subscriptions")
        }
        else{
        navigate("/home")
        }})
        requisition.catch((error) =>{
            alert(error.response.data.message)
        })
    }


     
    return(
        <Background>
            <img src={foto} alt="logo"/>
            <form onSubmit={Subscribe} >
               <div><input  data-test="email-input" type="email" required  value={mail} placeholder="email"  onChange={e => setMail(e.target.value)} /></div>
               <br></br>
               <div><input  data-test="password-input" type="text" required value={senha} placeholder="senha" onChange={e => setSenha(e.target.value)}/></div>
               <br></br>
               <button  type="submit" data-test="login-btn">ENTRAR</button>
            </form>
            <Link  data-test="signup-link" to="/sign-up"><Color>Não tem uma conta? Cadastre-se</Color></Link>
            
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