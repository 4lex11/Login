import '../App.css'
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className="loginform">
                <h1>INICIO DE SESION</h1>
                <form>
                    <b><i class="bi bi-person-fill"/> Usuario</b>
                    <input type="text"/>

                    <b><i class="bi bi-lock-fill"/> Contraseña</b>
                    <input type="password"/>

                    <div className="recuerdame">
                        <input type="checkbox" id="recuerdame"/>
                        <label for="recuerdame"> Recuerdame</label>
                    </div>

                    <button type="submit" >Iniciar sesion</button>
                </form>
            </div>
            );
    }
}

export default Login;