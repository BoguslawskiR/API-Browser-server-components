import React from "react";
import { Call } from "../data/types/config";
import Parameter from "./Parameter";
import Response from './Response';

interface Props {
  method: string;
  data: Call;
}

export default function Method({ method, data }: Props) {
  return <div className="flex flex-col">
    <h5 className="text-xl font-semibold">{method}</h5>
    <div className="flex flex-col pl-4">
      <span className="text-md font-semibold">Responses</span>
      <div className="flex flex-col pl-4">
        {Object.entries(data.responses).map(([responseStatus, statusData]) => <Response key={responseStatus} data={statusData} response={responseStatus} />)}
      </div>
    </div>
    <div className="flex flex-col pl-4">
      <span className="text-md font-semibold">Parameters</span>
      <div className="flex flex-col gap-3">
        {data.parameters.map((parameter) => <Parameter data={parameter} key={parameter.name} />)}
      </div>
    </div>
  </div>
};