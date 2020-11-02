import ButtonIcon from "core/components/ButtonIcon";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthCard from "../Card";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { makeLogin } from "core/utils/request";
import { SaveSessionData } from "core/utils/auth";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const history=useHistory();

  const onSubmit = (data: FormData) => {
    console.log(data);
    makeLogin(data)
      .then(response => {
        setHasError(false);
        SaveSessionData(response.data);
        history.push('/admin')

      })
      .catch(()=> setHasError(true));
  };

  return (
    <AuthCard title="login">
      {hasError && (
        <div className="alert alert-danger mt-5">Usuário inválido!</div>
      )}
      <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="form-control input-base margin-bottom-30"
          placeholder="Email"
          name="username"
          ref={register({required:true})}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Senha"
          name="password"
          ref={register({required:true})}
        />
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha?
        </Link>
        <div className="login-submmit">
          <ButtonIcon text="LOGAR" />
        </div>
        <div className="text-center">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            Cadastrar
          </Link>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
