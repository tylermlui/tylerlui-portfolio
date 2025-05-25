'use client';
import { useState, useEffect } from 'react';
// Assuming FlyIn component exists in '../components/FlyInComponent'
// If it doesn't, you might need to provide its implementation or remove it for the code to run.
import FlyIn from '../components/FlyInComponent';

export default function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // New state to control the animation of the modal's content
    const [showModalContent, setShowModalContent] = useState(false);

    // Define the duration of the modal's fade-in/out transition
    const modalTransitionDuration = 300; // milliseconds (adjust as needed)

    const toggleModal = () => {
        if (isModalOpen) {
            // If the modal is currently open, start the fade-out animation
            setShowModalContent(false);
            // After the animation duration, close the modal completely
            setTimeout(() => {
                setIsModalOpen(false);
            }, modalTransitionDuration);
        } else {
            // If the modal is currently closed, open it (make background visible)
            setIsModalOpen(true);
            // After a very short delay, trigger the fade-in animation
            setTimeout(() => {
                setShowModalContent(true);
            }, 50);
        }
    };

    return(
        <nav className="px-[8vw] z-[9999] relative">
            <div className="flex flex-wrap items-center justify-between mx-auto pt-[2vw]">
                <img src="/TL.png" className="h-8" alt="TL Logo" />
                <button
                    type="button"
                    className="group inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg transition-all duration-300"
                    onClick={toggleModal}
                >
                    <svg
                        className="w-5 h-5"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 1h-9"
                            className="stroke-white stroke-2 group-hover:opacity-0 transition-all duration-300"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 7h15"
                            className="stroke-white stroke-2 transition-all duration-300"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 13h-9"
                            className="stroke-white stroke-2 group-hover:opacity-0 transition-all duration-300"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {isModalOpen && (
                <div className={`fixed inset-0 bg-black flex items-center justify-start z-[10000] transition-opacity duration-${modalTransitionDuration} ease-out ${showModalContent ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className={`
                            w-full h-full flex flex-col items-start justify-center px-[8vw] relative
                            transition-opacity duration-${modalTransitionDuration} ease-out
                            ${showModalContent ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-gray-300 text-4xl"
                            onClick={toggleModal}
                        >
                            &times;
                        </button>
                        <ul className="space-y-6 text-left">
                            <FlyIn delayMs={0}>
                                <li>
                                    <a href="/" className="text-white hover:underline text-8xl font-medium" onClick={toggleModal}>Home</a>
                                </li>
                            </FlyIn>
                            <FlyIn delayMs={100}>
                                <li>
                                    <a href="https://github.com/tylermlui" target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-8xl font-medium" onClick={toggleModal}>GitHub</a>
                                </li>
                            </FlyIn>
                            <FlyIn delayMs={200}>
                                <li>
                                    <a href="https://www.linkedin.com/in/tyler-lui-82779721b/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-8xl font-medium" onClick={toggleModal}>LinkedIn</a>
                                </li>
                            </FlyIn>
                            <FlyIn delayMs={300}>
                                <li>
                                    <a href="mailto:tylerlui@gmail.com" className="text-white hover:underline text-8xl font-medium" onClick={toggleModal}>Email</a>
                                </li>
                            </FlyIn>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}