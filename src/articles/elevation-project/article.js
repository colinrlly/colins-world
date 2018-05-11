import React from 'react';

export default function article(props) {
    return (
        <p>After find a Github project which queried the NASA SRTM dataset I realized it didn't work on Windows, only Linux. I forked the project, figure out how it works, and replaced a dependency which relied on a native Unix lirary.</p>
    )
}