import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Footer = ({children}) => (
  
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>File Jong</Link>
    <div  className={cx('admin-login')}>
    {children}
    </div>
  </footer>
);



export default Footer;
