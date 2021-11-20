import React from 'react';

function Category(props) {
    return (  
        <h2 className="text-left m-3 text-blue">{props.text}</h2>
    );
}

export default Category;