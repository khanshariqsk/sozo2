import React from "react";
import "./Drawing.css";
import Sketch from "react-p5";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Square from "./SquareComponent/Square";
import Rectangle from "./RectangleComponent/Rectangle";
import Stars from "./StarComponent/Stars";
import Circles from "./CircleComponent/Circles";
import Diamonds from "./DiamondComponent/Diamonds";
import Hexagon from "./HexagonComponent/Hexagon";
import Triangles from "./TriangleComponet/Triangles";
import TextDraw from "./TextComponent/TextDraw";
// import TextEditeController from './TextComponent/TextEditeController';
import { Stage, Layer, Arrow } from "react-konva";
import Screen1 from "../img/screen1.svg";
import Screen2 from "../img/screen2.svg";
import Screen3 from "../img/screen3.svg";
import SortName from "../img/sort_name.svg";
import Logo from "../img/sozo.jpg";
import TeamUser from "../img/team_user.svg";
import RevisionHistIcon from "../img/revision_hist_icon.svg";
import CursorIcon from "../img/cursor_icon.svg";
import TextIcon from "../img/text_icon.svg";
import ColorPaletteIcon from "../img/color_palette_icon.svg";
import ShapesIcon from "../img/shapes_icon.svg";
import ArrowIcon from "../img/arrow_icon.svg";
import FreeDrawingIcon from "../img/free_drawing_icon.svg";
import ContainerIcon from "../img/container_icon.svg";
import ToolIcon from "../img/tool_icon.svg";
import SaveIcon from "../img/Save_icon.svg";
import TeamIcon from "../img/team_icon.svg";
import NotesIcon from "../img/notes_icon.svg";
import ShareIcon from "../img/share_icon.svg";
import ChatShapes from "../img/chat_shapes.svg";
import EmojiShapes from "../img/emoji_shapes.svg";
import LabelShapes from "../img/label_shapes.svg";
import LockShapes from "../img/lock_shapes.svg";
import DemoIcon from "../img/demo_tag_icon.svg";
import DeleteTag from "../img/delete_tag.svg";
import BackwardIcon from "../img/backward_icon.svg";
import ForwardIcon from "../img/forward_icon.svg";
import HistoryIcon from "../img/history_icon.svg";
import CaptureIcon from "../img/capture_icon.svg";
import LocationIcon from "../img/location_icon.svg";
import ZoomIn from "../img/zoom_in.svg";
import ZoomOut from "../img/zoom_out.svg";
import NotesTextIcon from "../img/notes_text_icon.svg";
import AddUserIcon from "../img/add_user_icon.svg";
import Konva from "konva";
import io from "socket.io-client"
const socket = io("http://localhost:8080");
let interval;
class Drawing extends React.Component {
  constructor(props) {
    super(props);
    this.drawRect = this.drawRect.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
    this.drawStar = this.drawStar.bind(this);
    this.drawTriangle = this.drawTriangle.bind(this);
    this.drawDiamond = this.drawDiamond.bind(this);
    this.drawHexagon = this.drawHexagon.bind(this);
    this.drawArrow = this.drawArrow.bind(this);
    this.typeText = this.typeText.bind(this);
    this.handleTextDblClick = this.handleTextDblClick.bind(this);
    this.handleTextEdit = this.handleTextEdit.bind(this);
    this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);
    this.sendToBackend = this.sendToBackend.bind(this);

    const stageEl = React.createRef();
    const layerEl = React.createRef();    
    // this.checkDselect = this.checkDselect.bind(this);

