import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatus extends Error {
  status?: number;
}

export const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR]: ${message} - Status Code: ${statusCode}`);

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};
