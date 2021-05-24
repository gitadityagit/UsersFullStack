import React, { Component } from 'react';

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <p className="display-6">Welcome {this.props.match.params.name}. <span style={{ color: "green" }}>You have logged in Successfully !</span></p>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;