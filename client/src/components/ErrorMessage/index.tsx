import { IconError } from "@/components/icons";

type Props = { message: string };

function ErrorMessage({ message }: Props) {
  return (
    <div className="w-full h-max px-2 flex items-center justify-start gap-1 text-error">
      <IconError className="w-max text-lg" />
      <span className="text-sm font-normal">{message}</span>
    </div>
  );
}

export default ErrorMessage;
