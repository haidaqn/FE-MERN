import path from './path';
import icons from './icons';

const {
    GiSmartphone,
    MdGroups2,
    GiLaptop,
    AiOutlinePrinter,
    BsFillSpeakerFill,
    SlEarphones,
    AiFillTablet,
    AiOutlineDashboard,
    GrProductHunt,
    RiBillLine
} = icons;
//
export const navigation = [
    {
        id: 1,
        value: 'home',
        path: `/${path.HOME}`
    },
    {
        id: 2,
        value: 'products',
        path: `/${path.PRODUCTS}`
    },
    {
        id: 3,
        value: 'blog',
        path: `/${path.BLOGS}`
    },
    {
        id: 4,
        value: 'our services',
        path: `/${path.OUR_SERVICES}`
    },
    {
        id: 5,
        value: 'FAQ',
        path: `/${path.FAQ}`
    }
];

export const faqApi = [
    {
        title: 'What payment you accept?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'In what country can you deliver?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'what payments you accept?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'how to track my parcel?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'how to handle my parcel?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Why amadea is the best e-commerce theme?',
        Content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

export const iconSlideBar = [
    <GiSmartphone size={18} />,
    <AiFillTablet size={18} />,
    <GiLaptop size={18} />,
    <BsFillSpeakerFill size={18} />,
    <SlEarphones size={18} />,
    <AiOutlinePrinter size={18} />
];

export const tabs = [
    {
        id: 1,
        name: 'best seller'
    },
    {
        id: 2,
        name: 'new arrivals'
    }
];

export const product_information = [
    {
        id: 0,
        name: 'warranty',
        content: `warranty`
    },
    {
        id: 1,
        name: 'delivery',
        content: `delivery`
    },
    {
        id: 2,
        name: 'payment',
        content: 'payment'
    }
];

export const colors = [
    { id: 1, name: 'black' },
    { id: 2, name: 'brown' },
    { id: 3, name: 'gray' },
    { id: 4, name: 'white' },
    { id: 5, name: 'pink' },
    { id: 6, name: 'yellow' },
    { id: 7, name: 'orange' },
    { id: 8, name: 'purple' },
    { id: 9, name: 'green' },
    { id: 10, name: 'blue' }
];

export const sortBy = [
    {
        id: 1,
        value: '-sold',
        name: 'Best selling'
    },
    {
        id: 2,
        value: 'title',
        name: 'Alphabetically, A-Z'
    },
    {
        id: 3,
        value: '-title',
        name: 'Alphabetically, Z-A'
    },
    {
        id: 4,
        value: '-price',
        name: 'Price, low to high'
    },
    {
        id: 5,
        value: 'price',
        name: 'Price, high to low'
    },
    {
        id: 6,
        value: '-createdAt',
        name: 'Date, old to new'
    },
    {
        id: 7,
        value: 'createdAt',
        name: 'Date, new to old'
    }
];

export const options = [
    { id: 0, name: 'Terrible' },
    { id: 1, name: 'Bad' },
    { id: 2, name: 'Neutral' },
    { id: 3, name: 'Good' },
    { id: 4, name: 'Perfect' }
];

export const adminSlideBar = [
    {
        id: 1,
        type: 'SINGLE',
        text: 'Dasboard',
        path: `/${path.ADMIN}/${path.DASHBOARD}`,
        icon: <AiOutlineDashboard size={30} />
    },
    {
        id: 2,
        type: 'SINGLE',
        text: 'Manage User',
        path: `/${path.ADMIN}/${path.MANAGE_USER}`,
        icon: <MdGroups2 size={30} />
    },
    {
        id: 3,
        type: 'PARENT',
        text: 'Manage product',
        submenu: [
            { text: 'create product', path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}` },
            { text: 'Manage product', path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}` }
        ],
        icon: <GrProductHunt size={30} />
    },
    {
        id: 4,
        type: 'SINGLE',
        text: 'Manage order',
        path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
        icon: <RiBillLine size={30} />
    }
];
