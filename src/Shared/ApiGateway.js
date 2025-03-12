import {API_BASE} from "./config";

export default class ApiGateway {
  get = async (path) => {
    const response = await fetch(`${API_BASE}${path}`);
    return response.json();
  };
  post = async (path, payload) => {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  };
}
