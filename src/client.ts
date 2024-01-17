import { Configuration, FetchAPI } from "./runtime";
import { EventStream } from "./event_stream";
import { FalconCloud, CloudBasePath } from "./FalconCloud";
import { OAuth2, UserAgent } from "./middleware";
import {
    AlertsApi,
    CloudConnectAwsApi,
    CspmRegistrationApi,
    CustomIoaApi,
    DetectsApi,
    DeviceControlPoliciesApi,
    DiscoverApi,
    EventStreamsApi,
    FalconCompleteDashboardApi,
    FalconContainerApi,
    FalconContainerCliApi,
    FalconxSandboxApi,
    FilevantageApi,
    FirewallManagementApi,
    FirewallPoliciesApi,
    HostGroupApi,
    HostsApi,
    IdentityProtectionApi,
    IncidentsApi,
    InstallationTokensApi,
    InstallationTokensSettingsApi,
    IntelApi,
    IoaExclusionsApi,
    IocApi,
    IocsApi,
    KubernetesProtectionApi,
    MalqueryApi,
    MessageCenterApi,
    MlExclusionsApi,
    MobileEnrollmentApi,
    MsspApi,
    Oauth2Api,
    OdsApi,
    OverwatchDashboardApi,
    PreventionPoliciesApi,
    QuarantineApi,
    QuickScanApi,
    RealTimeResponseApi,
    RealTimeResponseAdminApi,
    ReconApi,
    ReportExecutionsApi,
    ResponsePoliciesApi,
    SampleUploadsApi,
    ScheduledReportsApi,
    SensorDownloadApi,
    SensorUpdatePoliciesApi,
    SensorVisibilityExclusionsApi,
    SpotlightEvaluationLogicApi,
    UserManagementApi,
    ZeroTrustAssessmentApi,
} from "./apis";
import { SpotlightVulnerabilitiesApi } from "./apis/SpotlightVulnerabilitiesApi";
import { D4cRegistrationApi } from "./apis/D4cRegistrationApi";
import { TailoredIntelligenceApi } from "./apis/TailoredIntelligenceApi";

export interface FalconClientOptions {
    /** override for fetch implementation (on node use node-fetch or cross-fetch) */
    fetchApi?: FetchAPI;

    /** Select Falcon Cloud for connection */
    cloud: FalconCloud;

    /** Client API credentials: ClientID */
    clientId: string;

    /** Client API credentials: ClientID */
    clientSecret: string;

    /** (optional) Member CID (MSSP targetting). Please provide memberCid only if your clientId/clientSecret key pair
        has access to multiple CID environments. */
    memberCid?: string;
}

export class FalconClient {
    alerts: AlertsApi;
    cloudConnectAws: CloudConnectAwsApi;
    cspmRegistration: CspmRegistrationApi;
    customIoa: CustomIoaApi;
    d4cRegistrationApi: D4cRegistrationApi;
    detects: DetectsApi;
    deviceControlPolicies: DeviceControlPoliciesApi;
    discover: DiscoverApi;
    eventStreams: EventStreamsApi;
    falconCompleteDashboard: FalconCompleteDashboardApi;
    falconContainer: FalconContainerApi;
    falconContainerCli: FalconContainerCliApi;
    falconxSandbox: FalconxSandboxApi;
    filevantage: FilevantageApi;
    firewallManagement: FirewallManagementApi;
    firewallPolicies: FirewallPoliciesApi;
    hostGroup: HostGroupApi;
    hosts: HostsApi;
    identityProtection: IdentityProtectionApi;
    incidents: IncidentsApi;
    installationTokens: InstallationTokensApi;
    installationTokensSettings: InstallationTokensSettingsApi;
    intel: IntelApi;
    ioaExclusions: IoaExclusionsApi;
    ioc: IocApi;
    iocs: IocsApi;
    kubernetesProtection: KubernetesProtectionApi;
    malquery: MalqueryApi;
    messageCenter: MessageCenterApi;
    mlExclusions: MlExclusionsApi;
    mobileEnrollment: MobileEnrollmentApi;
    mssp: MsspApi;
    oauth2: Oauth2Api;
    ods: OdsApi;
    overwatchDashboard: OverwatchDashboardApi;
    preventionPolicies: PreventionPoliciesApi;
    quarantine: QuarantineApi;
    quickScan: QuickScanApi;
    realTimeResponse: RealTimeResponseApi;
    realTimeResponseAdmin: RealTimeResponseAdminApi;
    recon: ReconApi;
    reportExecutions: ReportExecutionsApi;
    responsePolicies: ResponsePoliciesApi;
    sampleUploads: SampleUploadsApi;
    scheduledReports: ScheduledReportsApi;
    sensorDownload: SensorDownloadApi;
    sensorUpdatePolicies: SensorUpdatePoliciesApi;
    sensorVisibilityExclusions: SensorVisibilityExclusionsApi;
    spotlightEvaluationLogic: SpotlightEvaluationLogicApi;
    spotlightVulnerabilities: SpotlightVulnerabilitiesApi;
    tailoredIntelligenceapi: TailoredIntelligenceApi;
    userManagement: UserManagementApi;
    zeroTrustAssessment: ZeroTrustAssessmentApi;
    private config: Configuration;

