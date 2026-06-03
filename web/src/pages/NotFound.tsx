import { CircleAlert } from "lucide-react";

export function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Ops! Essa página não existe.
        </h1>
        <CircleAlert size={28} className="text-red-400" />
      </div>

      <a
        href="/"
        className="font-semibold text-center text-green-100 hover:opacity-75 transition duration-300 ease-linear"
      >
        Voltar para o início
      </a>
    </div>
  );
}
