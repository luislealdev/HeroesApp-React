import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();
    const onLogin = () => {
        navigate('marvel', {replace: true});
    }

  return (

        <div className="container">
        <h1>Login</h1>
        <hr/>
        <button onClick={onLogin}>Login</button>
        </div>

  )
}