    this.colorlist =['#FFF1AA', '#F8AD96', '#EF5F9E','#F7C5DA','#EAE15F','#C094C1','#D5D2E2','#E2E2E2','#B8DECD','#58C2BF','#31BDDF','#AACDE9'];
    this.state = {
      id: 0,
      selectedId: "",
      rectlst: [],
      shapeX: 0,
      shapeY: 0,
      circles: [],
      square: [],
      stars: [],
      triangles: [],
      diamonds: [],
      hexagon: [],
      arrows: [],
      texts: [],
      isEditableMode: false,
      txtEditableindex: 0,
      mode: "brush",
      stageEl : React.createRef(),
      layerEl : React.createRef(),
      pickColor:null
    
    };
  }

  sendToBackend(){
    socket.emit("dataFromFrontend",this.state)
  }
  componentDidMount(){
    interval = setInterval(this.sendToBackend,30)
       socket.on("updatedDataFromBackend",(data)=>{
          this.setState({
            ...this.state,
            ...data
      })
    })
  }

  componentWillUnmount(){
    clearInterval(interval)
  }

  drawRect() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      width: 150,
      height: 80,

      id: "rect" + this.state.id,
    };
    this.setState({
      rectlst: this.state.rectlst.concat(props),
    });
  }
  drawCircle() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      radius:50,

      id: "circle" + this.state.id,
    };
    this.setState({
      circles: this.state.circles.concat(props),
    });
  }
  drawSquare() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      width: 100,
      height: 100,

      id: "square" + this.state.id,
    };
    this.setState({
      square: this.state.square.concat(props),
    });
  }
  drawStar() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
     
      numPoints:6,
        innerRadius:40,
        outerRadius:70,
      id: "star" + this.state.id,
    };
    this.setState({
      stars: this.state.stars.concat(props),
    });
  }
  drawTriangle() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "triangle" + this.state.id,
    };
    this.setState({
      triangles: this.state.triangles.concat(props),
    });
  }
  drawDiamond() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "diamonds" + this.state.id,
    };
    this.setState({
      diamonds: this.state.diamonds.concat(props),
    });
  }
  drawHexagon() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "hexagon" + this.state.id,
    };
    this.setState({
      hexagon: this.state.hexagon.concat(props),
    });
  }
  drawArrow() {
    this.setState({
      arrows: this.state.arrows.concat(1),
    });
  }
  typeText() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      text: "Type Somethings",
      width: 200,
      height: 100,
      fontStyle:"normal",
      fontFamily:"volvo",
      textEditVisible: true,
      fill:"black",
      id: "text" + this.state.id,
    };
    this.setState({
      texts: this.state.texts.concat(props),
    });
  }
  handleTextDblClick = (e) => {
    console.log(e);
    const absPos = e.target.getAbsolutePosition();
    console.log(e.target.index);
   
  };
  handleTextEdit = (e) => {
    const txts = this.state.texts.slice();
    console.log(e);
    txts[this.state.txtEditableindex].text = e.target.value;
    this.setState({
      texts: txts,
    });
  };
  handleTextareaKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      const txts = this.state.texts.slice();
      txts[this.state.txtEditableindex].textEditVisible = false;
      this.setState({
        texts: txts,
      });
    }
  };
  handleStageClick = (e) => {
    console.log(e);
    this.setState({ isDrawing: false });
    const txts = this.state.texts.slice();
    console.log(txts);
    if(txts.length>0)
    {
    txts[this.state.txtEditableindex].textEditVisible = false;
    this.setState({
      texts: txts,
    });
  }

  };
  // checkDselect(){
  //   this.setState({
  //     ...this.state,
  //     pickColor:null
  //   })
  // }

  render() {
    return (
      <>
      <header>
        <div className="row " style={{ margin: "20px" }}>
          <div className="col-md-3 rename_document_col">
            <img src={Logo} width="20" />
            <span className="renameDoc">
              <b>Rename Document</b>
              <img src={SaveIcon} width="30" style={{marginLeft: "20px"}}/>
              <a
              className="float-right"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-align-left fa-canvasMenu"></i>
              </a>
              <div className="dropdown-menu canvas_opt_list" aria-labelledby="dropdownMenuLink">
                <Link to="/drawing">
                  <a className="dropdown-item" href="#">
                    New Canvas
                  </a>
                </Link>
                <a className="dropdown-item" href="#">
                  Insert<i className="fas fa-play float-right" style={{fontSize: "10px", paddingTop: "8px"}}></i>
                </a>
                <a className="dropdown-item" href="#">
                  Export<i className="fas fa-play float-right"  style={{fontSize: "10px", paddingTop: "8px"}}></i>
                </a>
                <a className="dropdown-item" href="#">
                  Duplicate
                </a>
                <a className="dropdown-item" href="#">
                  Convert to Template
                </a>
                <a className="dropdown-item" href="#">
                  Print
                </a>
                <a className="dropdown-item" href="#">
                  Show Grid
                </a>
                <a className="dropdown-item" href="#">
                  Help<i className="fas fa-play float-right"  style={{fontSize: "10px", paddingTop: "8px"}}></i>
                </a>
                <a className="dropdown-item" href="#">
                  Account Settings
                </a>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </span>
          </div>
          <div className="col-md-7 text-center">
            <button className="alert text-center text-light" role="alert">
              Succesfully Saved !
            </button>
          </div>
          <div className="col-md-2 icon_btn">
            <div className="header_panel">
              <a href="">
                <i className="far fa-search"></i>
              </a>
              <a href="">
                <img src={ShareIcon} width="20"/>
              </a>
              <a href="" role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="far fa-comment-alt-lines"></i>
              </a>
              <div className="dropdown-menu comment_drop" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item header_comment" href="#">
                  <div className="row">
                      <div className="col-md-8 "> 
                          <h5 style={{margin: "10px"}}><b>Comments</b></h5>
                       </div>
                       <div className="col-md-4 close_comment">
                            <i className="far fa-times"></i>
                       </div>
                   </div>
                  </a>
                  <a className="dropdown-item user_comment_list" href="#" style={{padding: "10px"}}>
                  <ul className="list-group" style={{margin: "10px"}}>
                      <li className="list-group-item comment_list">
                        <div className="row comment_profile">
                            <div className="col-md-2" style={{paddingRight: "0px"}}><i className="fas fa-user"></i></div>
                            <div className="col-md-4 comment_user_profile" ><h6><strong>John Doe</strong></h6></div>
                            <div className="col-md-6 comment_history"><p >3 Dec, 20 - 02:30 Am</p></div>
                         </div>
                         <div className="user_comment">
                           <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             </p>
                          
                         </div>
                         
                       </li>
                       <li className="list-group-item  comment_list">
                           <div className="row comment_profile">
                                <div className="col-md-2" style={{paddingRight: "0px"}}><i className="fas fa-user"></i></div>
                                <div className="col-md-4 comment_user_profile" ><h6><strong>John Doe</strong></h6></div>
                                <div className="col-md-6 comment_history"><p>3 Dec, 20 - 02:30 Am</p></div>
                            </div>
                             <div className="user_comment">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              </div>
                         </li>
                    </ul>
                </a>
                <a className="dropdown-item comment_section" href="#" style={{padding: "0px"}}>
                 <div className="add_comment">
                   <input type="text" placeholder="Add Comment Here..."/>
                   <button>Add</button>
                 </div>
                </a>
              </div>  
              <div style={{display: "contents"}}>
              <a href=""  role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
               <img src={TeamIcon} width="20"/>
              </a>
              
              <div className="dropdown-menu team_drop" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item header_team" href="#">
                  <div className="row">
                      <div className="col-md-8"> 
                          <h5 style={{margin: "10px"}}><b>Teams</b></h5>
                       </div>
                       <div className="col-md-4 close_team">
                            <i className="far fa-times"></i>
                        </div>
                    </div>
                  </a>
                <a className="team_view" href="#">
                <img src={TeamUser} className="team_user_icon"/>
                     <label>No Added Yet!</label>
                     <button className="btn_add_people"><img src={AddUserIcon}/>Add People</button>
                </a>
              </div>
              </div>
              <div style={{display: "contents"}}>
              <a href="" role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
               <img src={NotesIcon} width="20"/>
              </a>
              <div className="dropdown-menu notes_drop" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item notes_header" href="#">
                  <div className="row">
                      <div className="col-md-8"> 
                          <h5 style={{margin: "10px"}}><b>Notes</b></h5>
                       </div>
                       <div className="col-md-4 close_team">
                            <i className="far fa-times"></i>
                        </div>
                    </div>
                  </a>
                <a className="dropdown-item notes_list_opt" href="#" style={{padding: "0px"}}>
                <ul className="list-group list-group-horizontal notes_opt">
                  <li className="list-group-item">
                  <select className="form-control" style={{width: "111px"}} name="cars" id="cars">
                        <option value="volvo">Body</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                   </select>
                  </li>
                  <li className="list-group-item">
                    <img src={NotesTextIcon} width="25"/>
                  </li>
                  <li className="list-group-item">
                  <i className="fas fa-bold"></i>
                  </li>
                  <li className="list-group-item">
                  <i className="fas fa-tasks"></i>
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-link"></i>
                  </li>
                </ul>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        <div className="row">
          <div className="col-md-1" style={{padding: "50px 0px 0px 40px"}}>
            <div className="sidebar">
              <ul className="list-group draw_icon">
                <li className="active">
                 <img src={CursorIcon} style={{padding: "6px 0px", width: "30px"}}/>
                </li>
                <li>
                    <a  onClick={this.typeText}>                
                       <img src={TextIcon} style={{padding: "6px 0px", width: "30px"}}/>
                    </a>
                </li>
                <li className="nav-item dropdown">
                  <a  id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                     <img src={ColorPaletteIcon} style={{padding: "6px 0px", width: "30px"}}/>
                   </a>
                  <div
                    className="dropdown-menu dropdown-menu-right color_drop"
                    aria-labelledby="navbarDropdown"
                  >
                  {this.colorlist.map((color,index) =>(<div key={index} className="card">
                  <div style={{background: color}} className="color-pick" onClick={()=>{
                    this.setState({
                    ...this.state,
                    pickColor:color
                  })}} />
                  </div>))}
                  <div className="add_color_pick">
                      <a href=""><h6 className="add_new_color"><u>Add New</u></h6></a>
                  </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                 <a  id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                      <img src={ShapesIcon} style={{padding: "6px 0px", width: "30px"}}/>
                    </a>

                  <div
                    className="dropdown-menu dropdown-menu-right shapes"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="" href="#" onClick={this.drawRect}>
                      <i
                        className="fal fa-rectangle-wide shape-rectangle"
                        onClick={this.drawRect}
                      ></i>
                    </a>
                    <a className="" href="#" onClick={this.drawCircle}>
                      <i
                        className="far fa-circle shape-circle"
                        onClick={this.drawCircle}
                      ></i>
                    </a>
                    <a className="" href="#">
                      <i
                        className="fal fa-diamond shape-diamond"
                        onClick={this.drawDiamond}
                      ></i>
                    </a>

                    <a className="" href="#">
                      <i
                        className="fal fa-triangle shape-triangle"
                        onClick={this.drawTriangle}
                      ></i>
                    </a>

                    <div>
                      <a className="" href="#" onClick={this.drawStar}>
                        <i
                          className="fal fa-star shape-star"
                          onClick={this.drawStar}
                        ></i>
                      </a>
                      <a className="" href="#" onClick={this.drawSquare}>
                        <i
                          className="fal fa-square shape-square"
                          onClick={this.drawSquare}
                        ></i>
                      </a>
                      <a className="" href="#">
                        <i
                          className="fal fa-hexagon shape-hexagon"
                          onClick={this.drawHexagon}
                        ></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="" href="#">
                   <img src={ArrowIcon}  onClick={this.drawArrow} style={{padding: "6px 0px", width: "30px"}}/>
                  </a>
                </li>
                <li>
                  <img src={FreeDrawingIcon} style={{padding: "6px 0px", width: "30px"}}/>
                </li>
              </ul>
            </div>
            <div className="sidebar_sub_menu">
              <ul className="list-group draw_icon">
                <li className="nav-item dropdown">
                 <a id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                    <img src={ContainerIcon} style={{padding: "6px 0px", width: "30px"}}/>
                  </a>
                   <div
                    className="dropdown-menu dropdown-menu-right screen_container"
                    aria-labelledby="navbarDropdown"
                  >
                    <h5><b>Containers</b></h5>
                    <hr width="260"></hr>
                    <img src={Screen1}/>
                    <img src={Screen2}/>
                    <img src={Screen3}/>
                    <div className="row sort">
                      <div className="col-md-3 sort_icon">
                       <img src={SortName}/> 
                      </div>
                      <div className="col-md-9 sort_list">
                        <label><b>Sort</b></label>
                        <p>Organize sticky Notes Categories</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                <img src={ToolIcon} style={{padding: "6px 0px", width: "30px"}}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-11 drawing" id="drawing">
            <Stage
              width={1200}
              height={450}
              container="drawing"
              ref={this.state.stageEl}
              onClick={this.handleStageClick}
              // onDblClick={this.checkDselect}
              
            >
              <Layer ref={this.state.layerEl}>
                {this.state.circles &&
                  this.state.circles.map((circle,i) => <Circles 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={circle}
                  isSelected={circle.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: circle.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const cirls = this.state.circles.slice();
                    cirls[i] = newAttrs;
                   
                    this.setState({
                      circles: cirls,
                    });
                  }}
                  />)}
                {this.state.rectlst &&
                  this.state.rectlst.map((rect, i) => (
                    <Rectangle
                      col={this.state.pickColor}
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === this.state.selectedId}
                      onSelect={() => {
                        console.log("select");
                        this.setState({
                          selectedId: rect.id,
                        });
                        console.log(this.state.selectedId);
                      }}
                      onChange={(newAttrs) => {
                        const rects = this.state.rectlst.slice();
                        rects[i] = newAttrs;
                        console.log(rects);
                        this.setState({
                          rectlst: rects,
                        });
                      }}
                    />
                  ))}
                {this.state.square && this.state.square.map((sqr,i) => <Square 
                   col={this.state.pickColor}
                  key={i}
                  shapeProps={sqr}
                  isSelected={sqr.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: sqr.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const squrs = this.state.square.slice();
                    squrs[i] = newAttrs;
                   
                    this.setState({
                      square: squrs,
                    });
                  }}
                
                />)}

                {this.state.triangles &&
                  this.state.triangles.map((triangl,i) => <Triangles 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={triangl}
                  isSelected={triangl.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: triangl.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const triangl = this.state.triangles.slice();
                    triangl[i] = newAttrs;
                   
                    this.setState({
                      triangles: triangl,
                    });
                  }}
                  />)}

                {this.state.stars && this.state.stars.map((star,i) => <Stars 
                 col={this.state.pickColor}
                key={i}
                shapeProps={star}
                isSelected={star.id === this.state.selectedId}
                onSelect={() => {
                
                  this.setState({
                    selectedId: star.id,
                  });
                  console.log(this.state.selectedId);
                }}
                onChange={(newAttrs) => {
                  const strs = this.state.stars.slice();
                  strs[i] = newAttrs;
                 
                  this.setState({
                    stars: strs,
                  });
                }}
                />)}

                {this.state.diamonds &&
                  this.state.diamonds.map((diamds,i) => <Diamonds 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={diamds}
                  isSelected={diamds.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: diamds.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const diamd = this.state.diamonds.slice();
                    diamd[i] = newAttrs;
                   
                    this.setState({
                      diamonds: diamd,
                    });
                  }}
                  />)}

                {this.state.hexagon &&
                  this.state.hexagon.map((hexa,i) => <Hexagon 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={hexa}
                  isSelected={hexa.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: hexa.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const hexas = this.state.hexagon.slice();
                    hexas[i] = newAttrs;
                   
                    this.setState({
                      hexagon: hexas,
                    });
                  }}
                  
                  />)}
                   {this.state.texts &&
                  this.state.texts.map((txt, i) => (
                    <TextDraw
                    key={i}
                      shapeProps={txt}
                      isSelected={txt.id === this.state.selectedId}
                      onSelect={() => {
                        const txts = this.state.texts.slice();
                        // txts[i].fill=this.state.pickColor;
                        this.setState({
                          texts: txts,
                          selectedId: txt.id,
                        });
                        console.log(this.state.selectedId);
                      }}
                      onChange={(newAttrs) => {
                        const txts = this.state.texts.slice();
                        console.log(txts);
                        txts[i] = newAttrs;
                        console.log(newAttrs);
                        this.setState({
                          texts: txts,
                        });
                      }}
                      onDblClick={(e) => {
                        const txts = this.state.texts.slice();
                        const absPos = e.target.getAbsolutePosition();
                        console.log("DOUBLE");
                        txts[i].x = absPos.x;
                        txts[i].y = absPos.y;
                        txts[i].textEditVisible = true;
                        this.setState({
                          texts: txts,
                          txtEditableindex: i,
                        });
                      }}
                    />
                  ))}
                
              </Layer>
            </Stage>
            {/* {this.state.texts &&
              this.state.texts.map((txt, i) => (
                <TextEditeController editableTxt={this.state.texts[this.state.txtEditableindex]}
                TextEditHandle={this.handleTextEdit}
                handleTextarea={this.handleTextareaKeyDown}
                ></TextEditeController>
              ))} */}
            <ul className="list-group list-group-horizontal shapes_tool">
            <li className="list-group-item">
            <img src={ChatShapes} width="25"/> 
            </li>
            <li className="list-group-item">
            <img src={EmojiShapes} width="25"/>
            </li>
            <li className="list-group-item">
              <a  href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <img src={LabelShapes} width="25"/>
              </a>
              <div className="dropdown-menu demo_drop" aria-labelledby="dropdownMenuLink">
                <h5 style={{padding: "5px 20px"}}>Edit Tags</h5>
                <ul className="list-group edit_demo_tag">
                <li className="list-group-item demo_tag_list" style={{padding: "5px"}}>
                  <img src={DemoIcon}/>
                  <input type="text" placeholder="Demo tag"/>
                  <i className="fas fa-circle"></i>
                  <img src={DeleteTag} className="delete_demo_icon"/>
                </li>
                <li className="list-group-item demo_tag_list2" style={{padding: "5px"}}>
                  <img src={DemoIcon}/>
                  <input type="text" placeholder="Demo tag"/>
                  <i className="fas fa-circle"></i>
                  <img src={DeleteTag} className="delete_demo_icon"/>
                </li>
                </ul>
                <div className="demo_btn">
                <button className="save_demo">Save</button>
                <button className="cancel_demo">Cancel</button>
                </div>
              </div>
            </li>
            <li className="list-group-item">
            <img src={LockShapes} width="25"/>
            </li>
          </ul>
          </div>
        </div>
        <footer className="footer">
          <ul className="list-group list-group-horizontal backward_forward_btn">
            <li className="list-group-item">
              <img src={BackwardIcon} width="25"/>
            </li>
            <li className="list-group-item">
             <img src={ForwardIcon} width="25"/>
            </li>
            <li className="list-group-item nav-item dropdown">
             <a id="navbarDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
                 <img src={HistoryIcon} width="25"/>
               </a>
              <div className="dropdown-menu dropdown-menu-up revision_history"
              aria-labelledby="navbarDropdown"
              >
                <div className="row">
                   <div className="col-md-8 history_header"> 
                      <h5><strong>Revision History</strong></h5>
                    </div>
                    <div className="col-md-4 close_history">
                          <i className="far fa-times"></i>
                      </div>
                  </div>
                 <hr/>
                 <ul className="list-group" >
                     <li className="list-group-item">
                        <div className="row">
                          <div className="col-md-2 history_img"><img src={RevisionHistIcon}/></div>
                          <div className="col-md-5 last_update_history"><label><strong>Last Update</strong></label></div>
                          <div className="col-md-5 history_time"><label>3 Dec, 20 - 02:30 Am</label></div>
                        </div>
                        <hr></hr>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-md-2 history_img"><img src={RevisionHistIcon}/></div>
                          <div className="col-md-5 last_update_history"><label><strong>Last Update</strong></label></div>
                          <div className="col-md-5 history_time"><label>3 Dec, 20 - 02:30 Am</label></div>
                        </div>
                        <hr></hr>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-md-2 history_img"><img src={RevisionHistIcon}/></div>
                          <div className="col-md-5 last_update_history"><label><strong>Last Update</strong></label></div>
                          <div className="col-md-5 history_time"><label>3 Dec, 20 - 02:30 Am</label></div>
                        </div>
                        <hr></hr>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-md-2 history_img"><img src={RevisionHistIcon}/></div>
                          <div className="col-md-5 last_update_history"><label><strong>Last Update</strong></label></div>
                          <div className="col-md-5 history_time"><label>3 Dec, 20 - 02:30 Am</label></div>
                        </div>
                        <hr></hr>
                      </li>
                   </ul>
                <button  className="btn_history">Clear All</button>
              </div>
            </li>
            <li className="list-group-item">
              <img src={CaptureIcon} width="25"/>
            </li>
            <li className="list-group-item">
             <img src={LocationIcon} width="25"/>
            </li>
          </ul>

          <ul className="list-group list-group-horizontal max_min_size">
            <li className="list-group-item">
              <img src={ZoomOut}/>
            </li>
            <li className="list-group-item">
              <label>100%</label>
            </li>
            <li className="list-group-item">
              <img src={ZoomIn}/>
            </li>
          </ul>
        </footer>
        </>
     
    );
  }
}

export default Drawing;
