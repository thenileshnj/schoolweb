import React from "react";
import "./styles/midHero.css"

const MidHeroSec = () => {
  return (
    <div>
      <div className="flex flex-wrap w-full mx-0 px-0">
        <div className="w-full sm:w-full lg:w-1/2 h-96 bgStyles-1"></div>
        <div className="flex-row w-full sm:w-full lg:w-1/2 justify-center items-center px-8 py-16">
          <div className="pb-4">
            <h3 className="text-4xl font-extrabold">Excellent Library</h3>
            <div className="h-1 w-1/3 bg-green-500"></div>
          </div>
          <div className="text-lg font-semibold">
            <p className="pb-4">
            We take pride in providing an outstanding learning environment for our students. Our library is more than just a place to check out books - it is a hub of learning, research, and collaboration.
            </p>
            <p className="pb-4">
            Our library boasts a vast collection of books, magazines, newspapers, and digital resources that cater to the diverse interests and needs of our students.
            </p>
            <p className="pb-4">
            Our library boasts a vast collection of books, magazines, newspapers, and digital resources that cater to the diverse interests and needs of our students.
            </p>
          </div>
          <div className="bg-green-500 px-8 py-2 rounded-lg w-44 items-center text-xl font-semibold">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full mx-0 px-0">
      <div className="flex-row w-full sm:w-full lg:w-1/2 justify-center items-center px-8 py-16">
          <div className="pb-4">
            <h3 className="text-4xl font-extrabold">Advanced Computer Labs</h3>
            <div className="h-1 w-1/3 bg-green-500"></div>
          </div>
          <div className="text-lg font-semibold">
            <p className="pb-4">
            Our labs are equipped with high-speed internet, modern computers, printers, scanners, and other peripherals necessary for the smooth functioning of the labs. The labs are also staffed by experienced technicians who ensure that the equipment is up-to-date and functioning efficiently.
            </p>
            <p className="pb-4">
            We have multiple computer labs, each dedicated to specific subjects such as computer science, graphic design, and multimedia production. These labs are open to students during regular school hours and some are also available during after-school hours.
            </p>
            <p className="pb-4">
            Our computer labs are a vital part of our commitment to providing a world-class education to our students. We encourage all students to make use of these resources and take advantage of the opportunities that they offer.
            </p>
          </div>
          <div className="bg-green-500 px-8 py-2 rounded-lg w-44 items-center text-xl font-semibold">
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/2 h-96 bgStyles-2"></div>
      </div>

      <div className="flex flex-wrap w-full mx-0 px-0">
        <div className="w-full sm:w-full lg:w-1/2 h-96 bgStyles-3"></div>
        <div className="flex-row w-full sm:w-full lg:w-1/2 justify-center items-center px-8 py-16">
          <div className="pb-4">
            <h3 className="text-4xl font-extrabold">Digital Classrooms</h3>
            <div className="h-1 w-1/3 bg-green-500"></div>
          </div>
          <div className="text-lg font-semibold">
            <p className="pb-4">
            Our classrooms are equipped with interactive whiteboards, projectors, and other cutting-edge technology that facilitate student engagement and collaboration. Teachers are trained to use these tools effectively to create interactive and immersive learning experiences.
            </p>
            <p className="pb-4">
            Our digital classrooms also provide students with access to online resources, multimedia content, and educational software that enhance their learning experience. Students can work on assignments and projects collaboratively, and access real-time feedback from their teachers.
            </p>
            <p className="pb-4">
            Our digital classrooms are a vital part of our commitment to providing a world-class education to our students. We encourage all students to make use of these resources and take advantage of the opportunities that they offer.
            </p>
          </div>
          <div className="bg-green-500 px-8 py-2 rounded-lg w-44 items-center text-xl font-semibold">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MidHeroSec;
