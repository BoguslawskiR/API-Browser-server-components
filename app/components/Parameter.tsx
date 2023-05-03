import { Parameter } from "../data/types/config";

interface Props {
  data: Parameter;
}

export default function Parameter({ data }: Props) {
  return <div className="pl-4 text-sm flex flex-col">
    <span>Name: {data.name}</span>
    <span>In: {data.in}</span>
    <span>Required: {String(data.required)}</span>
    <span>Description: {data.description}</span>
  </div>
};