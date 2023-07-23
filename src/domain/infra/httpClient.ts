export default interface HttpClient<T> {
  get(url: string): Promise<T>;
  post(url: string, body: T): Promise<T>;
  put(url: string, body: T): Promise<T>;
  delete(url: string): Promise<T>;
}
