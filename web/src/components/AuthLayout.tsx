import { Outlet } from "react-router";

import { Redo2 } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col w-full md:max-w-115.5">
        <div className="flex items-center gap-0.5 mb-8">
          <Redo2 className="text-green-100" />
          <span className="text-green-100 font-bold text-[20px]">refund</span>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
