"use client"
import { useState } from "react"

const Login = () => {
    const [user, setUser] = useState({ email: "", senha: ""})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})   
    }

    const handleSubmit = async () => {
        e.preventDefault();

        try {
            const res = await fetch("http://loalhost:3000/api/base/base-users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            if (Response.ok) {
                let status = await res.json()
                if (status) {
                    console.log("Usuário validado com sucesso")
                } else {
                    console.log("falha no login")
                }
            }
        } catch (err) {

        }
    }

    return (
        <>
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