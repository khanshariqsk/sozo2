import React from "react";
import "./Header.css";
import logo from "../img/sozo.jpg";
import user from "../img/user.svg";
import Dashboard from "../Dashboard/Dashboard";
import Group_user from "../img/Group_user.svg";
import HomeIcon from "../img/home_icon.svg";
import DocumentIcon from "../img/doc_icon.svg";
import TemplateIcon from "../img/tex-template.svg";
import LogoutIcon from "../img/logout_icon.svg";
import ComputerIcon from "../img/computer.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthContext from "../Auth/Auth-context"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggeledContent = this.toggeledContent.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      humbergar: true,
      toggeled: true,
    };
  }
  static contextType = AuthContext
  toggeledContent() {
    this.setState({
      toggeled: !this.state.toggeled,
      humbergar: !this.state.humbergar,
    });
  }
  logout(){
    this.context.logout()
  }

  render() {
    const { humbergar } = this.state;
    const { toggeled } = this.state;
    return (
      <div
        className={`${toggeled === true ? "d-flex" : "d-flex toggled"}`}
        id="wrapper"
      >
        <div className="border-right" id="sidebar-wrapper">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action menu-head">
              <img src={logo} width="20" />

              <span className="span-title">SOZO</span>
            </li>
            <li className="list-group-item list-group-item-action btn_option">
              <div className="dropdown text-center">
                <button
                  className="btn_new_document dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  New Document
                </button>
                <button
                  className="btn btn-primary show_add_btn"
                  data-toggle="modal"
                  data-target="#exampleModal3"
                  style={{
                    backgroundColor: "#137EF9",
                    color: "#FFFFFF",
                    display: "none",
                  }}
                >
                  <i
                    className="fa fa-plus side_doc_add_icon"
                    aria-hidden="true"
                  ></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-arrow-new-doc doc-subMenu"
                  aria-labelledby="dropdownMenu2"
                >
                  <Link to="/drawing" className="new_whiteboard">
                    <button className="dropdown-item white_board" type="button">
                      <span className="canvas_link">
                      <i
                        className="fas fa-desktop mr-2"
                        style={{ color: "#AAD2FF" }}
                      ></i>
                      New Whiteboard
                      </span>
                    </button>
                  </Link>
                  <button className="dropdown-item new_folder" type="button">
                    <i
                      className="fas fa-folder mr-2"
                      style={{ color: "#AAD2FF" }}
                    ></i>
                    New Folder
                  </button>
                </div>
              </div>
            </li>
            <div className="menu">
              <li className="list-group-item list-group-item-action active">
                <a href="#" className="home">
                  <img src={HomeIcon} width="30"/>
                  <span style={{marginLeft: "15px"}}>Home</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#" className="Documents">
                  <img src={DocumentIcon} width="30" height="30"/>
                  <span style={{ color: "#202225", marginLeft: "15px" }}>Documents</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#" className="Templates">
                 <img src={TemplateIcon} width="30" height="30"/>
                  <span style={{ color: "#202225", marginLeft: "15px" }}>Templates</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#" className="Training">
                  <img src={ComputerIcon} width="30" height="30"/>
                  <span style={{ color: "#202225", marginLeft: "15px" }}>Training</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light" style={{borderBottom: "1px solid #ccc"}}>
            <button
              className="btn toggle_btn"
              id="menu-toggle"
              style={{ margin: "0px !important;" }}
            >
              <i
                className={`${
                  humbergar === true
                    ? "fas fa-angle-double-left"
                    : "fas fa-angle-double-right"
                }`}
                onClick={this.toggeledContent}
                style={{ color: "#137EF9" }}
              ></i>
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="navbar-toggler-icon"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <input
                      type="text"
                      className="search_box"
                      placeholder="Search here..."
                      name="search"
                    />
                      <i className="fa fa-search search_btn"></i>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell notification_btn"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-arrow-notfy dropDown_notify dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item notify_header">
                      <h6>
                        <b>Notifications</b>
                        <label
                          style={{
                            float: "right",
                            marginLeft: "15px",
                            color: "#137EF9",
                          }}
                        >
                          Clear All
                        </label>
                        <span style={{ float: "right" }}>
                          <i
                            className="fas fa-cog"
                            style={{ color: "#137EF9" }}
                          ></i>
                        </span>
                      </h6>
                    </a>

                    <ul className="list-group">
                      <li className="list-group-item" style={{ border: "none" }}>
                        <a className="dropdown-item notification_list" href="#">
                          <div className="row">
                            <div className="col-md-2">
                              <img src={Group_user} width="35" />
                            </div>
                            <div className="col-md-10">
                              <label style={{ marginBottom: "0px" }}>
                                <b>John</b>{" "}
                                <span style={{ color: "#B8B8B8" }}>Shared</span>{" "}
                                <b>New document</b>
                              </label>
                              <p style={{ fontSize: "12px", color: "#919191" }}>
                                December 3, 20 - 02:26 Am
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul className="list-group">
                      <li className="list-group-item" style={{ border: "none" }}>
                        <a className="dropdown-item notification_list" href="#">
                          <div className="row">
                            <div className="col-md-2">
                              <img src={Group_user} width="35" />
                            </div>
                            <div className="col-md-10">
                              <label style={{ marginBottom: "0px" }}>
                                <b>John</b>{" "}
                                <span style={{ color: "#B8B8B8" }}>Shared</span>{" "}
                                <b>New document</b>
                              </label>
                              <p style={{ fontSize: "12px", color: "#919191" }}>
                                December 3, 20 - 02:26 Am
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul className="list-group">
                      <li className="list-group-item" style={{ border: "none" }}>
                        <a className="dropdown-item notification_list" href="#">
                          <div className="row">
                            <div className="col-md-2">
                              <img src={Group_user} width="35" />
                            </div>
                            <div className="col-md-10">
                              <label style={{ marginBottom: "0px" }}>
                                <b>John</b>{" "}
                                <span style={{ color: "#B8B8B8" }}>Shared</span>{" "}
                                <b>New document</b>
                              </label>
                              <p style={{ fontSize: "12px", color: "#919191" }}>
                                December 3, 20 - 02:26 Am
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown_icon"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div
                    className="dropdown-menu dropdown-menu-arrow dropdown-menu-right user-profile"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i
                        className="fas fa-user user-profile-icons"
                        style={{ color: "#137EF9" }}
                      ></i>
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fas fa-cog user-profile-icons"
                        style={{ color: "#137EF9" }}
                      ></i>
                      Settings
                    </a>

                    <a className="dropdown-item" href="#">
                      <img src={LogoutIcon} width="15"/>
                      <a style={{ color: "#fb081f", marginLeft: "12px" }} onClick={this.logout}>LogOut</a>
                    </a>
                  </div>
                </li>
                <li className="nav-item profile_img">
                  <img src={user} width="40" />
                </li>
                <li className="nav-item">
                  <button className="Upgrade_btn">
                    <i className="fas fa-crown mr-10"></i>
                    <label>Upgrade Now</label>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <Dashboard></Dashboard>
        </div>
      </div>
    );
  }
}
export default Header;
