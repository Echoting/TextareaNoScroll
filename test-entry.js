import React from 'react';
import ReactDOM from 'react-dom';

import TextAreaNoScroll from '../src/index';

const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
const handleSelect = selection => alert(`You selected ${selection}`);

ReactDOM.render(<TextAreaNoScroll />, document.getElementById('app'));