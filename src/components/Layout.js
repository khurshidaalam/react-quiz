import classes from "../styles/Layout.module.css";
import Nav from "./nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
