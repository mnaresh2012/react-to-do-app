import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <p style={styles}>www.footer.com | all right reserved.</p>
        );
    }
}

const styles = {
    textAlign: 'center',
    background: '#000',
    color: 'white',
    padding: '10px 0'
};

export default FooterComponent;