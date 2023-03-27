import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SigningContext from "./Context/SigningContext"
import Modal from "./Modal"
import UserContext from "./Context/UserContext"

export default function Signing(){

    const navigate= useNavigate();

    const {usuario,setUsuario}= useContext(UserContext)

    const {cardname, setCardname, digits, setDigits, cvv, setCvv, expire, setExpire, pacote, setPacote, open, setOpen}= useContext(SigningContext)
    const params= useParams();

    const usuarioDes= localStorage.getItem("usuario")
    const informacoes=JSON.parse(usuarioDes)


    useEffect(()=> {
        const promise=axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.ID_DO_PLANO}`,{
        headers: { Authorization: `Bearer ${informacoes.token}` }
        }); 
        promise.then((response)=>{setPacote(response.data);
        })

    }, [])


    function Appear(){
        setOpen(true)
    }

    function Retornar(){
        navigate("/subscriptions")
    }

        
        


    return(
        <Background>
            <Voltar onClick={Retornar}><ion-icon style={{height:"28px",width:"25px", color:"white"}} name="arrow-back-outline"></ion-icon></Voltar>
            <img src={pacote?.image} alt="imagem"/>
            <Text>{pacote?.name}</Text>
            <Beneficios> <ion-icon name="newspaper-outline"></ion-icon> Benefícios: <br></br> {pacote.perks?.map((i)=><li>{i.title}</li>)}
            </Beneficios> 
            <Text2><ion-icon name="cash-outline"></ion-icon> Preço:<br></br>
                 R$ {pacote?.price} cobrados mensalmente
            </Text2>
                <div><Input data-test="email-input" type="text" required value={cardname} placeholder="Nome no cartão" onChange={e => setCardname(e.target.value)}></Input></div>
                <br></br>
                <div><Input data-test="password-input" type="text"  value={digits} required placeholder="Dígitos do cartão" onChange={e => setDigits(e.target.value)}></Input></div>
                 <br></br>
                <Container>
                     <div><Input1 data-test="user-name-input" type="number" required value={cvv} placeholder="Código de segurança" onChange={e => setCvv(e.target.value)}></Input1></div>
                     <div><Input2 data-test="user-image-input" type="text" required value={expire} placeholder="Validade" onChange={e => setExpire(e.target.value)}></Input2></div>
                     <br></br>
                </Container>
                <Button onClick={Appear}>ASSINAR</Button>
                <Modal pacote={pacote} open={open} onClose={() => setOpen(false)}/>
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
margin-top: 87px;
margin-bottom:12px;
}`;

const Voltar= styled.button `
height: 27.29375648498535px;
width: 28.003116607666016px;
margin-top: 29.646881103515625px;
margin-right: 250px;
border-radius: 0px;
background: #0E0E13;
`

const Button=styled.button `
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
margin-top:12px;

color: #FFFFFF;`;

const Text= styled.div `
height:38px;
width:260px;
margin-left:30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
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
margin-right:150px;
list-style: none;
counter-reset: my-awesome-counter;
li{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
counter-increment: my-awesome-counter;
}
li::before {
    content: counter(my-awesome-counter) ". ";
    color: #FFFFFF ;
    font-weight: bold;
  }`;


const Container= styled.div `
display:flex;
flex-direction:row;`;

const Input1= styled.input `
background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:140px;
height:52px;
margin-top:8px;`;

const Input2=styled.input `
background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #7E7E7E;
width:145px;
height:52px;
margin-left:9px;
margin-top:8px;`

const Input=styled.input `
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
margin-top:8px;`


