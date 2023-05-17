declare module 'jwhisper-esm' {
    import { EventEmitter } from 'events';
    import { ServerResponse, ClientRequest } from 'http';

    class Server extends EventEmitter {
        constructor(conf: object);

        setupServices();
        start(port: number, host: string);
        unmarshall(rawData: string);
        rootEndpoint(res: ServerResponse);
        parseMsg(req: ClientRequest, res: ServerResponse);
    }

    class Client extends EventEmitter {
        [x: string]: any;
        constructor(config: object);

        getSchema();
        sendRequest(reqObj: object, done: boolean);
        parseSchema(schema: object);
    }

    export {
        Server,
        Client,
    };
}
