import React from 'react'
import {TabPanel, TabPanels} from "@headlessui/react";

// TODO: Implement the Pages dynamically using DB

const Pages = () => {
    return (
        <div className="sm:ml-80 bg-gradient min-h-screen pb-[105px] lg:pt-0 md:pt-0 pt-[70px]">
            <article className="lg:p-10 md:p-8 p-3">
                <TabPanels className='block bg-white p-4 rounded-xl'>
                    {/* Introduction */}
                    <TabPanel key='introduction' unmount={false}>
                        Introduction
                    </TabPanel>

                    {/* Site Context */}
                    <TabPanel key='site_description' unmount={false}>
                        Site description
                    </TabPanel>
                    <TabPanel key='neighborhood_observation' unmount={false}>
                        Neighborhood observation
                    </TabPanel>

                    {/* Crime Analysis */}
                    <TabPanel key='violent_and_property_crime_risk' unmount={false}>
                        Violent And Property Crime Risk
                    </TabPanel>
                    <TabPanel key='crime_trend_analysis' unmount={false}>
                        Crime Trend Analysis
                    </TabPanel>
                    <TabPanel key='observations_on_crime_and_suspicious_activity_for_the_property' unmount={false}>
                        Observations On Crime And Suspicious Activity For The Property
                    </TabPanel>

                    {/* Crime Prevention Through Environmental Design */}
                    <TabPanel key='natural_surveillance' unmount={false}>
                        Natural Surveillance
                    </TabPanel>
                    <TabPanel key='natural_access_control' unmount={false}>
                        Natural Access Control
                    </TabPanel>
                    <TabPanel key='territorial_reinforcement' unmount={false}>
                        Territorial Reinforcement
                    </TabPanel>
                    <TabPanel key='maintenance_and_management' unmount={false}>
                        Maintenance and Management
                    </TabPanel>

                    {/* Lighting */}
                    <TabPanel key='lighting' unmount={false}>
                        Lighting
                    </TabPanel>

                    {/* Disorder */}
                    <TabPanel key='social_disorder' unmount={false}>
                        6.1 Social Disorder
                    </TabPanel>
                    <TabPanel key='physical_disorder' unmount={false}>
                        6.2 Physical Disorder
                    </TabPanel>

                    {/* 7. Physical Security */}
                    <TabPanel key='camera_system' unmount={false}>
                        7.1 Camera System
                    </TabPanel>
                    <TabPanel key='security_services' unmount={false}>
                        7.2 Security Services
                    </TabPanel>
                    <TabPanel key='electronic_access_control' unmount={false}>
                        7.3 (Electronic) Access Control
                    </TabPanel>
                    <TabPanel key='residential_units' unmount={false}>
                        7.4 Residential Units
                    </TabPanel>
                    <TabPanel key='key_control' unmount={false}>
                        7.5 Key Control
                    </TabPanel>
                    <TabPanel key='florida_statute_7680706_2_requirements' unmount={false}>
                        7.6 Florida Statute 768.0706 (2) Requirements
                    </TabPanel>

                    {/* 8. Considerations */}
                    <TabPanel key='considerations' unmount={false}>
                        Considerations
                    </TabPanel>

                </TabPanels>
            </article>
        </div>
);
}

export default Pages