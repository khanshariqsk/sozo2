import React from "react";
import "./Dashboard.css";
import Group_user from "../img/Group_user.svg";
import copy from "../img/copy.png";
import share_profile_img from "../img/share_profile_img.svg";
import edit_icon from "../img/edit_icon.svg";
import comment_icon from "../img/comment_icon.svg";
import view_icon from "../img/view_icon.svg";
import check_icon from "../img/check_icon.svg";
import collaboration_icon from "../img/collaboration_icon.svg";
import coll_user from "../img/coll_user.svg";
import collaborat_icon from "../img/collaborat_icon.svg";
import coll_tag from "../img/coll_tag.svg";
import S1 from "../img/s1.svg";
import sozo from "../img/sozo.jpg";
import rect from "../img/rect.svg";
import CloseNewDoc from "../img/close_new_doc.svg";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="container-fluid Dashboard">
        <h3 className="welcome_user_name">
          <strong>Welcome, Tayyabzeb!</strong>
        </h3>
        <nav className="nav dashboard_doc_tab">
          <a className="nav-link active" href="#">
            Recent Document
          </a>
          <a className="nav-link" href="#" style={{ color: "#B8B8B8" }}>
            Recommend Documents
          </a>
        </nav>
        <div className="row template_list">
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <div className="template_img"></div>
            <div className="vertical-center">
              <button className="view_template_btn">Tap to Open</button>
              <img src={Group_user} className="user" />
            </div>
            <div className="row share_more">
              <div className="col-md-6">
                <a
                  role="button"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                >
                  <i className="fas fa-share share_icon"></i>
                  <h6 className="share_opt_btn">Share</h6>
                </a>
              </div>
              <div className="col-md-6">
                <div className="dropdown show">
                  <a
                    className="btn_more_opt"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h more_icon"></i>
                    <h6 className="more_opt_btn">More</h6>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-arrow-dash-more-link more_list"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Open
                      {/* <hr/> */}
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      data-whatever="@mdo"
                    >
                      Rename
                      {/* <hr/> */}
                    </a>

                    <a className="dropdown-item" href="#">
                      Delete
                      {/* <hr/> */}
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Share
                      {/* <hr/> */}
                    </a>
                    <a className="dropdown-item" href="#">
                      Add to starred
                      {/* <hr/> */}
                    </a>
                    <a className="dropdown-item" href="#">
                      Get Changed Notifications
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ********************************Modal on share withh others*************** --> */}
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content" style={{borderRadius: "15px"}}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      <strong>Share with others</strong>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                        <img src={CloseNewDoc}/>
                      {/* <span aria-hidden="true">&times;</span> */}
                    </button>
                  </div>
                  <div className="modal-body">
                    <h6>
                      Link share is on{" "}
                      <span style={{ float: "right", color: "#B8B8B8" }}>
                        Shareable link
                        <img
                          src={check_icon}
                          style={{ width: "20px", margin: "0px 0px 2px 5px" }}
                          alt="Shareable link"
                        />
                      </span>
                    </h6>
                    <select className="added_share_option">
                      <option>Edit and share ( public )</option>
                      <option>Edit and share ( public )</option>
                    </select>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input_copy_button"
                        placeholder="https://www.flaticon.com/free-icon/copy-content_60990?term=copy&page"
                        aria-describedby="button-addon2"
                        disabled
                      />
                      <button
                        className="btn copy_input_button"
                        type="button"
                        id="button-addon2"
                      >
                        <img src={copy} />
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <h5 className="lbl-people">People</h5>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control people_input_button"
                      placeholder="Add more people here...."
                      aria-describedby="button-addon2"
                    />

                    <div className="dropdown">
                      <button
                        className="btn people_drop_button"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        
                        <img src={share_profile_img} />
                        <i className="fas fa-caret-down"></i>
                      </button>
                      <div className="dropdown">
                        <div
                          className="dropdown-menu add_more_user_btn"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item active" href="#">
                            
                            <img src={share_profile_img} />
                            Edit and Share
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={edit_icon} />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={comment_icon} />
                            Comment
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={view_icon} />
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="lbl-shared">
                    Shared with John Doe +3 more.{" "}
                    <span href="#" style={{ color: "#137EF9" }}>
                      <u>
                        <b>Edit</b>
                      </u>
                    </span>
                  </p>
                  <textarea
                    rows="3"
                    className="share_comment"
                    placeholder="Add Custom Comments here..."
                  ></textarea>
                  <div className="modal-footer" style={{ borderTop: "0px" }}>
                    <button
                      type="button"
                      className="btn can_share_btn "
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn  adv_share_btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Advanced
                    </button>
                    <button type="button" className="btn btn-primary done_btn">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***************** Modal Start ****************** --> */}

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ width: "130%", borderRadius: "15px", height: "700px" }}>
                  <div className="modal-header" style={{ borderBottom: "0px" }}>
                    <h5 className="modal-title" id="exampleModalLabel">
                      Advanced Share Settings
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                        <img src={CloseNewDoc}/>
                      {/* <span aria-hidden="true">&times;</span> */}
                    </button>
                  </div>
                  <div className="modal-body" style={{ padding: "0px" }}>
                    <div className="d-flex align-items-start">
                      <div
                        className="flex-column Collaboration_list nav-pills me-3"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={collaboration_icon} className="collaboration_icon"/>
                          With Collaboration
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right dropdown-menu-arrow-collaboration add_collaboration"
                          aria-labelledby="navbarDropdown"
                        >
                          <h5 className="lbl-Collaborations">
                            Add Collaborations
                          </h5> 
                          <div className="add-lbl-Collaborations">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="People" name="materialExampleRadios"/>
                                <label className="form-check-label" for=" People"> People</label>
                            </div>
                             <div className="form-check share_link">
                                <input type="radio" className="form-check-input" id="Shareable Link" name="materialExampleRadios"/>
                                <label className="form-check-label" for="Shareable Link">Shareable Link</label>
                             </div>
                          </div>
                          <div className="input-group advance-section">
                            <input
                              type="text"
                              className="form-control input_drop_button"
                              placeholder="Add more people here...."
                              aria-describedby="button-addon2"
                            />
                            <div className="dropdown">
                              <button
                                className="btn drop_input_button"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src={share_profile_img}
                                  className="drop_input-img"
                                />
                                <i className="fas fa-caret-down"></i>
                              </button>
                                <div
                                  className="dropdown-menu add_more_user_btn"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    style={{ color: "#137EF9" }}
                                  >
                                    <img src={share_profile_img} />
                                    Edit and Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <img src={edit_icon} />
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <img src={comment_icon} />
                                    Comment
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <img src={view_icon} />
                                    View
                                  </a>
                                </div>
                            </div>
                              <textarea
                              rows="4"
                              className="share_comment"
                              placeholder="Add Custom Comments here..."
                              style={{ width: "91%" }}
                            ></textarea>
                            <button
                              type="button"
                              className="btn btn-primary share_advance_btn"
                              style={{ marginLeft: "278px", marginTop: "15px", padding: "10px 40px" }}
                            >
                              Share
                            </button>
                            <h5 style={{marginLeft: "5px"}}>Collaborations</h5>
                          <ul
                            className="list-group"
                            style={{
                             width: "90%",
                             marginLeft: "5px"
                            }}
                          >
                            <li className="list-group-item coll_list">
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={coll_user}
                                    style={{ marginLeft: "15px" }}
                                  />
                                </div>
                                <div className="col-md-5">
                                  <label>Chad Ingram</label>
                                </div>
                                <div className="col-md-5">
                                  <label>Owner</label>
                                </div>
                              </div>
                            </li>
                            <li
                              className="list-group-item coll_list"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={coll_tag}
                                    style={{ marginLeft: "15px" }}
                                  />
                                </div>
                                <div className="col-md-5">
                                  <label style={{ color: "#137EF9" }}>
                                    Chad Ingram
                                  </label>
                                </div>
                                <div className="col-md-5">
                                  <p>Can Edit & Share</p>
                                </div>
                              </div>
                            </li>
                            <li
                              className="list-group-item coll_list"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={coll_user}
                                    style={{ marginLeft: "15px" }}
                                  />
                                </div>
                                <div className="col-md-5">
                                  <label>Chad Ingram</label>
                                </div>
                                <div className="col-md-5">
                                  <p>Can Edit & Share</p>
                                </div>
                              </div>
                            </li>
                            <li
                              className="list-group-item coll_list"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={coll_user}
                                    style={{ marginLeft: "15px" }}
                                  />
                                </div>
                                <div className="col-md-5">
                                  <label>Chad Ingram</label>
                                </div>
                                <div className="col-md-5">
                                  <p>Can Edit & Share</p>
                                </div>
                                </div>
                                </li>
                              </ul>
                            </div>
                            <div>
                          </div>
                        </div>
                        <a
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          href="#"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          <img src={collaboration_icon} className="collaboration_icon"/>
                          With Collaboration
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          href="#"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                        <img src={collaboration_icon} className="collaboration_icon"/>
                          With Collaboration
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                         <img src={collaboration_icon} className="collaboration_icon"/>
                          With Collaboration
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                         <img src={collaboration_icon} className="collaboration_icon"/>
                          With Collaboration
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ******************Modal One Rename Doc ******************** --> */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{borderRadius: "15px"}}>
                  <div className="modal-header rename_head">
                    <h5 className="modal-title" id="exampleModalLabel">
                      <strong>Rename Document</strong>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                       <img src={CloseNewDoc}/>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label for="recipient-name" className="col-form-label">
                          Enter your new document Name:
                        </label>
                        <input
                          type="text"
                          className="form-control new_rename_box"
                          id="recipient-name"
                          style={{borderColor: "#D4E5F9"}}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer rename_doc_btn">
                    <button
                      type="button"
                      className="btn btn-secondary cancel_btn"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary rename_btn"
                    >
                      Rename
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content" style={{borderRadius: "15px"}}>
                  <div className="modal-header name_before">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {" "}
                      <strong>Name Before Sharing</strong>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label for="recipient-name" className="col-form-label">
                          Please name your untitled document before sharing:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer rename_doc_btn">
                    <button
                      type="button"
                      className="btn skip_btn "
                      style={{ border: "1px solid #B8B8B8" }}
                    >
                      Skip
                    </button>
                    <button type="button" className="btn btn-primary save_btn">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--*********************button new doc***************************  --> */}
            <div
              className="modal fade"
              id="exampleModal3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content" style={{borderRadius: "15px"}}>
                  <div className="modal-header new_doc_head">
                    <h5 className="modal-title" id="exampleModalLabel">
                      <b>New Document</b>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src={CloseNewDoc}/>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body text-center">
                    <img src={S1} width="300" />
                    <p>
                      Create New Documents & Share with your friends{" "}
                      <style type="text-center"></style>
                    </p>
                  </div>
                  <div className="modal-footer new_doc_btn">
                    <button
                      type="button"
                      className="btn btn-outline-primary get_btn"
                    >
                      Get Started!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <div className="template_img"></div>
            <div className="vertical-center">
              <button className="view_template_btn">Tap to Open</button>
              <img src={Group_user} className="user" />
            </div>
            <div className="row template_name">
              <div className="col-md-2" style={{ paddingRight: "0px;" }}>
                <img src={sozo} width="15" />
              </div>
              <div className="col-md-10" style={{ paddingLeft: "0px" }}>
                <label
                  style={{ fontWeight: "800", fontSize: "13px", margin: "0px" }}
                >
                  Align Original SiteMap
                </label>
                <h6 style={{ color: "#A2A2A2", fontSize: "10px" }}>
                  Open an hour ago
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <div className="template_img"></div>
            <div className="vertical-center">
              <button className="view_template_btn">Tap to Open</button>
              <img src={Group_user} className="user" />
            </div>
            <div className="row template_name">
              <div className="col-md-2" style={{ paddingRight: "0px" }}>
                <img src={sozo} width="15" />
              </div>
              <div className="col-md-10" style={{ paddingLeft: "0px" }}>
                <label
                  style={{ fontWeight: "800", fontSize: "13px", margin: "0px" }}
                >
                  Align Original SiteMap
                </label>
                <h6 style={{ color: "#A2A2A2", fontSize: "10px" }}>
                  Open an hour ago
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <div className="template_img"></div>
            <div className="vertical-center">
              <button className="view_template_btn">Tap to Open</button>
              <img src={Group_user} className="user" />
            </div>
            <div className="row template_name">
              <div className="col-md-2" style={{ paddingRight: "0px" }}>
                <img src={sozo} width="15" />
              </div>
              <div className="col-md-10" style={{ paddingLeft: "0px" }}>
                <label
                  style={{ fontWeight: "800", fontSize: "13px", margin: "0px" }}
                >
                  Align Original SiteMap
                </label>
                <h6 style={{ color: "#A2A2A2", fontSize: "10px" }}>
                  Open an hour ago
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "40px", backgroundColor: "#F6FBFE" }}>
          <h5
            style={{
              textAlign: "center",
              fontWeight: "800",
              paddingTop: "15px",
            }}
          >
            What you like to do!
          </h5>
          <div className="row" style={{ padding: "50px" }}>
            <div className="col-md-4" style={{ textAlign: "right" }}>
              <img src={rect} />
              <i className="fas fa-users team_work_icon"></i>
              <p style={{ color: "#137EF9", marginTop: "5px" }}>
                Better Teamwork together
              </p>
            </div>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <img src={rect} />
              <i className="fas fa-magic quick_action"></i>
              <p style={{ color: "#137EF9", marginTop: "5px" }}>
                How to Quick Action
              </p>
            </div>
            <div className="col-md-4">
              <img src={rect} />
              <i className="far fa-clipboard notes_icon"></i>
              <p style={{ color: "#137EF9", marginTop: "5px" }}>
                Stay focus with Notes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