    constructor(private options: FalconClientOptions) {
        const oauth2 = new OAuth2({
            fetchApi: options.fetchApi || fetch,
            cloud: options.cloud,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
            memberCid: options.memberCid,
        });
        this.config = new Configuration({
            fetchApi: options.fetchApi,
            accessToken: oauth2.accessToken.bind(oauth2),
            middleware: [new UserAgent()],
            basePath: CloudBasePath(options.cloud),
        });
        this.alerts = new AlertsApi(this.config);
        this.cloudConnectAws = new CloudConnectAwsApi(this.config);
        this.cspmRegistration = new CspmRegistrationApi(this.config);
        this.customIoa = new CustomIoaApi(this.config);
        this.d4cRegistrationApi = new D4cRegistrationApi(this.config);
        this.detects = new DetectsApi(this.config);
        this.deviceControlPolicies = new DeviceControlPoliciesApi(this.config);
        this.discover = new DiscoverApi(this.config);
        this.eventStreams = new EventStreamsApi(this.config);
        this.falconCompleteDashboard = new FalconCompleteDashboardApi(this.config);
        this.falconContainer = new FalconContainerApi(this.config);
        this.falconContainerCli = new FalconContainerCliApi(this.config);
        this.falconxSandbox = new FalconxSandboxApi(this.config);
        this.filevantage = new FilevantageApi(this.config);
        this.firewallManagement = new FirewallManagementApi(this.config);
        this.firewallPolicies = new FirewallPoliciesApi(this.config);
        this.hostGroup = new HostGroupApi(this.config);
        this.hosts = new HostsApi(this.config);
        this.identityProtection = new IdentityProtectionApi(this.config);
        this.incidents = new IncidentsApi(this.config);
        this.installationTokens = new InstallationTokensApi(this.config);
        this.installationTokensSettings = new InstallationTokensSettingsApi(this.config);
        this.intel = new IntelApi(this.config);
        this.ioaExclusions = new IoaExclusionsApi(this.config);
        this.ioc = new IocApi(this.config);
        this.iocs = new IocsApi(this.config);
        this.kubernetesProtection = new KubernetesProtectionApi(this.config);
        this.malquery = new MalqueryApi(this.config);
        this.messageCenter = new MessageCenterApi(this.config);
        this.mlExclusions = new MlExclusionsApi(this.config);
        this.mobileEnrollment = new MobileEnrollmentApi(this.config);
        this.mssp = new MsspApi(this.config);
        this.oauth2 = new Oauth2Api(this.config);
        this.ods = new OdsApi(this.config);
        this.overwatchDashboard = new OverwatchDashboardApi(this.config);
        this.preventionPolicies = new PreventionPoliciesApi(this.config);
        this.quarantine = new QuarantineApi(this.config);
        this.quickScan = new QuickScanApi(this.config);
        this.realTimeResponse = new RealTimeResponseApi(this.config);
        this.realTimeResponseAdmin = new RealTimeResponseAdminApi(this.config);
        this.recon = new ReconApi(this.config);
        this.reportExecutions = new ReportExecutionsApi(this.config);
        this.responsePolicies = new ResponsePoliciesApi(this.config);
        this.sampleUploads = new SampleUploadsApi(this.config);
        this.scheduledReports = new ScheduledReportsApi(this.config);
        this.sensorDownload = new SensorDownloadApi(this.config);
        this.sensorUpdatePolicies = new SensorUpdatePoliciesApi(this.config);
        this.sensorVisibilityExclusions = new SensorVisibilityExclusionsApi(this.config);
        this.spotlightEvaluationLogic = new SpotlightEvaluationLogicApi(this.config);
        this.spotlightVulnerabilities = new SpotlightVulnerabilitiesApi(this.config);
        this.tailoredIntelligenceapi = new TailoredIntelligenceApi(this.config);
        this.userManagement = new UserManagementApi(this.config);
        this.zeroTrustAssessment = new ZeroTrustAssessmentApi(this.config);
    }

    async availableEventStreams(appName: string): Promise<EventStream[]> {
        return this.eventStreams.listAvailableStreamsOAuth2(appName).then((value) => {
            return value.resources.map((resource) => new EventStream(this.config, appName, resource));
        });
    }
}
