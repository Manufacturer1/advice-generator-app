import React from "react";
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';

const Advice = () =>{
    
    return (
        <>
            <div className="relative bg-neutral-darkGrayishBlue max-w-[400px] rounded-lg p-8">
                <h4 className="text-center text-primary-neonGreen text-[.6rem] tracking-mega mb-4 uppercase">Advice #117</h4>
                <p className="text-center text-xl text-primary-lightCyan font-bold mb-7">
                    <span className="block max-w-[300px]">&quot;It is easy to sit up and take</span> notice
                     what's difficult is getting up and taking action.&quot;
                </p>
                <div className="mb-5">
                    <img src={patternDividerDesktop} alt="pattern divider" />
                </div>
                <button className="bg-primary-neonGreen absolute top-[89%] left-[43.5%] p-4 rounded-full transition-shadow duration-300 hover:shadow-neonGreen ">
                    <img className="block w-5" src={iconDice} alt="generate next quote"/>
                </button>
            </div>
        </>
    );
};

export default Advice;