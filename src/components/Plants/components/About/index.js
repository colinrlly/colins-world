import React, { Component } from 'react';

import './style.css'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: false
        };

        this.onRevealerClick = this.onRevealerClick.bind(this);
        window.addEventListener("resize", this.onResize.bind(this));
    }

    onRevealerClick() {
        this.setState({
            shown: true
        })
    };

    onResize() {
        this.setState({ shown: window.innerWidth >= 940 });
    }

    componentDidMount() {
        this.onResize();
    }

    render() { 
        const {shown} = this.state;
        https://forum.openag.media.mit.edu/t/300-food-computer-mvp/2343
        return (
            <div>
                {shown ? 
                    <p className='about_text'>The&nbsp;
                    <a href="https://developer.telerik.com/featured/oauth-has-ruined-everything/" className="highlight">MVP</a>
                    &nbsp;(Minimal Viable Product) is a low cost, hydroponic growth chamber; designed as a simplified version of the&nbsp;
                    <a href="https://developer.telerik.com/featured/oauth-has-ruined-everything/" className="highlight">MIT OpenAg Personal Food Computer</a>.
                    This project allowed me explore hydropnics, controlled environment agriculture, and the internet of things. This is an 
                    open source project based around a Raspberry Pi 'brain' and Python code, 
                    with a MongoDB database.</p>
                :
                    <button
                        onClick={this.onRevealerClick}
                        className='revealer_btn'>
                        About
                    </button>
                }
            </div>
        )
    }
}

export default About;
