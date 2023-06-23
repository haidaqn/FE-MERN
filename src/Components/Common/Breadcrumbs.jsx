import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumbs = ({ category, title }) => {
    const routes = [
        { path: '/', breadcrumb: 'Home' },
        { path: '/:category', breadcrumb: category },
        { path: '/:category/:pid/:title', breadcrumb: title }
    ];
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <div className="flex items-center mt-1">
            {breadcrumbs
                ?.filter((item) => !item.match.route === false)
                ?.map((item, index, self) => (
                    <NavLink
                        key={item.match.pathname}
                        to={item.match.pathname}
                        className={`flex justify-center items-center gap-1  ${
                            self.length - 1 !== index && 'hover:text-main cursor-pointer'
                        }`}
                    >
                        <span className={`${self.length - 1 === index && 'opacity-80'} capitalize`}>
                            {item.breadcrumb}
                        </span>
                        {self.length - 1 !== index && (
                            <span>
                                <IoIosArrowForward />
                            </span>
                        )}
                    </NavLink>
                ))}
        </div>
    );
};

export default Breadcrumbs;
