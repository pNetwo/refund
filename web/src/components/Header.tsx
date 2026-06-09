import { LogOut, Redo2 } from "lucide-react";

import { useAuth } from "../hooks/useAuth";

export function Header() {
  const auth = useAuth();

  return (
    <header className="w-full flex justify-between my-8">
      <div className="flex justify-center">
        <div className="flex gap-1 items-center">
          <Redo2 className="text-green-100" />
          <span className="text-green-100 font-bold text-[20px]">refund</span>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <span className="text-sm font-semibold text-gray-200">
          Olá, {auth.session?.user.name}
        </span>
        <LogOut
          onClick={auth.remove}
          className="cursor-pointer text-green-200 hover:opacity-75 transition duration-300 ease-linear"
        />
      </div>
    </header>
  );
}
