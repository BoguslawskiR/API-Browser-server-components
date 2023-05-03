type RESTCall = 'put' | 'post' | 'get' | 'patch' | 'update';

export interface Response {
  description: string;
}

export interface Parameter {
  in: 'body' | 'header';
  name: string;
  required: boolean;
  description: string;
}


export interface Call {
  responses: Record<number | 'default', Response>;
  parameters: Parameter[];
}

export type Path = Record<RESTCall, Call>;

interface Info {
  description: string;
}

export interface ConfigResponse {
  info: Info;
  paths: Record<string, Path>;
};