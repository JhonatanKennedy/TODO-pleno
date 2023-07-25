export interface AdapterClientInterface {
  getApi(url: string): Promise<unknown>;
  postApi(url: string, body: unknown): Promise<unknown>;
  putApi(url: string, body: unknown): Promise<unknown>;
  deleteApi(url: string): Promise<unknown>;
}
