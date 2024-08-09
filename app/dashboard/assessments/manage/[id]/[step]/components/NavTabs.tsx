'use client';

import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Text} from "@radix-ui/themes";
import {FiCheck, FiCheckCircle, FiChevronDown, FiCircle} from "react-icons/fi";
import { requiredFields } from "@/app/api/dashboard/responses/requiredFields";

interface Props {
    responses: any[];
    currentStepName: string;
    handleSectionChange: (section: string) => void;
}

const findFilledSections = (requiredFields: Record<string, string[]>, responsesMap:any): string[] => {
    const filledSections: string[] = [];

    for (const section in requiredFields) {
        if (requiredFields.hasOwnProperty(section)) {
            let allFieldsFilled = true;
            if (!responsesMap[section]) {
                allFieldsFilled = false;
            } else {
                for (const field of requiredFields[section]) {
                    if (!responsesMap[section][field]) {
                        allFieldsFilled = false;
                        break;
                    }
                }
            }
            if (allFieldsFilled) {
                filledSections.push(section);
            }
        }
    }
    return filledSections;
};

const findMissingSections = (requiredFields: Record<string, string[]>, responsesMap:any): string[] => {
    const missingSections: string[] = [];

    for (const section in requiredFields) {
        if (requiredFields.hasOwnProperty(section)) {
            let allFieldsFilled = true;
            if (!responsesMap[section]) {
                allFieldsFilled = false;
            } else {
                for (const field of requiredFields[section]) {
                    if (!responsesMap[section][field]) {
                        allFieldsFilled = false;
                        break;
                    }
                }
            }
            if (!allFieldsFilled) {
                missingSections.push(section);
            }
        }
    }
    return missingSections;
}

