import React from "react";

export const SelectTimeframe = ({
    onTimeframeSelected,
}) => {
    return (
        <>
            <div className='grid'>
                {['yesterday', 'today', 'tomorrow'].map((timeframes) => (
                    <button className='timeframe' key={timeframes} onClick={() => onTimeframeSelected(timeframes)}>{timeframes}</button>
                ))}
            </div>
        </>
    )
}