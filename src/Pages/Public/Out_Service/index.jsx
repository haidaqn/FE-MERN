import React from 'react';
import { OutService, layout, settings, picture } from '../../../assets/Out_Service';
import ItemOutService from './ItemOutService';

const Out_Service = () => {
    return (
        <div className="flex flex-col gap-5 w-full mt-3">
            <div className="flex gap-3">
                <img src={OutService} alt="" className="flex-1 object-cover" />
                <div className="flex flex-1 flex-col gap-3">
                    <h1 className="text-gray-500">
                        Cras magna tellus, congue vitae congue vel, facilisis id risus. Proin semper in lectus id
                        faucibus. Aenean vitae quam eget mi aliquam viverra quis quis velit.
                    </h1>
                    <h1 className="text-gray-500">
                        Curabitur mauris diam, posuere vitae nunc eget, blandit pellentesque mi. Pellentesque placerat
                        nulla at ultricies malesuada. Aenean mi lacus, malesuada at leo vel, blandit iaculis nisl.
                    </h1>
                    <h1 className="text-gray-500">
                        Praesent vestibulum nisl sed diam euismod, a auctor neque porta. Vestibulum varius ligula non
                        orci tincidunt rutrum. Suspendisse placerat enim eu est egestas, aliquam venenatis elit
                        accumsan. Donec metus quam, posuere sit amet odio et, ultricies consequat nibh.
                    </h1>
                </div>
            </div>
            <h1 className="text-lg font-semibold w-full text-center text-[#505050]">We Offer Best Services</h1>
            <div className="gap-5 flex  justify-center">
                <ItemOutService
                    title="Customizable Page"
                    content="Customizable Page Fusce arcu molestie eget libero consectetur congue consectetur in bibendum
                            litora"
                    img={settings}
                />
                <ItemOutService
                    title="Revolution Slider"
                    content="Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora"
                    img={picture}
                />
                <ItemOutService
                    title="Drag & Drop Page"
                    content="Fusce arcu molestie eget libero consectetur congue consectetur in bibendum litora"
                    img={layout}
                />
            </div>
        </div>
    );
};

export default Out_Service;
