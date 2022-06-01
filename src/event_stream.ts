import { MainAvailableStreamV2 } from "./models";
import * as runtime from "./runtime";

type EventStreamCallback = (a: object) => void;

export class EventStream {
    constructor(private configuration: runtime.Configuration, private appName: string, private resource: MainAvailableStreamV2) {}

    async process(callback: EventStreamCallback, offset?: number) {
        let url = this.resource.dataFeedURL;
        if (offset && offset != 0) {
            url += "&offset=" + offset;
        }

        const headerParameters: runtime.HTTPHeaders = {
            Accept: "application/json",
            Connection: "Keep-Alive",
            Date: new Date().toISOString(),
            Authorization: "Token " + this.resource.sessionToken.token,
        };

        (this.configuration.fetchApi || fetch)(url, { headers: headerParameters })
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new runtime.ResponseError(response, "Response returned an error code");
                }
                if (!response.body) {
                    throw new runtime.ResponseError(response, "HTTP Body missing");
                }
                this.refreshActiveSessionWorker();
                return response.body;
            })
            .then((res: any) => {
                if (res.getReader) {
                    // We run inside a browser
                    console.log("TODO: figure this out");
                    //const reader = res.getReader();
                    //while (true) {
                    //  const { value, done } = await reader.read();
                    //  if (done) break;
                    //  callback(value);
                    //}
                    // or
                    //for await (const chunk of res.getIterator()) {
                    // callback(chunk)
                    //}
                } else if (res.on) {
                    // We run under a node
                    let buffer = "";
                    res.on("readable", () => {
                        let chunk;
                        while (null !== (chunk = res.read())) {
                            buffer += chunk.toString();
                            let delimiter;
                            while (-1 !== (delimiter = buffer.indexOf("\n"))) {
                                const objectString = buffer.substring(0, delimiter);
                                buffer = buffer.substring(delimiter + 1);
                                if (objectString.trim() == "") continue;
                                callback(JSON.parse(objectString));
                            }
                        }
                    });
                }
            });
    }

    private async refreshActiveSessionWorker() {
        console.log("TODO: implement stream refresh");
        console.log(this.resource);
    }
}
