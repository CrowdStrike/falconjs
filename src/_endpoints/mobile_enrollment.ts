/**
 * contains all method definitions for API: mobile enrollment
 * consumed and interpreted by Falcon.command(...)
 */
export const _mobile_enrollment_endpoints: Array<any> = [
    [
        "RequestDeviceEnrollmentV3",
        "POST",
        "/enrollments/entities/details/v3",
        "Trigger on-boarding process for a mobile device",
        "mobile_enrollment",
        [
            {
                enum: ["enroll", "re-enroll"],
                type: "string",
                description: "Action to perform",
                name: "action_name",
                in: "query",
                allowEmptyValue: 1,
            },
            {
                type: "string",
                description: "FQL filter",
                name: "filter",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
];
