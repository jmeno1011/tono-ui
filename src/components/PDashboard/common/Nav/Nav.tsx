import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from "./Nav.module.css";
const cn = classNames.bind(styles);

export default function Nav() {
  const {pathname} = useLocation();
  return (
    <nav className={styles.container}>
      <ul>
        <li className={cn('li', pathname==="/p-dashboard" && 'active')}><Link to={"/p-dashboard"}>dashboard</Link></li>
        <li className={cn('li', pathname==="/p-dashboard/p-survey" && 'active')}><Link to={"/p-dashboard/p-survey"}>survey</Link></li>
      </ul>
    </nav>
  )
}
