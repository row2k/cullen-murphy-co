import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './modules/App/App';

import registerServiceWorker from './registerServiceWorker';

class Helium extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500);
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return (
        null
      );
    }
    return (
      <div>
        <Router>
          <App/>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Helium/>, document.getElementById('root'));
registerServiceWorker();
