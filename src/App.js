import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Subscriptions from "./Subscriptions";
import Signing from "./Signing";
import Home from "./Home";
import { useState } from "react";
import SignUpContext from "./Context/SignUpContext";
import LoginContext from "./Context/LoginContext";
import SubscriptionsContext from "./Context/SubscriptionsContext";
import SigningContext from "./Context/SigningContext";

function App() {

  const [name, setName]= useState("")
  const [cpf,setCpf]=useState("")
  const [password,setPassword]=useState("")
  const [email, setEmail]=useState("")
  const [mail,setMail]=useState("")
  const [senha, setSenha]= useState("")
  const [planos, setPlanos]=useState([])
  const [cardname, setCardname]= useState("")
  const [digits,setDigits]=useState("")
  const [cvv,setCvv]=useState("")
  const [expire, setExpire]=useState("")
  const [pacote, setPacote]= useState([])
  const SignUpValue={name:name, setName:setName, cpf:cpf, setCpf:setCpf, password:password, setPassword:setPassword, email:email, setEmail: setEmail}
  const LoginValue={mail:mail, setMail:setMail, senha:senha, setSenha: setSenha}
  const SubscriptionsValue={planos: planos, setPlanos: setPlanos}
  const SigningValue={cardname:cardname, setCardname:setCardname, digits:digits, setDigits:setDigits, cvv: cvv, setCvv: setCvv,expire:expire,setExpire: setExpire, pacote:pacote, setPacote: setPacote}


  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<LoginContext.Provider value={LoginValue}><Login/></LoginContext.Provider>}/>
       <Route path="/sign-up" element={<SignUpContext.Provider value={SignUpValue}><Cadastro/></SignUpContext.Provider>} />
       <Route path="/subscriptions" element={<SubscriptionsContext.Provider value={SubscriptionsValue}><Subscriptions/></SubscriptionsContext.Provider>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/subscriptions/:ID_DO_PLANO" element={<SigningContext.Provider value={SigningValue}><Signing/></SigningContext.Provider>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
