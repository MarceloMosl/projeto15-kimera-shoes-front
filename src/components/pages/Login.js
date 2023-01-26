import axios from "axios"
import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const navigator = useNavigate()

    async function entrar(e){
        e.preventDefault()
        const body = {email, password}

        try {
            const data = await axios.post("https://kimera-shoes.onrender.com/login", body)
            setUser(data)
            navigator("/home")
        } catch (error) {
            console.log(error)
        }
    }

    function prosseguir(){
        <Link to = "/cadastro"></Link>
    }

    return (
    <>
        <div className="coluna">
                <form>
                    <h2>Já sou cliente</h2><br/>
                    <input type="text" placeholder="email" onChange={e=> setEmail(e.target.value)}></input><br/>
                    <input type="text" placeholder="senha" onChange={e=> setPassword(e.target.value)}></input><br/>
                    <button onClick={entrar}>Entrar</button>
                </form>
            </div>
            <div className="line"></div>
        <div className="coluna">
                <h2>Criar conta</h2>
                <button onClick={prosseguir}>prosseguir</button>
        </div>
    </>
    )
}