const NavTabs = ({ responses, currentStepName, handleSectionChange }: Props) => {
    const filledSections = findFilledSections(requiredFields, responses);

    const tabs = [
        { label: '1. Introduction', name: 'introduction' },
        { label: '2. Site Context',
            name: 'site-context',
            children: [
                { label: '2.1 Site description', name: 'site-description' },
                { label: '2.2 Neighborhood observation', name: 'neighborhood-observation' }
            ]
        },
        { label: '3. Crime Analysis',
            name: 'crime-analysis',
            children: [
                { label: '3.1 Violent and Property Crime Risk', name: 'violent-and-property-crime-risk' },
                { label: '3.2 Crime Trend Analysis', name: 'crime-trend-analysis' },
                { label: '3.3 Observations on Crime and Suspicious Activity for the Property', name: 'observations-on-crime-and-suspicious-activity-for-the-property' }
            ]
        },
        { label: '4. Crime Prevention Through Environmental Design',
            name: 'crime-prevention-through-environmental-design',
            children: [
                { label: '4.1 Natural Surveillance', name: 'natural-surveillance' },
                { label: '4.2 Natural Access Control', name: 'natural-access-control' },
                { label: '4.3 Territorial Reinforcement', name: 'territorial-reinforcement' },
                { label: '4.4 Maintenance and Management', name: 'maintenance-and-management' }
            ]
        },
        { label: '5. Lighting', name: 'lighting' },
        { label: '6. Disorder',
            name: 'disorder',
            children: [
                { label: '6.1 Social Disorder', name: 'social-disorder' },
                { label: '6.2 Physical Disorder', name: 'physical-disorder' }
            ]
        },
        { label: '7. Physical Security',
            name: 'physical-security',
            children: [
                { label: '7.1 Camera System', name: 'camera-system' },
                { label: '7.2 Security Services', name: 'security-services' },
                { label: '7.3 (Electronic) Access Control', name: 'electronic-access-control' },
                { label: '7.4 Residential Units', name: 'residential-units' },
                { label: '7.5 Key Control', name: 'key-control' },
                { label: '7.6 Florida Statute 768.0706 (2) Requirements', name: 'florida-statute-7680706-2-requirements' }
            ]
        },
        { label: '8. Consideration',
            name: 'consideration',
            children: [
                { label: '8.1 Crime Prevention Through Environmental Design Considerations', name: 'crime-prevention-through-environmental-design-considerations' },
                { label: '8.2 Physical Security Considerations', name: 'physical-security-considerations' },
                { label: '8.3 Lighting Considerations', name: 'lighting-considerations' },
                { label: '8.4 Disorder Considerations', name: 'disorder-considerations' },
                { label: '8.5 Other Considerations', name: 'other-considerations' }
            ]
        },
        { label: '9. Summary', name: 'summary' },
    ];

    const baseClassName = "flex w-full justify-between text-[16px] items-center py-2 px-7 text-gray-900 hover:bg-gray-50";
    const activeClassName = "flex w-full justify-between text-[16px] items-center py-2 px-7 text-blue-500 bg-blue-300 pointer-events-none";

    // return (
    //     <ul className='pb-5'>
    //         {tabs.map((tab, index) => {
    //             const isFilled = filledSections.includes(tab.name!);
    //             if (tab.children && tab.children.length > 0) {
    //                 const disclosureOpen = tab.children.some(child => child.name === currentStepName);
    //                 return (
    //                     <li key={index}>
    //                         <Disclosure defaultOpen={disclosureOpen}>
    //                             <DisclosureButton
    //                                 className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900">
    //                                 <Text size='3' className='block w-3/4'>
    //                                     {tab.label}
    //                                 </Text>
    //                                 <FiChevronDown className="block group-data-[open]:rotate-180"/>
    //                             </DisclosureButton>
    //                             <DisclosurePanel>
    //                                 <ul>
    //                                     {tab.children.map((child, childIndex) => {
    //                                         const LinkStyleClass = child.name === currentStepName ? activeClassName : baseClassName;
    //                                         return (
    //                                             <li key={childIndex}>
    //                                                 <button type='button' className={`${LinkStyleClass} ps-10 text-start`} onClick={() => handleSectionChange(child.name!)}>
    //                                                     <span>{child.label}</span>
    //                                                 </button>
    //                                             </li>
    //                                         );
    //                                     })}
    //                                 </ul>
    //                             </DisclosurePanel>
    //                         </Disclosure>
    //                     </li>
    //                 );
    //             } else {
    //                 const LinkStyleClass = tab.name === currentStepName ? activeClassName : baseClassName;
    //                 return (
    //                     <li key={index}>
    //                         <button type='button' className={LinkStyleClass} onClick={() => handleSectionChange(tab.name!)}>
    //                             <span>{tab.label}</span>
    //                         </button>
    //                     </li>
    //                 );
    //             }
    //         })}
    //     </ul>
    // );

    const isTabFilled = (tab: any): boolean => {
        if (tab.children && tab.children.length > 0) {
            return tab.children.every((child: any) => filledSections.includes(child.name!));
        }
        return filledSections.includes(tab.name!);
    };

    // const tabIcon = (status: boolean, name?: string) => {
    //     if (name === 'consideration' || tabs.find(tab => tab.name === 'consideration')?.children?.find(child => child.name === name)) {
    //         return null;
    //     }
    //
    //     if (name === 'summary' || tabs.find(tab => tab.name === 'summary')?.children?.find(child => child.name === name)) {
    //         return null;
    //     }
    //
    //     return status ? <FiCheckCircle size={13} className='text-green-600' /> : <FiCircle size={13} />;
    // }

    const tabIcon = (status: boolean, name?: string) => {
        const isConsideration = name === 'consideration' || tabs.find(tab => tab.name === 'consideration')?.children?.some(child => child.name === name);
        const isSummary = name === 'summary' || tabs.find(tab => tab.name === 'summary')?.children?.some(child => child.name === name);

        if (isConsideration || isSummary) {
            return null;
        }

        return status ? <FiCheckCircle size={13} className='text-green-600' /> : <FiCircle size={13} />;
    }

    return (
        <ul className='pb-5'>
            {tabs.map((tab, index) => {
                const isFilled = isTabFilled(tab);
                if (tab.children && tab.children.length > 0) {
                    const disclosureOpen = tab.children.some(child => child.name === currentStepName);
                    return (
                        <li key={index}>
                            <Disclosure defaultOpen={disclosureOpen}>
                                <DisclosureButton
                                    className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900">
                                    <Text size='3' className='block w-3/4'>
                                        {tab.label}
                                    </Text>
                                    <div className="flex items-center">
                                        {tabIcon(isFilled, tab.name)}
                                        {/*<FiChevronDown className="block ms-2 group-data-[open]:rotate-180"/>*/}
                                    </div>
                                </DisclosureButton>
                                <DisclosurePanel>
                                    <ul>
                                        {tab.children.map((child, childIndex) => {
                                            const childIsFilled = filledSections.includes(child.name!);
                                            const LinkStyleClass = child.name === currentStepName ? activeClassName : baseClassName;
                                            return (
                                                <li key={childIndex}>
                                                    <button type='button' className={`${LinkStyleClass} ps-10 text-start`} onClick={() => handleSectionChange(child.name!)}>
                                                        <span className='max-w-[90%]'>{child.label}</span>
                                                        {tabIcon(childIsFilled, child.name)}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                        </li>
                    );
                } else {
                    const LinkStyleClass = tab.name === currentStepName ? activeClassName : baseClassName;
                    return (
                        <li key={index}>
                            <button type='button' className={LinkStyleClass} onClick={() => handleSectionChange(tab.name!)}>
                                <span>{tab.label}</span>
                                {tabIcon(isFilled, tab.name)}
                            </button>
                        </li>
                    );
                }
            })}
        </ul>
    );
}

export default NavTabs