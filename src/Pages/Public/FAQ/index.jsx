import React from 'react';
import { faqApi } from '../../../Utils/Contants';
import ItemFAQ from './faq/ItemFAQ';
import { Layout } from '../../../Components';

const FAQ = () => {
    return (
        <div className="w-full mt-3 mb-5 flex flex-col gap-3">
            {faqApi.map((item, index) => (
                <ItemFAQ key={index} index={index + 1} title={item.title} content={item.Content} />
            ))}
        </div>
    );
};

export default FAQ;
