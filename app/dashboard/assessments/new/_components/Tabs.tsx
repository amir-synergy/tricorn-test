import React from 'react'
import {Disclosure, DisclosureButton, DisclosurePanel, Tab, TabList} from "@headlessui/react";
import {Text} from "@radix-ui/themes";
import {FiChevronDown} from "react-icons/fi";

const Tabs = () => {
    return (
        <TabList>
            {/* Introduction */}
            <Tab key='introduction'
                 className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-7 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                <span>1. Introduction</span>
                {/*<FiCircle size={15} />*/}
            </Tab>

            {/* Site Context */}
            <Disclosure>
                <DisclosureButton
                    className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[open]:font-medium">
                    <Text size='3' className='block w-3/4'>
                        2. Site Context
                    </Text>
                    <FiChevronDown className="block group-data-[open]:rotate-180"/>
                </DisclosureButton>
                <DisclosurePanel unmount={false}>
                    <Tab key='site_description'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        2.1 Site description
                                    </span>
                    </Tab>
                    <Tab key='neighborhood_observation'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        2.2 Neighborhood observation
                                    </span>
                    </Tab>
                </DisclosurePanel>
            </Disclosure>

            {/* Crime Analysis */}
            <Disclosure>
                <DisclosureButton
                    className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[open]:font-medium">
                    <Text size='3' className='block w-3/4'>
                        3. Crime Analysis
                    </Text>
                    <FiChevronDown className="group-data-[open]:rotate-180"/>
                </DisclosureButton>
                <DisclosurePanel unmount={false}>
                    <Tab key='violent_and_property_crime_risk'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        3.1 Violent And Property Crime Risk
                                    </span>
                    </Tab>
                    <Tab key='crime_trend_analysis'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        3.2 Crime Trend Analysis
                                    </span>
                    </Tab>
                    <Tab key='observations_on_crime_and_suspicious_activity_for_the_property'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        3.3 Observations On Crime And Suspicious Activity For The Property
                                    </span>
                    </Tab>
                </DisclosurePanel>
            </Disclosure>

            {/* Crime Prevention Through Environmental Design */}
            <Disclosure>
                <DisclosureButton
                    className="group flex w-full text-start items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[open]:font-medium">
                    <Text size='3' className='block w-3/4'>
                        4. Crime Prevention Through Environmental Design
                    </Text>
                    <FiChevronDown size={15} className="block group-data-[open]:rotate-180"/>
                </DisclosureButton>
                <DisclosurePanel unmount={false}>
                    <Tab key='natural_surveillance'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        4.1 Natural Surveillance
                                    </span>
                    </Tab>
                    <Tab key='natural_access_control'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        4.2 Natural Access Control
                                    </span>
                    </Tab>
                    <Tab key='territorial_reinforcement'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        4.3 Territorial Reinforcement
                                    </span>
                    </Tab>
                    <Tab key='maintenance_and_management'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        4.4 Maintenance and Management
                                    </span>
                    </Tab>
                </DisclosurePanel>
            </Disclosure>

            {/* Lighting */}
            <Tab key='lighting'
                 className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-7 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                            <span>
                                5. Lighting
                            </span>
            </Tab>

            {/* Disorder */}
            <Disclosure>
                <DisclosureButton
                    className="group flex w-full text-start items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[open]:font-medium">
                    <Text size='3' className='block w-3/4'>
                        6. Disorder
                    </Text>
                    <FiChevronDown size={15} className="block group-data-[open]:rotate-180"/>
                </DisclosureButton>
                <DisclosurePanel unmount={false}>
                    <Tab key='social_disorder'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        6.1 Social Disorder
                                    </span>
                    </Tab>
                    <Tab key='physical_disorder'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        6.2 Physical Disorder
                                    </span>
                    </Tab>
                </DisclosurePanel>
            </Disclosure>

            {/* Physical Security */}
            <Disclosure>
                <DisclosureButton
                    className="group flex w-full text-start items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[open]:font-medium">
                    <Text size='3' className='block w-3/4'>
                        7. Physical Security
                    </Text>
                    <FiChevronDown size={15} className="block group-data-[open]:rotate-180"/>
                </DisclosureButton>
                <DisclosurePanel unmount={false}>
                    <Tab key='camera_system'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.1 Camera System
                                    </span>
                    </Tab>
                    <Tab key='security_services'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.2 Security Services
                                    </span>
                    </Tab>
                    <Tab key='electronic_access_control'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.3 (Electronic) Access Control
                                    </span>
                    </Tab>
                    <Tab key='residential_units'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.4 Residential Units
                                    </span>
                    </Tab>
                    <Tab key='key_control'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.5 Key Control
                                    </span>
                    </Tab>
                    <Tab key='florida_statute_7680706_2_requirements'
                         className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-10 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                                    <span>
                                        7.6 Florida Statute 768.0706 (2) Requirements
                                    </span>
                    </Tab>
                </DisclosurePanel>
            </Disclosure>

            {/* Considerations */}
            <Tab key='considerations'
                 className='flex w-full text-[16px] text-start items-center justify-between py-2 ps-7 pe-7 text-gray-900 data-[hover]:bg-gray-50 data-[selected]:bg-blue-100 data-[focus]:bg-blue-100 data-[selected]:outline-0 data-[focus]:outline-0 data-[selected]:text-blue-900 data-[focus]:text-blue-900'>
                            <span>
                                8. Considerations
                            </span>
            </Tab>

        </TabList>
    );
}

export default Tabs