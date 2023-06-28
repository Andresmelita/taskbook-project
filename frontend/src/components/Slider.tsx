import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// import required modules
import { Navigation } from 'swiper';
import CardTask from './CardTask';
import useScreenSize from '@/hooks/useScreenSize';

export default function Slider() {
    const {height, width} = useScreenSize()
    const [slidesView, setSlidesView] = useState(4)
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    const tasks = [{ title: 'Tarea con título extenso para revisar que sucede', index: 1 }, { title: 'Título aparentemente normal', index: 2 }, { title: 'numero 3', index: 3 }, { title: 'numero 4', index: 4 }, { title: 'numero 5', index: 5 }, { title: 'numero 6', index: 6 }]

    const [clickAppear, setClickAppear] = useState(false);
    const handleClickAppear = () => {
        setClickAppear(true);
    };

    return (
        <div className="flex h-[100%] relative justify-center items-center">
            <div
                ref={prevRef}
                className={
                    clickAppear
                        ? 'lg:flex hidden button-prev justify-center items-center appear-effect cursor-pointer appear bg-transparent'
                        : 'appear-effect lg:flex hidden justify-center items-center cursor-pointer bg-transparent'
                }
            >
                <div className='hover:scale-110 ease-in duration-300 bg-transparent'>
                    <ArrowBackIosIcon className="text-[32px]" />
                </div>

            </div>
            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                style={{ position: 'unset' }}
                slidesPerView={width <= 1516 ? 3 : 4}
                hashNavigation={true}
                loop={false}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper swiper flex flex-row"
            >
                <div>
                    {tasks?.map((data, index) => {
                        return (
                            <SwiperSlide key={tasks[index].index} className="swiper-slide py-[16px] flex justify-center items-center">
                                <div className='w-[100%] h-[100%] flex justify-center'>
                                    <CardTask title={tasks[index].title} index={tasks[index].index} />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
            <div
                ref={nextRef}
                onClick={handleClickAppear}
                className="lg:flex hidden ml-[10px] items-center cursor-pointer bg-transparent"
            >
                <div className='hover:scale-110 ease-in duration-300 bg-transparent'>
                    <ArrowForwardIosIcon className="text-[32px]" />
                </div>

            </div>
        </div>
    );
}
