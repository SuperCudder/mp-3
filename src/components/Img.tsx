import React from 'react';
import { ImgWrapper } from './styled/StyledImg';

interface ImgProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

/* image component */
const Img: React.FC<ImgProps> = ({ src, alt, className, width, height }) => {
    return <ImgWrapper src={src} alt={alt} className={className} width={width} height={height} />;
};

export default Img;