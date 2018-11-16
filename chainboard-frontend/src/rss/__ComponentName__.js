import React/* IF class */, { Component }/* ENDIF */ from 'react';
/* ENDIF */
import styles from './__ComponentName__.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/* IF !class */
const __ComponentName__ = () => (
  <div>
    __ComponentName__
  </div>
);
/* ENDIF *//* IF class*/
class __ComponentName__ extends Component {
  render() {
    return (
      <div>
        __ComponentName__
      </div>
    );
  }
}
/* ENDIF */

export default __ComponentName__;