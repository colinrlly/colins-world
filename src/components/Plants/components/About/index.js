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



        return (
            <div>
                {shown ? 
                    <p className='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
