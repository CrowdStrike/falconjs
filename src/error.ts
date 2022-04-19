import { MsaAPIError, MsaMetaInfo } from "./models";
import { ResponseError } from "./runtime";

interface errorJson {
    errors: Array<MsaAPIError>;
    meta: MsaMetaInfo;
}

class FalconError {
    public response: Response;
    json: Promise<errorJson>;

    private body: errorJson | null = null;

    constructor(input: Response | ResponseError) {
        if (input instanceof ResponseError) {
            this.response = input.response;
        } else {
            this.response = input;
        }
        this.json = this.response.json();
    }

    async text(): Promise<string> {
        return this.json
            .then((j) => {
                return j.errors[0].message;
            })
            .catch((e) => {
                return "Cannot parse json from Falcon API response: " + e + " " + this.fallbackText();
            });
    }

    private fallbackText(): string {
        return "Falcon API returned: " + this.response.status + " " + this.response.statusText + " on " + this.response.url;
    }
}

export async function FalconErrorExplain(err: Response): Promise<string> {
    return await new FalconError(err).text();
}
