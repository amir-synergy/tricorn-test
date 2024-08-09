import Logo from "@/app/dashboard/components/Logo";

interface Props {
    assessorName: string | null;
    responses: any;
}

const AssessmentDetails = ({ assessorName, responses }: Props ) => {
    return (
        <section>
            <div className='pdf-header' style={{ display: 'none' }}>
                <Logo logo={'logo2'} />
            </div>

            <h1 className='text-5xl'>
                CPTED Assessment of {responses.introduction.propertyName}
            </h1>

            <div className='grid sm:grid-cols-2 mt-5 mb-10 assessment-details-grid'>
                <div>
                    <p className='text-lg'>
                        <span className='text-gray-500'>Address: </span>
                        {
                            responses.introduction.propertyStreet + ', ' +
                            responses.introduction.propertyCity + ', ' +
                            responses.introduction.propertyState + ' ' +
                            responses.introduction.propertyZip
                        }
                    </p>
                    <p className='text-lg'>
                        <span className='text-gray-500'>Property Manager: </span>
                        {responses.introduction.propertyManager}
                    </p>
                </div>

                <div>
                    <p className='text-lg'>
                        <span className='text-gray-500'>Date: </span>
                        {responses.introduction.assessmentDate}
                    </p>
                    <p className='text-lg'>
                        <span className='text-gray-500'>Prepared By: </span>
                        {assessorName}
                    </p>
                </div>
            </div>

            <div className='pdf-footer' style={{ display: 'none' }}>
                <i className='text-red-500'>
                    Information contained in this document is confidential and protected by the work-product rule
                </i>
            </div>
        </section>
    );
}

export default AssessmentDetails