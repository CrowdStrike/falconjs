import { Configuration, FetchAPI } from "./runtime";
import { FalconCloud } from "./FalconCloud";
import { OAuth2, UserAgent } from "./middleware";
import {
    CloudConnectAwsApi,
    CspmRegistrationApi,
    CustomIoaApi,
    DetectsApi,
    DeviceControlPoliciesApi,
    DiscoverApi,
    EventStreamsApi,
    FalconCompleteDashboardApi,
    FalconContainerApi,
    FalconxSandboxApi,
    FilevantageApi,
    FirewallManagementApi,
    FirewallPoliciesApi,
    HostGroupApi,
    HostsApi,
    IdentityProtectionApi,
    IncidentsApi,
    InstallationTokensApi,
    IntelApi,
    IoaExclusionsApi,
    IocApi,
    IocsApi,
    KubernetesProtectionApi,
    MalqueryApi,
    MessageCenterApi,
    MlExclusionsApi,
    MsspApi,
    Oauth2Api,
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
    SpotlightVulnerabilitiesApi,
    UserManagementApi,
    ZeroTrustAssessmentApi,
} from "./apis";

export interface FalconClientOptions {
    /** override for fetch implementation (on node use node-fetch or cross-fetch) */
    fetchApi?: FetchAPI;

    /** Select Falcon Cloud for connection */
    cloud: FalconCloud;

    /** Client API credentials: ClientID */
    clientId: string;

    /** Client API credentials: ClientID */
    clientSecret: string;
}

export class FalconClient {
    cloudConnectAws: CloudConnectAwsApi;
    cspmRegistration: CspmRegistrationApi;
    customIoa: CustomIoaApi;
    detects: DetectsApi;
    deviceControlPolicies: DeviceControlPoliciesApi;
    discover: DiscoverApi;
    eventStreams: EventStreamsApi;
    falconCompleteDashboard: FalconCompleteDashboardApi;
    falconContainer: FalconContainerApi;
    falconxSandbox: FalconxSandboxApi;
    filevantage: FilevantageApi;
    firewallManagement: FirewallManagementApi;
    firewallPolicies: FirewallPoliciesApi;
    hostGroup: HostGroupApi;
    hosts: HostsApi;
    identityProtection: IdentityProtectionApi;
    incidents: IncidentsApi;
    installationTokens: InstallationTokensApi;
    intel: IntelApi;
    ioaExclusions: IoaExclusionsApi;
    ioc: IocApi;
    iocs: IocsApi;
    kubernetesProtection: KubernetesProtectionApi;
    malquery: MalqueryApi;
    messageCenter: MessageCenterApi;
    mlExclusions: MlExclusionsApi;
    mssp: MsspApi;
    oauth2: Oauth2Api;
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
    spotlightVulnerabilities: SpotlightVulnerabilitiesApi;
    userManagement: UserManagementApi;
    zeroTrustAssessment: ZeroTrustAssessmentApi;

    constructor(private options: FalconClientOptions) {
        const oauth2 = new OAuth2({
            fetchApi: options.fetchApi || fetch,
            cloud: options.cloud,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
        const config = new Configuration({
            fetchApi: options.fetchApi,
            accessToken: oauth2.accessToken.bind(oauth2),
            middleware: [new UserAgent()],
        });
        this.cloudConnectAws = new CloudConnectAwsApi(config);
        this.cspmRegistration = new CspmRegistrationApi(config);
        this.customIoa = new CustomIoaApi(config);
        this.detects = new DetectsApi(config);
        this.deviceControlPolicies = new DeviceControlPoliciesApi(config);
        this.discover = new DiscoverApi(config);
        this.eventStreams = new EventStreamsApi(config);
        this.falconCompleteDashboard = new FalconCompleteDashboardApi(config);
        this.falconContainer = new FalconContainerApi(config);
        this.falconxSandbox = new FalconxSandboxApi(config);
        this.filevantage = new FilevantageApi(config);
        this.firewallManagement = new FirewallManagementApi(config);
        this.firewallPolicies = new FirewallPoliciesApi(config);
        this.hostGroup = new HostGroupApi(config);
        this.hosts = new HostsApi(config);
        this.identityProtection = new IdentityProtectionApi(config);
        this.incidents = new IncidentsApi(config);
        this.installationTokens = new InstallationTokensApi(config);
        this.intel = new IntelApi(config);
        this.ioaExclusions = new IoaExclusionsApi(config);
        this.ioc = new IocApi(config);
        this.iocs = new IocsApi(config);
        this.kubernetesProtection = new KubernetesProtectionApi(config);
        this.malquery = new MalqueryApi(config);
        this.messageCenter = new MessageCenterApi(config);
        this.mlExclusions = new MlExclusionsApi(config);
        this.mssp = new MsspApi(config);
        this.oauth2 = new Oauth2Api(config);
        this.overwatchDashboard = new OverwatchDashboardApi(config);
        this.preventionPolicies = new PreventionPoliciesApi(config);
        this.quarantine = new QuarantineApi(config);
        this.quickScan = new QuickScanApi(config);
        this.realTimeResponse = new RealTimeResponseApi(config);
        this.realTimeResponseAdmin = new RealTimeResponseAdminApi(config);
        this.recon = new ReconApi(config);
        this.reportExecutions = new ReportExecutionsApi(config);
        this.responsePolicies = new ResponsePoliciesApi(config);
        this.sampleUploads = new SampleUploadsApi(config);
        this.scheduledReports = new ScheduledReportsApi(config);
        this.sensorDownload = new SensorDownloadApi(config);
        this.sensorUpdatePolicies = new SensorUpdatePoliciesApi(config);
        this.sensorVisibilityExclusions = new SensorVisibilityExclusionsApi(config);
        this.spotlightVulnerabilities = new SpotlightVulnerabilitiesApi(config);
        this.userManagement = new UserManagementApi(config);
        this.zeroTrustAssessment = new ZeroTrustAssessmentApi(config);
    }
}
