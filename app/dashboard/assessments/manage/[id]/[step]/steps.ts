import Introduction from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Introduction/Introduction";

import SiteDescription from "@/app/dashboard/assessments/manage/[id]/[step]/forms/SiteContext/SiteDescription";
import NeighborhoodObservation from "@/app/dashboard/assessments/manage/[id]/[step]/forms/SiteContext/NeighborhoodObservation";

import ViolentAndPropertyCrimeRisk from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimeAnalysis/ViolentAndPropertyCrimeRisk";
import CrimeTrendAnalysis from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimeAnalysis/CrimeTrendAnalysis";
import ObservationsOnCrimeAndSuspiciousActivityForTheProperty from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimeAnalysis/ObservationsOnCrimeAndSuspiciousActivityForTheProperty";

import NaturalSurveillance from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimePreventionThroughEnvironmentalDesign/NaturalSurveillance";
import NaturalAccessControl from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimePreventionThroughEnvironmentalDesign/NaturalAccessControl";
import TerritorialReinforcement from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimePreventionThroughEnvironmentalDesign/TerritorialReinforcement";
import MaintenanceAndManagement from "@/app/dashboard/assessments/manage/[id]/[step]/forms/CrimePreventionThroughEnvironmentalDesign/MaintenanceAndManagement";

import Lighting from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Lighting/Lighting";

import SocialDisorder from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Disorder/SocialDisorder";
import PhysicalDisorder from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Disorder/PhysicalDisorder";

import CameraSystem from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/CameraSystem";
import SecurityServices from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/SecurityServices";
import ElectronicAccessControl from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/ElectronicAccessControl";
import ResidentialUnits from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/ResidentialUnits";
import KeyControl from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/KeyControl";
import FloridaStatute76807062Requirements from "@/app/dashboard/assessments/manage/[id]/[step]/forms/PhysicalSecurity/FloridaStatute76807062Requirements";

import CrimePreventionThroughEnvironmentalDesignConsiderations from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Considerations/CrimePreventionThroughEnvironmentalDesignConsiderations";
import PhysicalSecurityConsiderations from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Considerations/PhysicalSecurityConsiderations";
import LightingConsiderations from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Considerations/LightingConsiderations";
import DisorderConsiderations from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Considerations/DisorderConsiderations";
import OtherConsiderations from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Considerations/OtherConsiderations";

import Summary from "@/app/dashboard/assessments/manage/[id]/[step]/forms/Summary/Summary";

export const steps = [
    { name: 'introduction', label: '1. Introduction', component: Introduction },

    { name: 'site-description', label: '2.1 Site Description', component: SiteDescription },
    { name: 'neighborhood-observation', label: '2.2 Neighborhood Observation', component: NeighborhoodObservation },

    { name: 'violent-and-property-crime-risk', label: '3.1. Violent and Property Crime Risk', component: ViolentAndPropertyCrimeRisk },
    { name: 'crime-trend-analysis', label: '3.2. Crime Trend Analysis', component: CrimeTrendAnalysis },
    { name: 'observations-on-crime-and-suspicious-activity-for-the-property', label: '3.3. Observations on crime and suspicious activity for the property', component: ObservationsOnCrimeAndSuspiciousActivityForTheProperty },

    { name: 'natural-surveillance', label: '4.1 Natural Surveillance', component: NaturalSurveillance },
    { name: 'natural-access-control', label: '4.2 Natural Access Control', component: NaturalAccessControl },
    { name: 'territorial-reinforcement', label: '4.3 Territorial Reinforcement', component: TerritorialReinforcement },
    { name: 'maintenance-and-management', label: '4.4 Maintenance and Management', component: MaintenanceAndManagement },

    { name: 'lighting', label: '5. Lighting', component: Lighting },

    { name: 'social-disorder', label: '6.1 Social Disorder', component: SocialDisorder },
    { name: 'physical-disorder', label: '6.2 Physical Disorder', component: PhysicalDisorder },

    { name: 'camera-system', label: '7.1 Camera System', component: CameraSystem },
    { name: 'security-services', label: '7.2 Security Services', component: SecurityServices },
    { name: 'electronic-access-control', label: '7.3 (Electronic) Access Control', component: ElectronicAccessControl },
    { name: 'residential-units', label: '7.4 Residential Units', component: ResidentialUnits },
    { name: 'key-control', label: '7.5 Key Control', component: KeyControl },
    { name: 'florida-statute-7680706-2-requirements', label: '7.6 Florida Statute 768.0706 (2) Requirements', component: FloridaStatute76807062Requirements },

    { name: 'crime-prevention-through-environmental-design-considerations', label: '8.1 Crime Prevention Through Environmental Design Considerations', component: CrimePreventionThroughEnvironmentalDesignConsiderations },
    { name: 'physical-security-considerations', label: '8.2 Physical Security Considerations', component: PhysicalSecurityConsiderations },
    { name: 'lighting-considerations', label: '8.3 Lighting Considerations', component: LightingConsiderations },
    { name: 'disorder-considerations', label: '8.4 Disorder Considerations', component: DisorderConsiderations },
    { name: 'other-considerations', label: '8.5 Other Considerations', component: OtherConsiderations },

    { name: 'summary', label: '9. Summary', component: Summary },
];