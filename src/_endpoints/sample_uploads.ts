/**
 * contains all method definitions for API: sample uploads
 * consumed and interpreted by Falcon.command(...)
 */
export const _sample_uploads_endpoints: Array<any> = [
    [
        "ArchiveListV1",
        "GET",
        "/archives/entities/archive-files/v1",
        "Retrieves the archives files in chunks.",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The archive SHA256.",
                name: "id",
                in: "query",
                required: 1,
            },
            {
                type: "integer",
                default: 100,
                description: "Max number of files to retrieve.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "Offset from where to get files.",
                name: "offset",
                in: "query",
            },
        ],
    ],
    [
        "ArchiveGetV1",
        "GET",
        "/archives/entities/archives/v1",
        "Retrieves the archives upload operation statuses. Status `done` means that archive was processed successfully. Status `error` means that archive was not processed successfully.",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The archive SHA256.",
                name: "id",
                in: "query",
                required: 1,
            },
            {
                type: "boolean",
                default: 0,
                description: "If `true` includes processed archive files in response.",
                name: "include_files",
                in: "query",
            },
        ],
    ],
    [
        "ArchiveUploadV1",
        "POST",
        "/archives/entities/archives/v1",
        "Uploads an archive and extracts files list from it. Operation is asynchronous use the ListArchivesV1 operation to check the status. After uploading, use the ExtractionCreateV1 operation to copy the file to internal storage making it available for content analysis. This method is deprecated in favor of ArchiveUploadV2.",
        "sample_uploads",
        [
            {
                description: "Content of the uploaded archive in binary format. Max file size: 100 MB.\n\nAccepted file formats:\n\n- Portable executables: `.zip`, `.7z`.",
                name: "body",
                in: "body",
                required: 1,
            },
            {
                type: "string",
                description: "Name of the archive.",
                name: "name",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Archive password.",
                name: "password",
                in: "query",
            },
            {
                type: "boolean",
                default: 1,
                description:
                    "Defines visibility of this file, either via the API or the Falcon console. - `true`: File is only shown to users within your customer account - `false`: File can be seen by other CrowdStrike customers.  Default: `true`.",
                name: "is_confidential",
                in: "query",
            },
            {
                type: "string",
                description: "A descriptive comment to identify the file for other users.",
                name: "comment",
                in: "query",
            },
        ],
    ],
    [
        "ArchiveDeleteV1",
        "DELETE",
        "/archives/entities/archives/v1",
        "Delete an archive that was uploaded previously",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The archive SHA256.",
                name: "id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "ArchiveUploadV2",
        "POST",
        "/archives/entities/archives/v2",
        "Uploads an archive and extracts files list from it. Operation is asynchronous use `/archives/entities/archives/v1` to check the status. After uploading, use `/archives/entities/extractions/v1` to copy the file to internal storage making it available for content analysis.",
        "sample_uploads",
        [
            {
                type: "file",
                description: "Content of the uploaded archive. For example, use `--form file=@$FILE_PATH` when using cURL.",
                name: "file",
                in: "formData",
                required: 1,
            },
            {
                type: "string",
                description: "Archive password. For example, use `--form password=` when using cURL.",
                name: "password",
                in: "formData",
            },
            {
                type: "string",
                description: "Name of the archive. For example, use `--form name=` when using cURL.",
                name: "name",
                in: "formData",
                required: 1,
            },
            {
                type: "boolean",
                default: 1,
                description:
                    "Defines visibility of this file in Falcon MalQuery, either via the API or the Falcon console. For example, use `--form is_confidential=` when using cURL.\n\n- `true`: File is only shown to users within your customer account\n- `false`: File can be seen by other CrowdStrike customers \n\nDefault: `true`.",
                name: "is_confidential",
                in: "formData",
            },
            {
                type: "string",
                description: "A descriptive comment to identify the file for other users. For example, use `--form comment=` when using cURL.",
                name: "comment",
                in: "formData",
            },
        ],
    ],
    [
        "ExtractionListV1",
        "GET",
        "/archives/entities/extraction-files/v1",
        "Retrieves the files extractions in chunks. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The extraction operation ID.",
                name: "id",
                in: "query",
                required: 1,
            },
            {
                type: "integer",
                default: 0,
                description: "Max number of file extractions to retrieve.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "Offset from where to get file extractions.",
                name: "offset",
                in: "query",
            },
        ],
    ],
    [
        "ExtractionGetV1",
        "GET",
        "/archives/entities/extractions/v1",
        "Retrieves the files extraction operation statuses. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The extraction operation ID.",
                name: "id",
                in: "query",
                required: 1,
            },
            {
                type: "boolean",
                default: 0,
                description: "If `true` includes processed archive files in response.",
                name: "include_files",
                in: "query",
            },
        ],
    ],
    [
        "ExtractionCreateV1",
        "POST",
        "/archives/entities/extractions/v1",
        "Extracts files from an uploaded archive and copies them to internal storage making it available for content analysis.",
        "sample_uploads",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "GetSampleV3",
        "GET",
        "/samples/entities/samples/v3",
        "Retrieves the file associated with the given ID (SHA256)",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The file SHA256.",
                name: "ids",
                in: "query",
                required: 1,
            },
            {
                type: "boolean",
                default: 0,
                description: "Flag whether the sample should be zipped and password protected with pass='infected'",
                name: "password_protected",
                in: "query",
            },
        ],
    ],
    [
        "UploadSampleV3",
        "POST",
        "/samples/entities/samples/v3",
        "Upload a file for further cloud analysis. After uploading, call the specific analysis API endpoint.",
        "sample_uploads",
        [
            {
                description:
                    "Content of the uploaded sample in binary format. For example, use `--data-binary @$FILE_PATH` when using cURL. Max file size: 100 MB.\n\nAccepted file formats:\n\n- Portable executables: `.exe`, `.scr`, `.pif`, `.dll`, `.com`, `.cpl`, etc.\n- Office documents: `.doc`, `.docx`, `.ppt`, `.pps`, `.pptx`, `.ppsx`, `.xls`, `.xlsx`, `.rtf`, `.pub`\n- PDF\n- APK\n- Executable JAR\n- Windows script component: `.sct`\n- Windows shortcut: `.lnk`\n- Windows help: `.chm`\n- HTML application: `.hta`\n- Windows script file: `.wsf`\n- Javascript: `.js`\n- Visual Basic: `.vbs`,  `.vbe`\n- Shockwave Flash: `.swf`\n- Perl: `.pl`\n- Powershell: `.ps1`, `.psd1`, `.psm1`\n- Scalable vector graphics: `.svg`\n- Python: `.py`\n- Linux ELF executables\n- Email files: MIME RFC 822 `.eml`, Outlook `.msg`.",
                name: "body",
                in: "body",
                required: 1,
            },
            {
                type: "file",
                description: "The binary file.",
                name: "upfile",
                in: "formData",
                required: 1,
            },
            {
                type: "string",
                description: "Name of the file.",
                name: "file_name",
                in: "formData",
                required: 1,
            },
            {
                type: "string",
                description: "A descriptive comment to identify the file for other users.",
                name: "comment",
                in: "formData",
            },
            {
                type: "boolean",
                default: 1,
                description:
                    "Defines visibility of this file in Falcon MalQuery, either via the API or the Falcon console.\n\n- `true`: File is only shown to users within your customer account\n- `false`: File can be seen by other CrowdStrike customers \n\nDefault: `true`.",
                name: "is_confidential",
                in: "formData",
            },
        ],
    ],
    [
        "DeleteSampleV3",
        "DELETE",
        "/samples/entities/samples/v3",
        "Removes a sample, including file, meta and submissions from the collection",
        "sample_uploads",
        [
            {
                type: "string",
                description: "The file SHA256.",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
];
