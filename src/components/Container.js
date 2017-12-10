import React from 'react';
import Header from './Header';
import styles from './container.css'

const Container = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <main className="mdl-layout__content">
      <div className="page-content">
        <div className="mdl-grid">
          <div className={`mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet ${styles.content}`}>
            {props.children}
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Container;