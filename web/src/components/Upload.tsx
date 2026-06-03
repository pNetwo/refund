import { CloudUpload } from "lucide-react";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-xxs text-gray-200 mb-2">
        Comprovante
      </legend>

      <div className="w-ful h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        <input type="file" id="upload" {...rest} className="hidden" />

        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="flex h-12 px-4 items-center bg-green-100 rounded-r-lg cursor-pointer disabled:opacity-50 hover:opacity-85 transiotion duration-300 ease-linear"
        >
          <CloudUpload className="text-white" size={24}/>
        </label>
      </div>
    </div>
  );
}
