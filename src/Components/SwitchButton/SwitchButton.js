import React from 'react';

const button = (props) => (
    <button onClick={props.clicked}>{props.active ? 'Turn it off' : 'Turn it on'}</button>
);


export default button;