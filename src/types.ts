import { ExecException } from 'child_process';

export interface ILogger {
    log: (message: any) => void;
    logVerbose: (message: any) => void;
}

export interface IExecuteResult {
    error: ExecException;
    combinedOut: string;
}
