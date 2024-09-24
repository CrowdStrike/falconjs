import { _hosts_endpoints } from "./_endpoints/hosts"
import { _detects_endpoints } from "./_endpoints/detects"
import { _zero_trust_assessment_endpoints } from "./_endpoints/zero_trust_assessment"
import { _host_group_endpoints } from "./_endpoints/host_group"
import { _report_executions_endpoints } from "./_endpoints/report_executions"
import { _sample_uploads_endpoints } from "./_endpoints/sample_uploads"
import { _mobile_enrollment_endpoints } from "./_endpoints/mobile_enrollment"
import { _malquery_endpoints } from "./_endpoints/malquery"
import { _device_control_policies_endpoints } from "./_endpoints/device_control_policies"
import { _iocs_endpoints } from "./_endpoints/iocs"
import { _falconx_sandbox_endpoints } from "./_endpoints/falconx_sandbox"
import { _identity_protection_endpoints } from "./_endpoints/identity_protection"
import { _falcon_container_endpoints } from "./_endpoints/falcon_container"
import { _firewall_policies_endpoints } from "./_endpoints/firewall_policies"
import { _scheduled_reports_endpoints } from "./_endpoints/scheduled_reports"
import { _cspm_registration_endpoints } from "./_endpoints/cspm_registration"
import { _spotlight_vulnerabilities_endpoints } from "./_endpoints/spotlight_vulnerabilities"
import { _ioc_endpoints } from "./_endpoints/ioc"
import { _sensor_visibility_exclusions_endpoints } from "./_endpoints/sensor_visibility_exclusions"
import { _real_time_response_audit_endpoints } from "./_endpoints/real_time_response_audit"
import { _prevention_policies_endpoints } from "./_endpoints/prevention_policies"
import { _ods_endpoints } from "./_endpoints/ods"
import { _mssp_endpoints } from "./_endpoints/mssp"
import { _message_center_endpoints } from "./_endpoints/message_center"
import { _cloud_snapshots_endpoints } from "./_endpoints/cloud_snapshots"
import { _discover_endpoints } from "./_endpoints/discover"
import { _ioa_exclusions_endpoints } from "./_endpoints/ioa_exclusions"
import { _custom_storage_endpoints } from "./_endpoints/custom_storage"
import { _intel_endpoints } from "./_endpoints/intel"
import { _installation_tokens_endpoints } from "./_endpoints/installation_tokens"
import { _ml_exclusions_endpoints } from "./_endpoints/ml_exclusions"
import { _recon_endpoints } from "./_endpoints/recon"
import { _foundry_logscale_endpoints } from "./_endpoints/foundry_logscale"
import { _response_policies_endpoints } from "./_endpoints/response_policies"
import { _real_time_response_endpoints } from "./_endpoints/real_time_response"
import { _kubernetes_protection_endpoints } from "./_endpoints/kubernetes_protection"
import { _sensor_update_policies_endpoints } from "./_endpoints/sensor_update_policies"
import { _falcon_complete_dashboard_endpoints } from "./_endpoints/falcon_complete_dashboard"
import { _incidents_endpoints } from "./_endpoints/incidents"
import { _tailored_intelligence_endpoints } from "./_endpoints/tailored_intelligence"
import { _quick_scan_endpoints } from "./_endpoints/quick_scan"
import { _d4c_registration_endpoints } from "./_endpoints/d4c_registration"
import { _oauth2_endpoints } from "./_endpoints/oauth2"
import { _user_management_endpoints } from "./_endpoints/user_management"
import { _fdr_endpoints } from "./_endpoints/fdr"
import { _cloud_connect_aws_endpoints } from "./_endpoints/cloud_connect_aws"
import { _spotlight_evaluation_logic_endpoints } from "./_endpoints/spotlight_evaluation_logic"
import { _quarantine_endpoints } from "./_endpoints/quarantine"
import { _custom_ioa_endpoints } from "./_endpoints/custom_ioa"
import { _filevantage_endpoints } from "./_endpoints/filevantage"
import { _sensor_download_endpoints } from "./_endpoints/sensor_download"
import { _workflows_endpoints } from "./_endpoints/workflows"
import { _firewall_management_endpoints } from "./_endpoints/firewall_management"
import { _event_streams_endpoints } from "./_endpoints/event_streams"
import { _overwatch_dashboard_endpoints } from "./_endpoints/overwatch_dashboard"
import { _real_time_response_admin_endpoints } from "./_endpoints/real_time_response_admin"
import { _alerts_endpoints } from "./_endpoints/alerts"

/** aggregates ./endpoints into one array for Falcon.command(...) */
export const api_endpoints: Array<any> = [
    _hosts_endpoints
        .concat(_detects_endpoints)
        .concat(_zero_trust_assessment_endpoints)
        .concat(_host_group_endpoints)
        .concat(_report_executions_endpoints)
        .concat(_sample_uploads_endpoints)
        .concat(_mobile_enrollment_endpoints)
        .concat(_malquery_endpoints)
        .concat(_device_control_policies_endpoints)
        .concat(_iocs_endpoints)
        .concat(_falconx_sandbox_endpoints)
        .concat(_identity_protection_endpoints)
        .concat(_falcon_container_endpoints)
        .concat(_firewall_policies_endpoints)
        .concat(_scheduled_reports_endpoints)
        .concat(_cspm_registration_endpoints)
        .concat(_spotlight_vulnerabilities_endpoints)
        .concat(_ioc_endpoints)
        .concat(_sensor_visibility_exclusions_endpoints)
        .concat(_real_time_response_audit_endpoints)
        .concat(_prevention_policies_endpoints)
        .concat(_ods_endpoints)
        .concat(_mssp_endpoints)
        .concat(_message_center_endpoints)
        .concat(_cloud_snapshots_endpoints)
        .concat(_discover_endpoints)
        .concat(_ioa_exclusions_endpoints)
        .concat(_custom_storage_endpoints)
        .concat(_intel_endpoints)
        .concat(_installation_tokens_endpoints)
        .concat(_ml_exclusions_endpoints)
        .concat(_recon_endpoints)
        .concat(_foundry_logscale_endpoints)
        .concat(_response_policies_endpoints)
        .concat(_real_time_response_endpoints)
        .concat(_kubernetes_protection_endpoints)
        .concat(_sensor_update_policies_endpoints)
        .concat(_falcon_complete_dashboard_endpoints)
        .concat(_incidents_endpoints)
        .concat(_tailored_intelligence_endpoints)
        .concat(_quick_scan_endpoints)
        .concat(_d4c_registration_endpoints)
        .concat(_oauth2_endpoints)
        .concat(_user_management_endpoints)
        .concat(_fdr_endpoints)
        .concat(_cloud_connect_aws_endpoints)
        .concat(_spotlight_evaluation_logic_endpoints)
        .concat(_quarantine_endpoints)
        .concat(_custom_ioa_endpoints)
        .concat(_filevantage_endpoints)
        .concat(_sensor_download_endpoints)
        .concat(_workflows_endpoints)
        .concat(_firewall_management_endpoints)
        .concat(_event_streams_endpoints)
        .concat(_overwatch_dashboard_endpoints)
        .concat(_real_time_response_admin_endpoints)
        .concat(_alerts_endpoints)
]

