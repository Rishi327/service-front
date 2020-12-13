import React from 'react'
import NavBar from './NavBar'

const About = () => {
    return (
      <div>
        <NavBar />

        <div>
          <section className="text-gray-700">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  About Us
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  The most common questions about how our business works and
                  what can do for you. The most common questions about how our
                  business works and what can do for you. The most common
                  questions about how our business works and what can do for
                  you. The most common questions about how our business works
                  and what can do for you. The most common questions about how
                  our business works and what can do for you. The most common
                  questions about how our business works and what can do for
                  you.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}
export default About