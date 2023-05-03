import { Response } from "../data/types/config";

interface Props {
  response: string;
  data: Response;
}

export default function Response({ response, data }: Props) {
  return <div>
    <span className="text-sm font-semibold">{response}</span>
    <p className="text-sm">{data.description}</p>
  </div>
};