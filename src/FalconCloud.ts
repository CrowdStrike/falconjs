type CloudUs1 = "us-1";
type CloudUs2 = "us-2";
type CloudEu1 = "eu-1";
type CloudUSGov1 = "us-gov-1";

export type FalconCloud = CloudUs1 | CloudUs2 | CloudEu1 | CloudUsGov1;

const CloudHost = {
    "us-1": "api.crowdstrike.com",
    "us-2": "api.us-2.crowdstrike.com",
    "eu-1": "api.eu-1.crowdstrike.com",
    "us-gov-1": "api.laggar.gcw.crowdstrike.com",
};

export function CloudBasePath(cloud: FalconCloud): string {
    return "https://" + CloudHost[cloud];
}
