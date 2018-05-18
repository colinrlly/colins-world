import React from 'react';

export default function article(props) {
    return (
        <div>
            <h2 className="subtitle">WHAT:</h2>
            <p>A fix for </p>
            <p>After finding a Github project which queried the NASA SRTM 
                dataset I realized it didn't work on Windows, only Linux. I 
                forked the project, figured out how it works, and replaced a 
                dependency which relied on a native Unix lirary.</p>
        </div>
    )
}