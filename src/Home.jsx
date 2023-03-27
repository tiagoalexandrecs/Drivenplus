import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "./Context/UserContext"

export default function Home(){
    
    const navigate= useNavigate()

    const {usuario,setUsuario}= useContext(UserContext)
    const usuarioDes= localStorage.getItem("usuario")
    const informacoes=JSON.parse(usuarioDes);
    console.log(informacoes)
    setUsuario(informacoes)

    const sig= localStorage.getItem("assinatura")
    const signature =JSON.parse(sig)


    function Delete(){
        const top= {headers:{ Authorization: `Bearer ${usuario.token}` }}
        const promise=axios.delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,top)
        promise.then((response)=> navigate("/subscriptions"))
        promise.catch((error)=> alert(error.response.data.message))
        }

    return(
        <Background>
            <Header>
                <img src={signature === null? informacoes?.membership.image :signature.membership?.image} alt="foto"/>
                <Icon><ion-icon style={{width:"34px", height:"33px", color:"white"}} name="person-circle-outline"></ion-icon></Icon>
            </Header>
            <Text>Olá,{informacoes?.name}</Text>
            <Container>{(signature === null? informacoes?.membership.perks :signature.membership.perks)?.map((i)=> <Perks><a href={i.link}>{i.title}</a></Perks>)}</Container>
            <Footer>
                <Change><Link to="/subscriptions"style={{color:"white"}}>Mudar plano</Link></Change>
                <Cancel onClick={Delete}>Cancelar plano</Cancel>
            </Footer>


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
`;

const Header=styled.header `
display:flex;
flex-direction:row;
height:95px;
width:100%;
img{
    width: 55px;
height: 50px;
margin-left: 38px;
margin-top: 32px;
}
`;

const Icon=styled.div `
height: 32.9375px;
width: 34px;
border-radius: 0px;
margin-left:207px;
margin-top:23px;
`;

const Text=styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
height: 28px;
width: 116px;
`;

const Container= styled.div `
margin-top:53px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:232px;
`;

const Perks= styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
margin-top:8px;
gap: 10px;
width: 299px;
height: 52px;
left: 38px;
background: #FF4791;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
a {
    color: #FFFFFF;
}

`;

const Footer= styled.div `
display:flex;
flex-direction:column;
margin-top:135px;`

const Change= styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 299px;
height: 52px;
left: 38px;
background: #FF4791;
border-radius: 8px;`;

const Cancel= styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 299px;
height: 52px;
left: 38px;
margin-top:8px;
background:#FF4747;
border-radius: 8px;
color:white;`