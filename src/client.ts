import {
    AdmissionControlPoliciesApi,
    AlertsApi,
    ApiIntegrationsApi,
    AspmApi,
    CaoHuntingApi,
    CaseFilesApi,
    CaseManagementApi,
    CasesApi,
    CertificateBasedExclusionsApi,
    CloudAwsRegistrationApi,
    CloudAzureRegistrationApi,
    CloudConnectAwsApi,
    CloudGoogleCloudRegistrationApi,
    CloudOciRegistrationApi,
    CloudPoliciesApi,
    CloudSecurityApi,
    CloudSecurityAssetsApi,
    CloudSecurityComplianceApi,
    CloudSecurityDetectionsApi,
    CloudSnapshotsApi,
    ConfigurationAssessmentApi,
    ConfigurationAssessmentEvaluationLogicApi,
    ContainerAlertsApi,
    ContainerDetectionsApi,
    ContainerImageComplianceApi,
    ContainerImagesApi,
    ContainerPackagesApi,
    ContainerVulnerabilitiesApi,
    ContentUpdatePoliciesApi,
    CorrelationRulesAdminApi,
    CorrelationRulesApi,
    CspgIacapiApi,
    CspmRegistrationApi,
    CustomIoaApi,
    CustomStorageApi,
    D4cRegistrationApi,
    DataProtectionConfigurationApi,
    DefaultApi,
    DeliverySettingsApi,
    DeploymentsApi,
    DetectsApi,
    DeviceContentApi,
    DeviceControlPoliciesApi,
    DeviceControlWithBluetoothApi,
    DiscoverApi,
    DiscoverIotApi,
    DownloadsApiApi,
    DriftIndicatorsApi,
    EventSchemaApi,
    EventStreamsApi,
    ExecutionApi,
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
    HostGroupApi,
    HostMigrationApi,
    HostsApi,
    IdentityEntitiesApi,
    IdentityProtectionApi,
    ImageAssessmentPoliciesApi,
    IncidentsApi,
    InstallationTokensApi,
    InstallationTokensSettingsApi,
    IntelApi,
    IntelligenceFeedsApi,
    IntelligenceIndicatorGraphApi,
    IoaExclusionsApi,
    IocApi,
    IocsApi,
    ItAutomationApi,
    KubernetesContainerComplianceApi,
    KubernetesProtectionApi,
    LookupFilesApi,
    MaintenanceTokenApi,
    MalqueryApi,
    MessageCenterApi,
    MlExclusionsApi,
    MobileEnrollmentApi,
    MsspApi,
    NgsiemApi,
    Oauth2Api,
    OdsApi,
    PreventionPoliciesApi,
    QuarantineApi,
    QuickScanApi,
    QuickScanProApi,
    RealTimeResponseAdminApi,
    RealTimeResponseApi,
    RealTimeResponseAuditApi,
    ReconApi,
    ReleaseNotesApi,
    ReleasesApi,
    ReportExecutionsApi,
    ResponsePoliciesApi,
    RuntimeDetectionsApi,
    SaasSecurityApi,
    SampleUploadsApi,
    ScheduledReportsApi,
    SensorDownloadApi,
    SensorUpdatePoliciesApi,
    SensorUsageApiApi,
    SensorVisibilityExclusionsApi,
    ServerlessVulnerabilitiesApi,
    SpotlightEvaluationLogicApi,
    SpotlightSupportedEvaluationApi,
    SpotlightVulnerabilitiesApi,
    SpotlightVulnerabilityMetadataApi,
    TailoredIntelligenceApi,
    ThreatgraphApi,
    UnidentifiedContainersApi,
    UserManagementApi,
    WorkflowsApi,
    ZeroTrustAssessmentApi,
} from "./apis";
import { EventStream } from "./event_stream";
import { CloudBasePath, FalconCloud } from "./FalconCloud";
import { OAuth2, UserAgent } from "./middleware";
import { Configuration, FetchAPI } from "./runtime";

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
    admissionControlPolicies: AdmissionControlPoliciesApi;
    alerts: AlertsApi;
    apiIntegrations: ApiIntegrationsApi;
    aspm: AspmApi;
    caoHunting: CaoHuntingApi;
    caseFiles: CaseFilesApi;
    caseManagement: CaseManagementApi;
    cases: CasesApi;
    certificateBasedExclusions: CertificateBasedExclusionsApi;
    cloudAwsRegistration: CloudAwsRegistrationApi;
    cloudAzureRegistration: CloudAzureRegistrationApi;
    cloudConnectAws: CloudConnectAwsApi;
    cloudGoogleCloudRegistration: CloudGoogleCloudRegistrationApi;
    cloudOciRegistration: CloudOciRegistrationApi;
    cloudPolicies: CloudPoliciesApi;
    cloudSecurity: CloudSecurityApi;
    cloudSecurityAssets: CloudSecurityAssetsApi;
    cloudSecurityCompliance: CloudSecurityComplianceApi;
    cloudSecurityDetections: CloudSecurityDetectionsApi;
    cloudSnapshots: CloudSnapshotsApi;
    configurationAssessment: ConfigurationAssessmentApi;
    configurationAssessmentEvaluationLogic: ConfigurationAssessmentEvaluationLogicApi;
    containerAlerts: ContainerAlertsApi;
    containerDetections: ContainerDetectionsApi;
    containerImageCompliance: ContainerImageComplianceApi;
    containerImages: ContainerImagesApi;
    containerPackages: ContainerPackagesApi;
    containerVulnerabilities: ContainerVulnerabilitiesApi;
    contentUpdatePolicies: ContentUpdatePoliciesApi;
    correlationRulesAdmin: CorrelationRulesAdminApi;
    correlationRules: CorrelationRulesApi;
    cspgIacapi: CspgIacapiApi;
    cspmRegistration: CspmRegistrationApi;
    customIoa: CustomIoaApi;
    customStorage: CustomStorageApi;
    d4cRegistration: D4cRegistrationApi;
    dataProtectionConfiguration: DataProtectionConfigurationApi;
    default: DefaultApi;
    deliverySettings: DeliverySettingsApi;
    deployments: DeploymentsApi;
    detects: DetectsApi;
    deviceContent: DeviceContentApi;
    deviceControlPolicies: DeviceControlPoliciesApi;
    deviceControlWithBluetooth: DeviceControlWithBluetoothApi;
    discover: DiscoverApi;
    discoverIot: DiscoverIotApi;
    downloadsApi: DownloadsApiApi;
    driftIndicators: DriftIndicatorsApi;
    eventSchema: EventSchemaApi;
    eventStreams: EventStreamsApi;
    execution: ExecutionApi;
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
    hostGroup: HostGroupApi;
    hostMigration: HostMigrationApi;
    hosts: HostsApi;
    identityEntities: IdentityEntitiesApi;
    identityProtection: IdentityProtectionApi;
    imageAssessmentPolicies: ImageAssessmentPoliciesApi;
    incidents: IncidentsApi;
    installationTokens: InstallationTokensApi;
    installationTokensSettings: InstallationTokensSettingsApi;
    intel: IntelApi;
    intelligenceFeeds: IntelligenceFeedsApi;
    intelligenceIndicatorGraph: IntelligenceIndicatorGraphApi;
    ioaExclusions: IoaExclusionsApi;
    ioc: IocApi;
    iocs: IocsApi;
    itAutomation: ItAutomationApi;
    kubernetesContainerCompliance: KubernetesContainerComplianceApi;
    kubernetesProtection: KubernetesProtectionApi;
    lookupFiles: LookupFilesApi;
    maintenanceToken: MaintenanceTokenApi;
    malquery: MalqueryApi;
    messageCenter: MessageCenterApi;
    mlExclusions: MlExclusionsApi;
    mobileEnrollment: MobileEnrollmentApi;
    mssp: MsspApi;
    ngsiem: NgsiemApi;
    oauth2: Oauth2Api;
    ods: OdsApi;
    preventionPolicies: PreventionPoliciesApi;
    quarantine: QuarantineApi;
    quickScan: QuickScanApi;
    quickScanPro: QuickScanProApi;
    realTimeResponseAdmin: RealTimeResponseAdminApi;
    realTimeResponse: RealTimeResponseApi;
    realTimeResponseAudit: RealTimeResponseAuditApi;
    recon: ReconApi;
    releaseNotes: ReleaseNotesApi;
    releases: ReleasesApi;
    reportExecutions: ReportExecutionsApi;
    responsePolicies: ResponsePoliciesApi;
    runtimeDetections: RuntimeDetectionsApi;
    saasSecurity: SaasSecurityApi;
    sampleUploads: SampleUploadsApi;
    scheduledReports: ScheduledReportsApi;
    sensorDownload: SensorDownloadApi;
    sensorUpdatePolicies: SensorUpdatePoliciesApi;
    sensorUsageApi: SensorUsageApiApi;
    sensorVisibilityExclusions: SensorVisibilityExclusionsApi;
    serverlessVulnerabilities: ServerlessVulnerabilitiesApi;
    spotlightEvaluationLogic: SpotlightEvaluationLogicApi;
    spotlightSupportedEvaluation: SpotlightSupportedEvaluationApi;
    spotlightVulnerabilities: SpotlightVulnerabilitiesApi;
    spotlightVulnerabilityMetadata: SpotlightVulnerabilityMetadataApi;
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
        this.admissionControlPolicies = new AdmissionControlPoliciesApi(this.config);
        this.alerts = new AlertsApi(this.config);
        this.apiIntegrations = new ApiIntegrationsApi(this.config);
        this.aspm = new AspmApi(this.config);
        this.caoHunting = new CaoHuntingApi(this.config);
        this.caseFiles = new CaseFilesApi(this.config);
        this.caseManagement = new CaseManagementApi(this.config);
        this.cases = new CasesApi(this.config);
        this.certificateBasedExclusions = new CertificateBasedExclusionsApi(this.config);
        this.cloudAwsRegistration = new CloudAwsRegistrationApi(this.config);
        this.cloudAzureRegistration = new CloudAzureRegistrationApi(this.config);
        this.cloudConnectAws = new CloudConnectAwsApi(this.config);
        this.cloudGoogleCloudRegistration = new CloudGoogleCloudRegistrationApi(this.config);
        this.cloudOciRegistration = new CloudOciRegistrationApi(this.config);
        this.cloudPolicies = new CloudPoliciesApi(this.config);
        this.cloudSecurity = new CloudSecurityApi(this.config);
        this.cloudSecurityAssets = new CloudSecurityAssetsApi(this.config);
        this.cloudSecurityCompliance = new CloudSecurityComplianceApi(this.config);
        this.cloudSecurityDetections = new CloudSecurityDetectionsApi(this.config);
        this.cloudSnapshots = new CloudSnapshotsApi(this.config);
        this.configurationAssessment = new ConfigurationAssessmentApi(this.config);
        this.configurationAssessmentEvaluationLogic = new ConfigurationAssessmentEvaluationLogicApi(this.config);
        this.containerAlerts = new ContainerAlertsApi(this.config);
        this.containerDetections = new ContainerDetectionsApi(this.config);
        this.containerImageCompliance = new ContainerImageComplianceApi(this.config);
        this.containerImages = new ContainerImagesApi(this.config);
        this.containerPackages = new ContainerPackagesApi(this.config);
        this.containerVulnerabilities = new ContainerVulnerabilitiesApi(this.config);
        this.contentUpdatePolicies = new ContentUpdatePoliciesApi(this.config);
        this.correlationRulesAdmin = new CorrelationRulesAdminApi(this.config);
        this.correlationRules = new CorrelationRulesApi(this.config);
        this.cspgIacapi = new CspgIacapiApi(this.config);
        this.cspmRegistration = new CspmRegistrationApi(this.config);
        this.customIoa = new CustomIoaApi(this.config);
        this.customStorage = new CustomStorageApi(this.config);
        this.d4cRegistration = new D4cRegistrationApi(this.config);
        this.dataProtectionConfiguration = new DataProtectionConfigurationApi(this.config);
        this.default = new DefaultApi(this.config);
        this.deliverySettings = new DeliverySettingsApi(this.config);
        this.deployments = new DeploymentsApi(this.config);
        this.detects = new DetectsApi(this.config);
        this.deviceContent = new DeviceContentApi(this.config);
        this.deviceControlPolicies = new DeviceControlPoliciesApi(this.config);
        this.deviceControlWithBluetooth = new DeviceControlWithBluetoothApi(this.config);
        this.discover = new DiscoverApi(this.config);
        this.discoverIot = new DiscoverIotApi(this.config);
        this.downloadsApi = new DownloadsApiApi(this.config);
        this.driftIndicators = new DriftIndicatorsApi(this.config);
        this.eventSchema = new EventSchemaApi(this.config);
        this.eventStreams = new EventStreamsApi(this.config);
        this.execution = new ExecutionApi(this.config);
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
        this.hostGroup = new HostGroupApi(this.config);
        this.hostMigration = new HostMigrationApi(this.config);
        this.hosts = new HostsApi(this.config);
        this.identityEntities = new IdentityEntitiesApi(this.config);
        this.identityProtection = new IdentityProtectionApi(this.config);
        this.imageAssessmentPolicies = new ImageAssessmentPoliciesApi(this.config);
        this.incidents = new IncidentsApi(this.config);
        this.installationTokens = new InstallationTokensApi(this.config);
        this.installationTokensSettings = new InstallationTokensSettingsApi(this.config);
        this.intel = new IntelApi(this.config);
        this.intelligenceFeeds = new IntelligenceFeedsApi(this.config);
        this.intelligenceIndicatorGraph = new IntelligenceIndicatorGraphApi(this.config);
        this.ioaExclusions = new IoaExclusionsApi(this.config);
        this.ioc = new IocApi(this.config);
        this.iocs = new IocsApi(this.config);
        this.itAutomation = new ItAutomationApi(this.config);
        this.kubernetesContainerCompliance = new KubernetesContainerComplianceApi(this.config);
        this.kubernetesProtection = new KubernetesProtectionApi(this.config);
        this.lookupFiles = new LookupFilesApi(this.config);
        this.maintenanceToken = new MaintenanceTokenApi(this.config);
        this.malquery = new MalqueryApi(this.config);
        this.messageCenter = new MessageCenterApi(this.config);
        this.mlExclusions = new MlExclusionsApi(this.config);
        this.mobileEnrollment = new MobileEnrollmentApi(this.config);
        this.mssp = new MsspApi(this.config);
        this.ngsiem = new NgsiemApi(this.config);
        this.oauth2 = new Oauth2Api(this.config);
        this.ods = new OdsApi(this.config);
        this.preventionPolicies = new PreventionPoliciesApi(this.config);
        this.quarantine = new QuarantineApi(this.config);
        this.quickScan = new QuickScanApi(this.config);
        this.quickScanPro = new QuickScanProApi(this.config);
        this.realTimeResponseAdmin = new RealTimeResponseAdminApi(this.config);
        this.realTimeResponse = new RealTimeResponseApi(this.config);
        this.realTimeResponseAudit = new RealTimeResponseAuditApi(this.config);
        this.recon = new ReconApi(this.config);
        this.releaseNotes = new ReleaseNotesApi(this.config);
        this.releases = new ReleasesApi(this.config);
        this.reportExecutions = new ReportExecutionsApi(this.config);
        this.responsePolicies = new ResponsePoliciesApi(this.config);
        this.runtimeDetections = new RuntimeDetectionsApi(this.config);
        this.saasSecurity = new SaasSecurityApi(this.config);
        this.sampleUploads = new SampleUploadsApi(this.config);
        this.scheduledReports = new ScheduledReportsApi(this.config);
        this.sensorDownload = new SensorDownloadApi(this.config);
        this.sensorUpdatePolicies = new SensorUpdatePoliciesApi(this.config);
        this.sensorUsageApi = new SensorUsageApiApi(this.config);
        this.sensorVisibilityExclusions = new SensorVisibilityExclusionsApi(this.config);
        this.serverlessVulnerabilities = new ServerlessVulnerabilitiesApi(this.config);
        this.spotlightEvaluationLogic = new SpotlightEvaluationLogicApi(this.config);
        this.spotlightSupportedEvaluation = new SpotlightSupportedEvaluationApi(this.config);
        this.spotlightVulnerabilities = new SpotlightVulnerabilitiesApi(this.config);
        this.spotlightVulnerabilityMetadata = new SpotlightVulnerabilityMetadataApi(this.config);
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
