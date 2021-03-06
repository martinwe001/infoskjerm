import React from 'react';
import {DateTime} from 'luxon';



const Clock = () => {
    const dateTime = DateTime.local().setLocale("nb-NO");

    console.log(DateTime.DATETIME_FULL_WITH_SECONDS);

    return (
    <div className="Clock">
        <h1 className="time">
            {dateTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
        </h1>
        <h1 className="date">
            {dateTime.toLocaleString({
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
        </h1>


    </div>
    )
};


export default Clock;