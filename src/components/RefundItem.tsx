import type { LucideIcon } from "lucide-react";

export type RefundItemProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  categoryImg: LucideIcon;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps;
};

export function RefundItem({ data, ...rest }: Props) {
  const Icon = data.categoryImg;

  return (
    <a
      className="flex items-center gap-3 rounded-lg hover:bg-green-100/15 cursor-pointer p-2"
      {...rest}
    >
      <div className="inline-flex bg-green-100 rounded-full p-1">
        <Icon className="text-zinc-100" />
      </div>

      <div className="flex flex-col flex-1">
        <strong className="flex-1 text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.category}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount}
      </span>
    </a>
  );
}
