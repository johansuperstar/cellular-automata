import React from 'react';
import {render} from 'react-dom';

import rules from './rules';
import App from './components/App';

render(<App rules={Object.keys(rules)} />, document.getElementById('app'));
