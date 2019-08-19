import React, { Component } from 'react';

class Language extends Component {
    nav() {
        window.location.href = this.props.tUri;
    }

    render() {
        return (
            <button className={this.props.tClass} id={this.props.tName} onClick={this.nav}>
                <img src={"%PUBLIC_URL%/resources/".concat(this.props.tThumb)} />
            </button>
        );
    }

}

export default Language;