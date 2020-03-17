
import { createLogger, format, transports }  from 'winston';

const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format(info => {
            info.level = info.level.toUpperCase();
            return info;
        })(),
        format.colorize(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => {
          return `${info.timestamp} - ${info.level}: ${info.message}`;
        })
      ),
    transports: [new transports.Console()]
  });
  
export = logger;