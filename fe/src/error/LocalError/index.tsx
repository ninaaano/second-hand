export class LocalError extends Error {
  name: 'LocalError';
  request: Request | undefined;
  response?: Response;

  constructor(message: string) {
    super(message);
    this.name = 'LocalError';
  }
}
