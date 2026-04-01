import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <div className="flex justify-center items-center">
        <a
          href="/signup"
          className="text-sm font-semibold text-gray-100 mt-6 mb-4 text-center hover:text-green-800 transition ease-linear"
        >
          Criar conta
        </a>
      </div>
    </form>
  );
}
