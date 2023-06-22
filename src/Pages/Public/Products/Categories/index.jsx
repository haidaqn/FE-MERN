import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Layout } from '../../../../Components';

const Category = () => {
    const { category } = useParams();
    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mx-[-14%]">
                <Layout>
                    <h1>{category}</h1>
                    <Breadcrumbs category={category} />
                </Layout>
            </div>
            <div className="my-3">data</div>
        </>
    );
};

export default Category;
