import { CircleAlert } from "lucide-react";
import { useRouteError } from "react-router-dom";

type Error = {
  status?: number;
  statusText?: string;
  [content: string]: unknown;
};

const ErrorElement = () => {
  const error = useRouteError() as Error;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center">
      <CircleAlert size={72} />
      <h1 className="text-3xl text-accent-yellow font-bold">
        Something went wrong!
      </h1>
      <p className="text-xl text-white">{error.statusText || error.status}</p>
    </div>
  );
};

export default ErrorElement;
