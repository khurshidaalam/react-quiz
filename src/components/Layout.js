import React from 'react'
import Nav from './nav/Nav';
import classes from "../styles/Layout.module.css";

const Layout = ({Children}) => {
  return (
    <>
    <Nav/>
    <main class={classes.main}>
      <div class={classes.container}>
        {Children}
      </div>
      </main>
    </>
  )
}

export default Layout