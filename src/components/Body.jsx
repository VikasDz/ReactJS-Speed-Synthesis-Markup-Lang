import { useState } from 'react'
import React from 'react'
import Data from '../API/Data'
import SpeechEngine from './SpeechEngine';


function Body() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentData = Data[currentIndex];

    const [playing, setPlaying] = useState(false);
    const speechSynthesisRef = SpeechEngine(
        `${currentData.content}`,
        playing
    );
    const handlePlayPauseClick = () => {
        setPlaying((prevPlaying) => !prevPlaying);
    };
    const handleNextClick = () => {
        setCurrentIndex((currentIndex) => (currentIndex + 1)% Data.length);
        setPlaying(false);
    };
    const handlePreviousClick = () => {
        if (currentIndex >= 1) {
            setCurrentIndex((currentIndex) => (currentIndex - 1)% Data.length);
            setPlaying(false);
        }
    };




    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Speech Synthesis Markup Language (SSML) </h1>
                        {/* {
                            Data.map((item) => (
                                <p class="mb-8 leading-relaxed">{item.content}</p>
                            ))
                        } */}
                        <p class="mb-8 leading-relaxed">{currentData.content}</p>
                        <div class="flex justify-center mb-52">
                            <button onClick={handlePreviousClick} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-4">Previous</button>
                            <button onClick={handlePlayPauseClick} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-4">{playing ? 'Pause' : 'Play'}</button>
                            <button onClick={handleNextClick} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-4">Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Body
