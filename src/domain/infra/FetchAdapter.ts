import HttpClient from "./httpClient";

export default class FetchAdapter implements HttpClient<T> {
  async get(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

  async post(url: string, body: T): Promise<T> {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async put(url: string, body: T): Promise<T> {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async delete(url: string): Promise<T> {
    await fetch(url, {
      method: "DELETE",
    });
  }
}
