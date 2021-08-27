import React from 'react';

const Error = ({ statusErr }) => {
    console.log(statusErr)
    return <div className="error">{`Error matherfuck?? ${statusErr}`}</div>
}

export default Error;