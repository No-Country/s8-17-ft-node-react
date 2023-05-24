import { MdOutlineErrorOutline } from "react-icons/md";

type Props = { message: string };

function ErrorMessage({ message }: Props) {
  return (
    <span className="absolute inset-y-0 left-1 text-error text-sm font-normal">
      <MdOutlineErrorOutline />
      {message}
    </span>
  );
}

export default ErrorMessage;
