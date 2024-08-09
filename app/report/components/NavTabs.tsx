import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Text } from "@radix-ui/themes";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

interface Props {
    currentStep: string;
    onStepChange: (step: string) => void;
}

const NavTabs = ({ currentStep, onStepChange }: Props) => {
    const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<{ key: number; open: boolean; close: () => void } | null>(null);

    const togglePanels = (newPanel: { key: number; open: boolean; close: () => void }) => {
        if (activeDisclosurePanel && activeDisclosurePanel.key !== newPanel.key && activeDisclosurePanel.open) {
            activeDisclosurePanel.close();
        }
        setActiveDisclosurePanel({
            ...newPanel,
            open: !newPanel.open
        });
    };

    const tabs = [
        {
            label: '1. Introduction',
            name: 'introduction',
            children: [
                { label: '1.1 Scope', name: 'scope' },
                { label: '1.2 Disclaimer', name: 'disclaimer' },
                { label: '1.3 Methodology', name: 'methodology' }
            ]
        },
        {
            label: '2. Site Context',
            name: 'site-context',
            children: [
                { label: '2.1 Site description', name: 'site-description' },
                { label: '2.2 Neighborhood observation', name: 'neighborhood-observation' }
            ]
        },
        {
            label: '3. Crime Analysis',
            name: 'crime-analysis',
            children: [
                { label: '3.1 Violent and Property Crime Risk', name: 'violent-and-property-crime-risk' },
                { label: '3.2 Crime Trend Analysis', name: 'crime-trend-analysis' },
                { label: '3.3 Observations on Crime and Suspicious Activity for the Property', name: 'observations-on-crime-and-suspicious-activity-for-the-property' }
            ]
        },
        {
            label: '4. Crime Prevention Through Environmental Design',
            name: 'crime-prevention-through-environmental-design',
            children: [
                { label: '4.1 Natural Surveillance', name: 'natural-surveillance' },
                { label: '4.2 Natural Access Control', name: 'natural-access-control' },
                { label: '4.3 Territorial Reinforcement', name: 'territorial-reinforcement' },
                { label: '4.4 Maintenance and Management', name: 'maintenance-and-management' }
            ]
        },
        { label: '5. Lighting', name: 'lighting' },
        {
            label: '6. Disorder',
            name: 'disorder',
            children: [
                { label: '6.1 Social Disorder', name: 'social-disorder' },
                { label: '6.2 Physical Disorder', name: 'physical-disorder' }
            ]
        },
        {
            label: '7. Physical Security',
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
        {
            label: '8. Consideration',
            name: 'consideration',
            children: [
                { label: '8.1 Crime Prevention Through Environmental Design Considerations', name: 'crime-prevention-through-environmental-design-considerations' },
                { label: '8.2 Physical Security Considerations', name: 'physical-security-considerations' },
                { label: '8.3 Lighting Considerations', name: 'lighting-considerations' },
                { label: '8.4 Disorder Considerations', name: 'disorder-considerations' },
                { label: '8.5 Other Considerations', name: 'other-considerations' }
            ]
        },
        { label: 'Summary', name: 'summary' },
    ];

    const disclosureRefs = useRef<Array<HTMLButtonElement | null>>([]);

    useEffect(() => {
        tabs.forEach((tab, index) => {
            if (tab.children && tab.children.some(child => child.name === currentStep)) {
                const disclosureElement = disclosureRefs.current[index];
                if (disclosureElement && !disclosureElement.dataset.headlessuiState?.includes("open")) {
                    disclosureElement.click();
                }
            }
        });
    }, [currentStep]);

    const baseClassName = "flex w-full text-[16px] items-center py-2 px-7 text-gray-900 hover:bg-gray-50";
    const activeClassName = "flex w-full text-[16px] items-center py-2 px-7 text-orange-600 bg-orange-100 pointer-events-none";

    return (
        <ul>
            {tabs.map((tab, index) => (
                tab.children && tab.children.length > 0 ? (
                    <Disclosure as="div" key={index} defaultOpen={tab.children.some(child => child.name === currentStep)}>
                        {({ open, close }) => (
                            <>
                                <DisclosureButton
                                    ref={el => {
                                        disclosureRefs.current[index] = el;
                                    }}
                                    onClick={() => {
                                        togglePanels({key: index, open, close});
                                    }}
                                    className="group flex w-full text-start text-[16px] items-center justify-between py-2 px-7 text-gray-900 data-[hover]:bg-gray-50 data-[open]:text-blue-900 data-[focus]:!outline-none data-[focus]:!border-0"
                                    aria-expanded={open}
                                >
                                    <Text size='3' className='block w-3/4'>
                                        {tab.label}
                                    </Text>
                                    <FiChevronDown
                                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}/>
                                </DisclosureButton>
                                <DisclosurePanel>
                                    <ul>
                                        {tab.children.map((child, childIndex) => (
                                            <li key={childIndex}>
                                                <button
                                                    onClick={() => onStepChange(child.name)}
                                                    className={`${child.name === currentStep ? activeClassName : baseClassName} ps-10 text-start`}
                                                >
                                                    {child.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ) : (
                    <li key={index}>
                        <button
                            onClick={() => onStepChange(tab.name)}
                            className={tab.name === currentStep ? activeClassName : baseClassName}
                        >
                            {tab.label}
                        </button>
                    </li>
                )
            ))}
        </ul>
    );
};

export default NavTabs;