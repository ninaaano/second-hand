export class ApiError extends Error {
  name: 'HttpError';
  status: number;
  request: Request | undefined;
  response?: Response;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'HttpError';
    this.status = statusCode;
  }
}
