import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Banner = () => {

    const Image = styled("img")({
        width: '100%',
        height: 280
    })

    const showData = bannerData.map((ele) => {
        return (
            <Image src={ele.url} alt="Banner" />
        )
    })

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {showData}
        </Carousel>
    )
}

export default Banner