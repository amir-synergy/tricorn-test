import React from 'react'

const TableOfContents = () => {
    return (
        <section style={{ display: 'none' }} className='table-of-contents'>
            <div>
                <h1 className="text-3xl font-bold mb-4">Table of Contents</h1>
                <ul className="list-inside space-y-1">
                    <li>
                        <span className="font-bold">1. Introduction</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>1.1 Scope</li>
                            <li>1.2 Disclaimer</li>
                            <li>1.3 Methodology</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">2. Site Context</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>2.1 Site Description</li>
                            <li>2.2 Neighborhood Observation</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">3. Crime Analysis</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>3.1 Violent and property crime risk</li>
                            <li>3.2 Crime trend analysis</li>
                            <li>3.3 Observations on crime and suspicious activity for the property</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">4. Crime Prevention through Environmental Design</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>4.1 Natural Surveillance</li>
                            <li>4.2 Natural Access Control</li>
                            <li>4.3 Territorial Reinforcement</li>
                            <li>4.4 Maintenance and Management</li>
                        </ul>
                    </li>
                    <li className="font-bold">5. Lighting</li>
                    <li>
                        <span className="font-bold">6. Disorder</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>6.1 Social Disorder</li>
                            <li>6.2 Physical Disorder</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">7. Physical Security</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>7.1 Camera System</li>
                            <li>7.2 Security Services</li>
                            <li>7.3 (Electronic) Access Control</li>
                            <li>7.4 Residential Units</li>
                            <li>7.5 Key Control</li>
                            <li>7.6 Florida Statute 768.0706 (2) Requirements</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-bold">8. Considerations and Compliance</span>
                        <ul className="list-inside ml-4 mt-1 space-y-1">
                            <li>8.1 Crime Prevention Through Environmental Design Considerations</li>
                            <li>8.2 Physical Security Considerations</li>
                            <li>8.3 Lighting Considerations</li>
                            <li>8.4 Disorder Considerations</li>
                            <li>8.5 Other Considerations</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default TableOfContents