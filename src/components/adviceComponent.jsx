import React, { useEffect, useState } from "react";
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';
import { ClipLoader } from "react-spinners";

const Advice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() =>{
            fetchData();
        },2000);
    }, []);

    const generateAdvice = () => {
        setLoading(true); 
        setError(null); 

        setTimeout(() => {
            fetchData();
        }, 2000); 
    };

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
                throw new Error(`Network error: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            setData(result); 
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="relative bg-neutral-darkGrayishBlue max-w-[400px] rounded-lg p-8">
            <h4 className="text-center text-primary-neonGreen text-[.6rem] tracking-mega mb-4 uppercase">
                Advice #{
                    loading ? (
                        <ClipLoader color="#36d7b7" loading={loading} size={10}/>
                    ): error ? ('') : (
                        `${data?.slip?.id || ''}`
                    )
                }
            </h4>
            <p className="text-center text-xl text-primary-lightCyan font-bold mb-7">
                {loading ? (
                    <ClipLoader color="#36d7b7" loading={loading} size={50} />
                ) : error ? (
                    `${error}`
                ) : (
                    `"${data?.slip?.advice || 'No advice available.'}"`
                )}
            </p>
            <div className="mb-5">
                <img src={patternDividerDesktop} alt="pattern divider" />
            </div>
            <button
                onClick={generateAdvice}
                className="bg-primary-neonGreen absolute top-[89%] left-[43.5%] p-4 rounded-full transition-shadow duration-300 hover:shadow-neonGreen"
            >
                <img className="block w-5" src={iconDice} alt="generate next quote" />
            </button>
        </div>
    );
};

export default Advice;
