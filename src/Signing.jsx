import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import SigningContext from "./Context/SigningContext"

export default function Signing(){

    const {cardname, setCardname, digits, setDigits, cvv, setCvv, expire, setExpire, pacote, setPacote}= useContext(SigningContext)
    const params= useParams();
    console.log(params)

    const usuarioDes= localStorage.getItem("usuario")
    const informacoes=JSON.parse(usuarioDes)
    console.log(informacoes);


    useEffect(()=> {const promise=axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.ID_DO_PLANO}`,{
        headers: { Authorization: `Bearer ${informacoes.token}` }
    }); promise.then((response)=>{const packa=JSON.stringfy(response.data);localStorage.setItem("pack", packa)})})
    
    const pac=localStorage.getItem("pack")
    const pa=JSON.parse(pac)
    console.log(pa.perks)

    function Assinar(event){
        event.preventDefault()
        const promise=axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,{membership:params.ID_DO_PLANO, cardName: cardname, cardNumber: digits, securityNumber: cvv, expirationDate: expire},{
        headers: { Authorization: `Bearer ${informacoes.token}` }
    }); promise.then((response)=>{const signatures=JSON.stringify(response.data);
        localStorage.setItem("assinatura",signatures); })
    }


    return(
        <Background>
            <img src={pa.image} alt="imagem"/>
            <Text>{pa.name}</Text>
            <Beneficios>Benefícios:
            </Beneficios>
            <Text2>Preço:<br></br>
                 R$ {pa.price} cobrados mensalmente
            </Text2>
            <form onSubmit={Assinar}>
            <div><input data-test="email-input" type="text" required value={cardname} placeholder="Nome no cartão" onChange={e => setCardname(e.target.value)}/></div>
            <br></br>
            <div><input  data-test="password-input" type="text"  value={digits} required placeholder="Dígitos do cartão" onChange={e => setDigits(e.target.value)} /></div>
            <br></br>
            <div><input  data-test="user-name-input" type="number" required value={cvv} placeholder="Código de segurança" onChange={e => setCvv(e.target.value)} /></div>
            <br></br>
            <div><input data-test="user-image-input" type="text" required value={expire} placeholder="Validade" onChange={e => setExpire(e.target.value)}/></div>
            <br></br>
            <button  type="submit" data-test="signup-btn">ASSINAR</button>
         </form>
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
    width: 105px;
height: 95px;
margin-left: 106px;
margin-top: 87px;
margin-bottom:12px;
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

`;

const Text= styled.div `
height:38px;
width:164px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;

/* identical to box height */

color: #FFFFFF;`

const Text2= styled.div `
color: #FFFFFF;
margin-bottom:22px;`

const Beneficios=styled.ul `
color: #FFFFFF;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-top:22px;
li{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}`