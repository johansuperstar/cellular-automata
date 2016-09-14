import React from 'react';

const Cell = (props) => <div className={props.enabled ? 'cell enabled' : 'cell'}></div>;

export default Cell;
