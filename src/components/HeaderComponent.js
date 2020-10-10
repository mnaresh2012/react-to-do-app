import React from 'react';

const HeaderComponent = () => {
    return (
        <h2 style={styles}>Todo List</h2>
    );
}
const styles = {
    padding: '10px', 
    background: '#000',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Helvetica'
};
export default HeaderComponent;