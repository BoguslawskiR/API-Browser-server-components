import api from "../api"
import { ConfigResponse } from "../types/config";

const PetstoreService = {
  getConfig: async () => {
    // TODO: Add error handling
    const response = await api.get<ConfigResponse>('/v2/swagger.json');
    return response.data 
  },
  getPathConfig: async (path: string) => {
    // TODO: Add error handling
    const response = await api.get<ConfigResponse>('/v2/swagger.json');
    return response.data.paths[path];
  },
}

export default PetstoreService;