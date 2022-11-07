import React from 'react';

const Slider = () => {
    return (
        <div className="carousel max-h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg?size=626&ext=jpg&ga=GA1.2.46801789.1656763936" className="w-full" alt='' />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable Price For Car <br />  Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                    <p className='text-xl text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/incognito-man-building-biceps-with-barbell_7502-5120.jpg?size=626&ext=jpg&ga=GA1.2.46801789.1656763936&semt=sph" className="w-full" alt='' />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable Price For Car <br />  Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                    <p className='text-xl text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/young-healthy-man-athlete-posing-confident-with-ropes-gym_155003-32053.jpg?size=626&ext=jpg&ga=GA1.2.46801789.1656763936" className="w-full" alt='' />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable Price For Car <br />  Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                    <p className='text-xl text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;