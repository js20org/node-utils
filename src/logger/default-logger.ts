import { ILogger } from '../types';

export class DefaultLogger implements ILogger {
    private shouldLogVerbose: boolean;

    constructor(shouldLogVerbose: boolean) {
        this.shouldLogVerbose = shouldLogVerbose;
    }

    log(message: any) {
        console.log(message);
    }

    logVerbose(message: any) {
        if (this.shouldLogVerbose) {
            console.log(message);
        }
    }
}
