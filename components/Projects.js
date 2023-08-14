import React from "react";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F]">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
                    {/* Add any header content if needed */}
                </header>
                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    {/* Project 1 */}
                    <div id="project1">
                        <div className="bg-[#D1D5DB] dark:bg-[#252C37] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Economic Benefit Opportnuity "EBO"
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This Android application uses NFC technology to create a contactless payment method for those using their benefits cards such as food stamps.
                            </p>
                            <Link href="https://github.com/jdurham38/Official-Economic-Benenfit-Opportunity" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div id="project2">
                        <div className="bg-[#FDE68A] dark:bg-[#4B5563] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Perserverance Rover Machine Learning Algorithm
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This Python algorithm uses various image processing techniques in order to better detect hazards on Mars for the various rovers.
                            </p>
                            <Link href="https://github.com/jdurham38/Mars-Rover-ImageProcessing-MachineLearning-Algorithm" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div id="project3">
                        <div className="bg-[#FECACA] dark:bg-[#374151] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Dabloon Crypto Token
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This program uses Etherium to create a ficticious crypto currency based around a growing TikTok trend.
                            </p>
                            <Link href="https://github.com/jdurham38/Dabloon-Token" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>


                    {/* Project 4 */}
                    <div id="project4">
                        <div className="bg-[#D1D5DB] dark:bg-[#252C37] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Discord Music Bot
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This software allows a user to add a discord music bot to their team so all users can listen to any music they want.
                            </p>
                            <Link href="https://github.com/jdurham38/discord-bot" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div id="project5">
                        <div className="bg-[#FDE68A] dark:bg-[#4B5563] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Hospital Management System (HMS)
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This software was made to be able to implement common infosec practices, to better obtain a more secure software.
                            </p>
                            <Link href="https://github.com/jdurham38/HMS" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div id="project6">
                        <div className="bg-[#FECACA] dark:bg-[#374151] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Mechanical Flower
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This project is a gift for my girlfriend Christina, when touched the flower will expand and an LED will turn on acting as a night light.
                            </p>
                            <Link href="https://github.com/jdurham38/MechanicalFlower" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>


                    {/* Project 7 */}
                    <div id="project7">
                        <div className="bg-[#FDE68A] dark:bg-[#4B5563] rounded-lg shadow-lg p-6 w-full mx-auto mt-10">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Elevator Simulator
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                This C++ program is used to demonstrate my knowledge with pointers and data allocation while being able to practice a common datastructure technique of linked lists.                                </p>
                            <Link href="https://github.com/jdurham38/ElevatorSimulator" passHref>
                                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                                    Learn More
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Call to Action starts here */}
                <div className="flex flex-col justify-center items-center py-20 text-center bg-[#f4f3ee] dark:bg-[#1F1F1F]">
                    <h1 className="text-3xl font-bold text-gray-500 dark:text-white mb-4">
                        Want to see more of my projects?
                    </h1>
                    <Link
                        href="https://github.com/jdurham38?tab=repositories"
                        passHref={true}
                        legacyBehavior={true}
                    >
                        <span className="bg-[#517B57] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
                            View All Projects
                        </span>
                    </Link>
                </div>
                {/* Call to Action ends here */}
            </div>

        </div>

    );
}
