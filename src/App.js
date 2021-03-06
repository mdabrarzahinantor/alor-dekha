import "./App.css";
import { NavLink } from "react-router-dom";
import Logo from "./Assets/Images/LOGO.svg";
import { lazy, useState, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Loading from "./Components/Loading";
const Sidebar = lazy(() => import("./Components/Sidebar"));
const Main = lazy(() => import("./Components/Main"));
const BigBlog = lazy(() => import("./Components/BigBlog"));
const Category = lazy(() => import("./Components/Category"));
const Lists = lazy(() => import("./Components/Lists"));
const Posters = lazy(() => import("./Components/Posters"));
const BigPoster = lazy(() => import("./Components/BigPoster"));
const Authors = lazy(() => import("./Components/Authors"));
const Contact = lazy(() => import("./Components/Contact"));
const Search = lazy(() => import("./Components/BigSearch"));
const Author = lazy(() => import("./Components/Author"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                backgroundColor: "#212121",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Loading />
            </div>
          }
        >
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
                    <div>?????????????????????</div>
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
                    <div>???????????????</div>
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
                    <div>??????????????????</div>
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
                    <div>?????????-???????????????</div>
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
                    <div>????????????????????? ??????????????????</div>
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
                    <div>?????????????????????</div>
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
                    <div>??????????????????????????????</div>
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
                    <div>?????????????????????</div>
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
                    <div>??????????????????</div>
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
                    <div>?????????????????????</div>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
