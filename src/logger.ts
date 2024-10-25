import { Colors } from './colors';
import { Styles } from './styles';

type LogLevel = 
  'INFO' | 
  'DEBUG' | 
  'WARN' | 
  'ERROR' | 
  'READY' | 
  'DATABASE' | 
  'HEARTBEAT' | 
  'SHARD' | 
  'CLUSTER' | 
  'COMMAND' | 
  'EVENT' | 
  'NOTICE' | 
  'CRITICAL' | 
  'TRACE';

export class Logger {
  private static getTimeStamp(): string {
    return new Date().toLocaleTimeString();
  }
  private static formatMessage(level: LogLevel, message: string): string {
    const timestamp = Logger.getTimeStamp();
    return `[${timestamp}] => ${level} - ${message}`;
  }

  public static log(level: LogLevel, message: string, color?: string, style?: string): void {
    const formattedMessage = Logger.formatMessage(level, message);
    const styledMessage = `${color || ''}${style || ''}${formattedMessage}${Styles.Reset}`;
    console.log(styledMessage);
  }

  public static info(message: string): void {
    Logger.log('INFO', message, Colors.Green);
  }

  public static debug(message: string): void {
    Logger.log('DEBUG', message, Colors.Blue);
  }

  public static warn(message: string): void {
    Logger.log('WARN', message, Colors.Yellow);
  }

  public static error(message: string, error?: Error): void {
    const formattedMessage = `${message}${error ? `: ${error.message}` : ''}`;
    Logger.log('ERROR', formattedMessage, Colors.Red, Styles.Bright);
    
    if (error) {
      console.error(`Stack Trace: ${error.stack}`);
    }
  }

  public static ready(message: string): void {
    Logger.log('READY', message, Colors.Green, Styles.Bright);
  }

  public static database(message: string): void {
    Logger.log('DATABASE', message, Colors.Blue);
  }

  public static heartbeat(message: string): void {
    Logger.log('HEARTBEAT', message, Colors.Magenta);
  }

  public static shard(message: string): void {
    Logger.log('SHARD', message, Colors.Cyan);
  }

  public static cluster(message: string): void {
    Logger.log('CLUSTER', message, Colors.Green);
  }

  public static command(message: string): void {
    Logger.log('COMMAND', message, Colors.Blue);
  }

  public static event(message: string): void {
    Logger.log('EVENT', message, Colors.Cyan);
  }

  public static notice(message: string): void {
    Logger.log('NOTICE', message, Colors.Blue, Styles.Bright);
  }

  public static critical(message: string): void {
    Logger.log('CRITICAL', message, Colors.Red, Styles.Bright);
  }

  public static trace(message: string): void {
    Logger.log('TRACE', message, Colors.Magenta);
  }
}
