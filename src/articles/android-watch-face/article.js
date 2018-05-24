import React from 'react';

export default function article(props) {
    return (
        <div>
            <h2 className="subtitle">WHAT:</h2>
            <p>A watch face for my Android Wear smart watch.</p>
            <h2 className="subtitle">WHY:</h2>
            <p>While taking a year off from school I decided to try my hand
                at my biggest personal project ever. I didn't know it at the time but
                this relatively simple project would take me over two years to complete. The watch face 
                became a running joke amongst my friends as I blindly stated I WILL finish it. In the end the answer to "why" was less about 
                building a watch face, and more about proving I can complete what I put my mind to.
            </p>
            <h2 className="subtitle">HOW:</h2>
            <p>Android wear watch faces are&nbsp;
                <a href="https://developer.android.com/guide/components/services" className="highlight">android services</a> 
                &nbsp;built in&nbsp;
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" className="highlight">Java</a>
                &nbsp;using the Android API. You can learn about making Wear watch faces&nbsp;
                <a href="https://developer.android.com/training/wearables/watch-faces/" className="highlight">here</a>
                .&nbsp;I used&nbsp; 
                <a href="https://developer.android.com/studio/" className="highlight">Android Studio</a>
                &nbsp;as a development environment.
            </p>
        </div>
    )
}
