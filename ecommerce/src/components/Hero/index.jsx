import React from 'react';
import img from '../../src/assets/bg.jpg'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font mt-10 hero">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dress Well
                        
                    </h1>
                    <p className="mb-8 leading-relaxed">Buy clothes for all occasions and rock wherever you go. Buying an outfit may seem simple, and here you will prove that it is!</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="bg" src={img}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
