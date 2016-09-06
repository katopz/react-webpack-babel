// import 'bootstrap/dist/css/bootstrap.min.css';
// Access all components from `muicss/react` module
// import { Appbar, Button, Container } from 'muicss/react';

// Access components individually for smaller build files (RECOMMENDED)
import Button from 'muicss/lib/react/button';

import styles from './index.less';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        <Button color="primary">muicss!</Button>
      </div>
    )
  }
}