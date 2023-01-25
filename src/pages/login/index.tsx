import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../../contexts/contextlogin";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm({});

  const { loginApp }: any = useContext(LoginContext);
  interface idataLogin {
    email: string;
    password: string;
  }

  const submit: any = (data: idataLogin) => {
    loginApp(data);
  };

  return (
    <StyledLogin>
      <form action="" onSubmit={handleSubmit(submit)} noValidate>
        <div className="inputs-container">
          <input
            type="email"
            placeholder="Informe seu email"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Insira a sua senha"
            {...register("password")}
          />
        </div>
        <div className="button-container">
          <button className="button-send">Enviar</button>
          <p className="redirect-container">
            Ainda não poossui uma conta?
            <span className="redirect-link">
              <Link to={"/register"}>Cadastre-se</Link>
            </span>
          </p>
        </div>
      </form>
    </StyledLogin>
  );
};
