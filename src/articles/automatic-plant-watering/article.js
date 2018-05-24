import React from 'react';

export default function article(props) {
    return (
        <div>
            <h2 className="subtitle">WHAT:</h2>
            <p>Using an Arduino and water pump I rigged a system to water my
                plant every 3 days. In the future I hope to expand this
                project to connect to wifi and use sensors such as a moisture sensor.</p>
            <h2 className="subtitle">WHY:</h2>
            <p>Because plants are sweet and I want to connect them to technology.</p>
            <h2 className="subtitle">HOW:</h2>
            <p>
                <a href="http://www.instructables.com/id/Automatically-water-your-small-indoor-plant-using-/" className="highlight"> Here's</a>
                &nbsp;the tutorial I followed.
            </p>
        </div>
    )
}