import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  const { method, url, ip } = req;
  const userAgent = req.get('User-Agent') || 'Unknown';

  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        method,
        url,
        statusCode,
        duration: `${duration}ms`,
        ip,
        userAgent
      })
    );
  });

  next();
};