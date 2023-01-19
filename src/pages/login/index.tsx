import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../../contexts/contextlogin";

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
        <button>Enviar</button>
      </form>
    </StyledLogin>
  );
};
