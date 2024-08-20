import { Configuration, FetchAPI } from "./runtime";
import { EventStream } from "./event_stream";
import { FalconCloud, CloudBasePath } from "./FalconCloud";
import { OAuth2, UserAgent } from "./middleware";
import {
    AlertsApi,
    ApiIntegrationsApi,
    AspmApi,
    CertificateBasedExclusionsApi,
    CloudConnectAwsApi,
    CloudSnapshotsApi,
    ComplianceAssessmentsApi,
    ConfigurationAssessmentApi,
    ConfigurationAssessmentEvaluationLogicApi,
    ContainerAlertsApi,
    ContainerDetectionsApi,
    ContainerImagesApi,
    ContainerPackagesApi,
    ContainerVulnerabilitiesApi,
    CspgIacapiApi,
    CspmRegistrationApi,
    CustomIoaApi,
    CustomStorageApi,
    D4cRegistrationApi,
    DatascannerApi,
    DeliverySettingsApi,
    DetectsApi,
    DeviceControlPoliciesApi,
    DiscoverApi,
    DiscoverIotApi,
    DriftIndicatorsApi,
    EventSchemaApi,
    EventStreamsApi,
    ExposureManagementApi,
    FalconCompleteDashboardApi,
    FalconContainerApi,
    FalconContainerCliApi,
    FalconContainerImageApi,
    FalconxSandboxApi,
    FieldSchemaApi,
    FilevantageApi,
    FirewallManagementApi,
    FirewallPoliciesApi,
    FoundryLogscaleApi,
    HandleApi,
    HostGroupApi,
    HostMigrationApi,
    HostsApi,
    HumioAuthProxyApi,
    IdentityEntitiesApi,
    IdentityProtectionApi,
    ImageAssessmentPoliciesApi,
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
    RealTimeResponseAdminApi,
    RealTimeResponseApi,
    RealTimeResponseAuditApi,
    ReconApi,
    ReportExecutionsApi,
    ResponsePoliciesApi,
    RuntimeDetectionsApi,
    SampleUploadsApi,
    ScheduledReportsApi,
    SensorDownloadApi,
    SensorUpdatePoliciesApi,
    SensorVisibilityExclusionsApi,
    SpotlightEvaluationLogicApi,
    SpotlightVulnerabilitiesApi,
    TailoredIntelligenceApi,
    ThreatgraphApi,
    UnidentifiedContainersApi,
    UserManagementApi,
    WorkflowsApi,
    ZeroTrustAssessmentApi
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

    /** (optional) Member CID (MSSP targetting). Please provide memberCid only if your clientId/clientSecret key pair
        has access to multiple CID environments. */
    memberCid?: string;
}

