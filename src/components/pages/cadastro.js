import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

export default function Cadastro(){
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPasssword, setConfirmPassword] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const navigator = useNavigate()

    async function cadastrar(e){
        e.preventDefault()
        const body = {name, lastName, email, password, confirmPasssword, street, number, city, state}

        try {
            await axios.post("", body)
            navigator("/")
        } catch (error) {
            console.error("Erro ao cadastrar")
        }
    }

    return(
        <>
            <form>
                <div className="colunaEsquerda">
                    <h2>Dados pessoais</h2>
                    <input type="text" placeholder="nome" onChange={e=> setName(e.target.value)}></input><br/>
                    <input type="text" placeholder="sobrenome" onChange={e=> setLastName(e.target.value)}></input><br/>
                    <input type="text" placeholder="email" onChange={e=> setEmail(e.target.value)}></input><br/>
                    <input type="password" placeholder="senha" onChange={e=> setPassword(e.target.value)}></input><br/>
                    <input type="password" placeholder="confirme a senha" onChange={e=> setConfirmPassword(e.target.value)}></input><br/>
                </div>
                <div className="colunaDireita">
                    <h2>Endereço</h2>
                <input type="text" placeholder="rua" onChange={e=> setStreet(e.target.value)}></input><br/>
                <input type="number" placeholder="número" onChange={e=> setNumber(e.target.value)}></input><br/>
                <input type="text" placeholder="cidade" onChange={e=> setCity(e.target.value)}></input><br/>
                <input type="text" placeholder="estado" onChange={e=> setState(e.target.value)}></input><br/>
                <button type="submit" onClick={cadastrar}>Cadastrar</button>
                <p><Link to="/login">Já tem uma conta? Entre agora!</Link></p>
                </div>
            </form>
            
        </>
    )
}