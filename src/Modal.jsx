import styled from "styled-components"
import React from "react"
function Modal({open, onClose,pacote}){
    if(!open){
        return null
    }
    else{
        return(
            <Overlay>
                <Alert>
                    <Texto>Tem certeza que deseja assinar o plano{pacote.name}por R${pacote.price}?</Texto>
                    <Container>
                        <No onClick={onClose}>Não</No>
                        <Yes>Sim</Yes>
                    </Container>
                </Alert>
            </Overlay>
        )
    }
}

export default Modal;


const No= styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 50px;
height: 52px;
background: #CECECE;
border-radius: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;`;

const Yes=styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 50px;
height: 52px;
left: 195px;
background: #FF4791;
border-radius: 8px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;`;

const Alert=styled.div `
width: 248px;
height: 210px;
left: 64px;
background: #FFFFFF;
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
display:flex;
justify-content:center;
align-items: center;

`;

const Container= styled.div `
display:flex;
flex-direction:row;`;

const Overlay=styled.div ` 
background-color: rgba(0, 0, 0, 0.5); 
position: fixed;
width: 100%;
height: 100%;
top:0;
left:0;
bottom:0;
rigth:0;
zIndex:4;`

const Texto=styled.div `
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
height: 67px;
width: 204px;
`
  