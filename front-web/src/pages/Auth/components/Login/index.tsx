import ButtonIcon from "core/components/ButtonIcon";
import React from "react";
import { Link } from "react-router-dom";
import AuthCard from "../Card";
import "./styles.scss";
import {useForm} from 'react-hook-form';

type FormData={
  email:string;
  password:string;
}

const Login = () => {
  const{register,handleSubmit}=useForm<FormData>();

  const onSubmit=(data:FormData)=>{
    console.log(data)
  }

  return (
    <AuthCard title="login">
      <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="form-control input-base margin-bottom-30"
          placeholder="Email"
          name="email"
          ref={register}
        />
        <input type="password"
         className="form-control"
          placeholder="Senha"
          name="password"
          ref={register}
          />
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha?
        </Link>
        <div className="login-submmit">
          <ButtonIcon text="LOGAR" />
        </div>
        <div className="text-center">
        <span className="not-registered">Não tem Cadastro?</span>
        <Link to="/admin/auth/register" className="login-link-register">Cadastrar</Link>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
