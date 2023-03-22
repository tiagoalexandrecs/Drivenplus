import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Subscriptions from "./Subscriptions";
import { useState } from "react";
import SignUpContext from "./Context/SignUpContext";

function App() {

  const [name, setName]= useState("")
  const [cpf,setCpf]=useState("")
  const [password,setPassword]=useState("")
  const [email, setEmail]=useState("")
  const SignUpValue={name:name, setName:setName, cpf:cpf, setCpf:setCpf, password:password, setPassword:setPassword, email:email, setEmail: setEmail}


  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/sign-up" element={<SignUpContext.Provider value={SignUpValue}><Cadastro/></SignUpContext.Provider>} />
       <Route path="/subscriptions" element={<Subscriptions/>}/>
       <Route path="/home" />
       <Route path="/subscriptions/:ID_DO_PLANO"/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
