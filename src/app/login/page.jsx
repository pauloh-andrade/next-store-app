"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {
    const router = useRouter();

    const [messageStatus, setStatusMessage] = useState("")
    const [user, setUser] = useState({ email: "", senha: "" })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/base/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            setStatusMessage("dasda")
            if (res.ok) {
                let status = await res.json()

                if (status.status == true) { 
                    setStatusMessage("Login realizado com sucesso")
                    setTimeout(() => {
                        router.push("/")
                    }, 5000)
                }
                else { 
                    setStatusMessage("Usuário ou senha incorretos")
                    setTimeout(() => {
                        setMessage("")
                        setUser({ email: "", senha: "" })
                    }, 5000) 
                }       
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Informçãoes do login</h1>
            <h2>{messageStatus}</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend> Login </legend>
                    <div>
                        <label htmlFor="idEmal">Email</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite o sua senha" value={user.senha} onChange={handleChange}/>
                    </div>
                    <button>Login</button>
                </fieldset>
            </form>
        </>
    )
}

export default Login;