import { FalconClient, FalconErrorExplain, DomainSensorInstallerV1 } from "./../../src";

let client: FalconClient | null = null;

module.exports = {
    onLogin: async function () {
        client = new FalconClient({
            cloud: "us-1",
            clientId: getFormField("clientId"),
            clientSecret: getFormField("clientSecret"),
        });

        await client.sensorDownload
            .getCombinedSensorInstallersByQuery()
            .catch(async function (err) {
                alert("Could not fetch: " + (await FalconErrorExplain(err)));
            })
            .then((sensors) => {
                closeForm();
                if (sensors) {
                    showSensors(sensors.resources);
                }
            });
    },
    downloadSensor: async function (id: string, name: string) {
        if (client === null) {
            return;
        }
        await client.sensorDownload
            .downloadSensorInstallerById(id)
            .catch(async function (err) {
                alert("Could not download sensor: " + (await FalconErrorExplain(err)));
            })
            .then((blob) => {
                saveAs(blob, name);
            });
    },
};

function showSensors(sensors: Array<DomainSensorInstallerV1>) {
    const heading = "<tr>" + "<th>Description</th>" + "<th>Version</th>" + "<th>OS</th>" + "<th>Download</th></tr>";

    const data = sensors
        .map((sensor) => {
            return (
                "<tr><td><div title='Released on " +
                sensor.releaseDate +
                "'>" +
                sensor.description +
                "</div></td><td>" +
                sensor.version +
                "</td><td>" +
                sensor.os +
                " " +
                sensor.osVersion +
                "</td><td><button onclick=\"sensor_download.downloadSensor('" +
                sensor.sha256 +
                "', '" +
                sensor.name +
                "');\">download&nbsp;(" +
                Math.round(sensor.fileSize / 1024 / 1024) +
                " MiB)</button>" +
                "</td></tr>"
            );
        })
        .join(" ");

    show("<table>" + heading + data + "</table>");
}

function show(html: string) {
    const main = document.getElementById("loginPopup");
    if (main != null) {
        main.innerHTML = html;
    }
}

function closeForm() {
    const login = document.getElementById("popupForm");
    if (login != null) {
        login.style.display = "none";
    }
}

function getFormField(fieldName: string): string {
    const fields = document.getElementsByName(fieldName);
    if (fields != null && fields.length == 1 && fields[0] instanceof HTMLInputElement) {
        return fields[0].value;
    }
    throw "Internal Error: cannot find input element";
}

function saveAs(blob: Blob | void, fileName: string) {
    if (blob == null) {
        return;
    }
    const url = window.URL.createObjectURL(blob);
    const anchorElem = document.createElement("a");
    anchorElem.style.display = "none";
    anchorElem.href = url;
    anchorElem.download = fileName;

    document.body.appendChild(anchorElem);
    anchorElem.click();

    document.body.removeChild(anchorElem);

    setTimeout(function () {
        window.URL.revokeObjectURL(url);
    }, 1000);
}
