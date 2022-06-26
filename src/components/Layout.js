import React from 'react'
import Nav from './nav/Nav';
import classes from "../styles/Layout.module.css";

const Layout = ({Children}) => {
  return (
    <>
    <Nav/>
    <main className={classes.main}>
      <div className={classes.container}>
        {Children}
        
        hello from layout
      </div>
      </main>
    </>
  )
}

export default Layout;