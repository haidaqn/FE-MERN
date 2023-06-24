import icons from './icons';

const { AiFillStar, AiOutlineStar } = icons;

export const renderStartNumber = (number, size) => {
    const star = [];
    for (let i = 0; i < number; i++) star.push(<AiFillStar size={size || 16} color="orange" key={i} />);
    for (let i = number; i < 5; i++) star.push(<AiOutlineStar size={size || 16} key={i} />);
    return star;
};

export const handlePrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};