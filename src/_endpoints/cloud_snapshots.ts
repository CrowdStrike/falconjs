/**
 * contains all method definitions for API: cloud snapshots
 * consumed and interpreted by Falcon.command(...)
 */
export const _cloud_snapshots_endpoints: Array<any> = [
    [
        "CreateInventory",
        "POST",
        "/snapshots/entities/inventories/v1",
        "Create inventory from data received from snapshot",
        "inventories",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    ["GetCredentialsMixin0", "GET", "/snapshots/entities/image-registry-credentials/v1", "Gets the registry credentials", "provision", []],
    [
        "RegisterCspmSnapshotAccount",
        "POST",
        "/snapshots/entities/accounts/v1",
        "Register customer cloud account for snapshot scanning",
        "registration",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
];
