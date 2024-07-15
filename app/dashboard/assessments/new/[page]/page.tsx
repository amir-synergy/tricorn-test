import React from 'react';

interface Props {
    params: {
        page: string;
    };
}

const Page = ({ params: { page } }: Props) => {
    return (
        <div>
            {page}
        </div>
    );
}

export default Page;