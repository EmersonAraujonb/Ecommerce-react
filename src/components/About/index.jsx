import React from 'react'
import Image from '../../assets/about.png'

const About = () => {
    return (
        <section className="text-gray-600 body-font cards">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About
            </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil id animi iste enim, quidem ut ea aspernatur consectetur, quisquam asperiores harum! Quod veniam nihil accusamus natus reprehenderit aperiam. Vero.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Image}/>
          </div>
        </div>
      </section>
    )
}

export default About;