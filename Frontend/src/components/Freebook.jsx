import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from './Cards'

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filterData = list.filter((data) => data.category === "Free")
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='text-xl font-semibold pb-2'>Free offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempora et ex repellendus at blanditiis quaerat aut obcaecati error dolore sequi distinctio, ratione suscipit similique officia perspiciatis nemo ipsa eligendi!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            filterData.map((item)=>(
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook

