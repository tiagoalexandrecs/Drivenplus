import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function Home(){
    const params= useParams();
    console.log(params)

    const usuarioDes= localStorage.getItem("usuario")
    const informacoes=JSON.parse(usuarioDes)
    console.log(informacoes);
    

    useEffect(()=> {const promise=axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.ID_DO_PLANO}`,{
        headers: { Authorization: `Bearer ${informacoes.token}` }
    }); promise.then((response)=>{console.log(response.data); })})
}