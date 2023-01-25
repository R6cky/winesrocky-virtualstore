import { StyledRegister } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/contextregister";
import { Link } from "react-router-dom";

export const Register = () => {
  interface iDataRegister {
    email: string;
    password: string;
    name: string;
    lastName: string;
  }

  const { register, handleSubmit }: any = useForm({});

  const { registerApp }: any = useContext(RegisterContext);

  const submit: any = (data: iDataRegister) => {
    registerApp(data);
  };

  return (
    <StyledRegister>
      <form action="" onSubmit={handleSubmit(submit)} noValidate>
        <div className="inputs-container">
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Digite aqui seu sobrenome"
            {...register("lastName")}
          />
          <input
            type="email"
            placeholder="Digite aqui o seu melhor e-mail"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Digite aqui a sua senha"
            {...register("password")}
          />
        </div>
        <div className="button-container">
          <button className="button-send">Cadastrar</button>
          <p className="redirect-container">
            Já poossui uma conta?
            <span className="redirect-link">
              <Link to={"/login"}>Fazer login</Link>
            </span>
          </p>
        </div>
      </form>
    </StyledRegister>
  );
};
