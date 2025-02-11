import React from 'react';
import { useNavigate } from "react-router";
import { useEffect, useContext,useState } from 'react';
import { MyContext } from '../../provider/DataProvider';
import { getCurrentUrl } from "../../helpers";
import "../../scss/login.scss"
import {
  logginWithCredentials,
  logginOutFromAuth
} from '../../firebase';
 
const Login = () => {
  let navigate = useNavigate();
    const userContext = useContext(MyContext);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  
    const closeSession = () => {
      logginOutFromAuth((mess, erro, errorMessage)=>{
        if(mess && mess != ""){
          userContext.setAdmin(null)
          navigate(`/${getCurrentUrl()}/`);
        }else{
          console.error(erro, errorMessage);
          //aqui mostramos algun error
        }
      })
    };
    const loginPassword = () => {
      if(email == "" || pass == "") return
      logginWithCredentials(email, pass, (user, error, erroMessage)=>{
        if(user){
          userContext.setAdmin({admin: user});
          navigate(`/${getCurrentUrl()}/`);
        }else{
          //aqui mostramos algun error
          console.error(error, erroMessage);
        }
      });
    }
  
    // console.log(userContext);
    
    if (!userContext.admin?.admin || !userContext.admin?.loged) {
      return (
        <div className='login'>
            <div className='login_wrapper'>
            <div className='correo dataform'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              name='email'
              required=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='password dataform'>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              name='email'
              required={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className='enviar dataform'>
            <a onClick={loginPassword} href='#'>
              Enviar
            </a>
          </div>
            </div>
        </div>
      );
    }
  
    return (
      <div className='login bg-primary p-2 text-center text-white d-flex justify-content-between align-items-center'>
        Admin Version
        <button
          onClick={(e) => closeSession()}
          className='btn btn-red btn-small mx-2 text-white'
        >
          Close Session
        </button>
      </div>
    );
  };
  export default Login;