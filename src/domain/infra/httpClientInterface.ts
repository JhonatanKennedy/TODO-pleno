export default interface HttpClientInterface {
  get(url: string): Promise<unknown>;
  post(url: string, body: unknown): Promise<unknown>;
  put(url: string, body: unknown): Promise<unknown>;
  delete(url: string): Promise<unknown>;
}
