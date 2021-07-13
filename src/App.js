import "./App.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import BigBlog from "./Components/BigBlog";
import Category from "./Components/Category";
import Lists from "./Components/Lists";
import Posters from "./Components/Posters";
import BigPoster from "./Components/BigPoster";
import Authors from "./Components/Authors";
import Contact from "./Components/Contact";
import { NavLink } from "react-router-dom";
import Logo from "./Assets/Images/LOGO.svg";
import { useState } from "react";
import Search from "./Components/BigSearch";
import Author from "./Components/Author";
import Loading from "./Components/Loading";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-sidebar">
          <Sidebar />
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={Logo} alt="" />
            </div>
            <div onClick={() => setShow(!show)} className="navbar-bar">
              <i className="fas fa-bars"></i>
            </div>

            <div
              style={{ height: `${show ? "100vh" : ""}` }}
              className="nav-side"
            >
              {/*  */}
              <div className="sidebar-links">
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  exact
                  to="/"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-home    "></i>
                  </div>
                  <div>মূলপাতা</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/category/islam"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-mosque    "></i>
                  </div>
                  <div>ইসলাম</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/category/ummah"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-users    "></i>
                  </div>
                  <div>উম্মাহ</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/category/bad_motobad"
                  className={`  sidebar-link`}
                >
                  <div>
                    <i className="fas fa-lightbulb    "></i>
                  </div>
                  <div>বাদ-মতবাদ</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/category/shobbhotar_dondho"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-sort-amount-up    "></i>
                  </div>
                  <div>সভ্যতার দ্বন্ধ</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/category/shomoshamoik"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-history    "></i>
                  </div>
                  <div>সমসায়িক</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/lists"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-list-ul    "></i>
                  </div>
                  <div>তালিকাসমূহ</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/posters"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-paint-brush    "></i>
                  </div>
                  <div>পোস্টার</div>
                </NavLink>
              </div>
              {/*  */}
              <div className="sidebar-links-footer">
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/authors"
                  className={`  sidebar-link`}
                >
                  <div>
                    <i className="fas fa-pen    "></i>
                  </div>
                  <div>লেখকগণ</div>
                </NavLink>
                <NavLink
                  activeClassName="active-link"
                  onClick={() => setShow(!setShow)}
                  to="/contact"
                  className={` sidebar-link`}
                >
                  <div>
                    <i className="fas fa-wifi    "></i>
                  </div>
                  <div>যোগাযোগ</div>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="app-main">
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/authors">
            <Authors />
          </Route>
          <Route exact path="/lists">
            <Lists />
          </Route>
          <Route exact path="/posters">
            <Posters />
          </Route>
          <Route exact path="/poster/:poster">
            <BigPoster />
          </Route>
          <Route exact path="/category/:category">
            <Category />
          </Route>
          <Route exact path="/id/:id">
            <BigBlog />
          </Route>
          <Route exact path="/author/:author">
            <Author />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/loading">
            <Loading />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