export class FalconClient {
    alerts: AlertsApi;
    apiIntegrations: ApiIntegrationsApi;
    aspm: AspmApi;
    certificateBasedExclusions: CertificateBasedExclusionsApi;
    cloudConnectAws: CloudConnectAwsApi;
    cloudSnapshots: CloudSnapshotsApi;
    complianceAssessments: ComplianceAssessmentsApi;
    configurationAssessment: ConfigurationAssessmentApi;
    configurationAssessmentEvaluationLogic: ConfigurationAssessmentEvaluationLogicApi;
    containerAlerts: ContainerAlertsApi;
    containerDetections: ContainerDetectionsApi;
    containerImages: ContainerImagesApi;
    containerPackages: ContainerPackagesApi;
    containerVulnerabilities: ContainerVulnerabilitiesApi;
    cspgIacapi: CspgIacapiApi;
    cspmRegistration: CspmRegistrationApi;
    customIoa: CustomIoaApi;
    customStorage: CustomStorageApi;
    d4cRegistration: D4cRegistrationApi;
    datascanner: DatascannerApi;
    deliverySettings: DeliverySettingsApi;
    detects: DetectsApi;
    deviceControlPolicies: DeviceControlPoliciesApi;
    discover: DiscoverApi;
    discoverIot: DiscoverIotApi;
    driftIndicators: DriftIndicatorsApi;
    eventSchema: EventSchemaApi;
    eventStreams: EventStreamsApi;
    exposureManagement: ExposureManagementApi;
    falconCompleteDashboard: FalconCompleteDashboardApi;
    falconContainer: FalconContainerApi;
    falconContainerCli: FalconContainerCliApi;
    falconContainerImage: FalconContainerImageApi;
    falconxSandbox: FalconxSandboxApi;
    fieldSchema: FieldSchemaApi;
    filevantage: FilevantageApi;
    firewallManagement: FirewallManagementApi;
    firewallPolicies: FirewallPoliciesApi;
    foundryLogscale: FoundryLogscaleApi;
    handle: HandleApi;
    hostGroup: HostGroupApi;
    hostMigration: HostMigrationApi;
    hosts: HostsApi;
    humioAuthProxy: HumioAuthProxyApi;
    identityEntities: IdentityEntitiesApi;
    identityProtection: IdentityProtectionApi;
    imageAssessmentPolicies: ImageAssessmentPoliciesApi;
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
    realTimeResponseAdmin: RealTimeResponseAdminApi;
    realTimeResponse: RealTimeResponseApi;
    realTimeResponseAudit: RealTimeResponseAuditApi;
    recon: ReconApi;
    reportExecutions: ReportExecutionsApi;
    responsePolicies: ResponsePoliciesApi;
    runtimeDetections: RuntimeDetectionsApi;
    sampleUploads: SampleUploadsApi;
    scheduledReports: ScheduledReportsApi;
    sensorDownload: SensorDownloadApi;
    sensorUpdatePolicies: SensorUpdatePoliciesApi;
    sensorVisibilityExclusions: SensorVisibilityExclusionsApi;
    spotlightEvaluationLogic: SpotlightEvaluationLogicApi;
    spotlightVulnerabilities: SpotlightVulnerabilitiesApi;
    tailoredIntelligence: TailoredIntelligenceApi;
    threatgraph: ThreatgraphApi;
    unidentifiedContainers: UnidentifiedContainersApi;
    userManagement: UserManagementApi;
    workflows: WorkflowsApi;
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
        this.apiIntegrations = new ApiIntegrationsApi(this.config);
        this.aspm = new AspmApi(this.config);
        this.certificateBasedExclusions = new CertificateBasedExclusionsApi(this.config);
        this.cloudConnectAws = new CloudConnectAwsApi(this.config);
        this.cloudSnapshots = new CloudSnapshotsApi(this.config);
        this.complianceAssessments = new ComplianceAssessmentsApi(this.config);
        this.configurationAssessment = new ConfigurationAssessmentApi(this.config);
        this.configurationAssessmentEvaluationLogic = new ConfigurationAssessmentEvaluationLogicApi(this.config);
        this.containerAlerts = new ContainerAlertsApi(this.config);
        this.containerDetections = new ContainerDetectionsApi(this.config);
        this.containerImages = new ContainerImagesApi(this.config);
        this.containerPackages = new ContainerPackagesApi(this.config);
        this.containerVulnerabilities = new ContainerVulnerabilitiesApi(this.config);
        this.cspgIacapi = new CspgIacapiApi(this.config);
        this.cspmRegistration = new CspmRegistrationApi(this.config);
        this.customIoa = new CustomIoaApi(this.config);
        this.customStorage = new CustomStorageApi(this.config);
        this.d4cRegistration = new D4cRegistrationApi(this.config);
        this.datascanner = new DatascannerApi(this.config);
        this.deliverySettings = new DeliverySettingsApi(this.config);
        this.detects = new DetectsApi(this.config);
        this.deviceControlPolicies = new DeviceControlPoliciesApi(this.config);
        this.discover = new DiscoverApi(this.config);
        this.discoverIot = new DiscoverIotApi(this.config);
        this.driftIndicators = new DriftIndicatorsApi(this.config);
        this.eventSchema = new EventSchemaApi(this.config);
        this.eventStreams = new EventStreamsApi(this.config);
        this.exposureManagement = new ExposureManagementApi(this.config);
        this.falconCompleteDashboard = new FalconCompleteDashboardApi(this.config);
        this.falconContainer = new FalconContainerApi(this.config);
        this.falconContainerCli = new FalconContainerCliApi(this.config);
        this.falconContainerImage = new FalconContainerImageApi(this.config);
        this.falconxSandbox = new FalconxSandboxApi(this.config);
        this.fieldSchema = new FieldSchemaApi(this.config);
        this.filevantage = new FilevantageApi(this.config);
        this.firewallManagement = new FirewallManagementApi(this.config);
        this.firewallPolicies = new FirewallPoliciesApi(this.config);
        this.foundryLogscale = new FoundryLogscaleApi(this.config);
        this.handle = new HandleApi(this.config);
        this.hostGroup = new HostGroupApi(this.config);
        this.hostMigration = new HostMigrationApi(this.config);
        this.hosts = new HostsApi(this.config);
        this.humioAuthProxy = new HumioAuthProxyApi(this.config);
        this.identityEntities = new IdentityEntitiesApi(this.config);
        this.identityProtection = new IdentityProtectionApi(this.config);
        this.imageAssessmentPolicies = new ImageAssessmentPoliciesApi(this.config);
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
        this.realTimeResponseAdmin = new RealTimeResponseAdminApi(this.config);
        this.realTimeResponse = new RealTimeResponseApi(this.config);
        this.realTimeResponseAudit = new RealTimeResponseAuditApi(this.config);
        this.recon = new ReconApi(this.config);
        this.reportExecutions = new ReportExecutionsApi(this.config);
        this.responsePolicies = new ResponsePoliciesApi(this.config);
        this.runtimeDetections = new RuntimeDetectionsApi(this.config);
        this.sampleUploads = new SampleUploadsApi(this.config);
        this.scheduledReports = new ScheduledReportsApi(this.config);
        this.sensorDownload = new SensorDownloadApi(this.config);
        this.sensorUpdatePolicies = new SensorUpdatePoliciesApi(this.config);
        this.sensorVisibilityExclusions = new SensorVisibilityExclusionsApi(this.config);
        this.spotlightEvaluationLogic = new SpotlightEvaluationLogicApi(this.config);
        this.spotlightVulnerabilities = new SpotlightVulnerabilitiesApi(this.config);
        this.tailoredIntelligence = new TailoredIntelligenceApi(this.config);
        this.threatgraph = new ThreatgraphApi(this.config);
        this.unidentifiedContainers = new UnidentifiedContainersApi(this.config);
        this.userManagement = new UserManagementApi(this.config);
        this.workflows = new WorkflowsApi(this.config);
        this.zeroTrustAssessment = new ZeroTrustAssessmentApi(this.config);
    }

    async availableEventStreams(appName: string): Promise<EventStream[]> {
        return this.eventStreams.listAvailableStreamsOAuth2(appName).then((value) => {
            return value.resources.map((resource) => new EventStream(this.config, appName, resource));
        });
    }
}
