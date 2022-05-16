import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import "./App.css";

class App extends Component {
  state = {
    isOpen: true,
    toggle: false,
  };

  closeHandler = () => {
    this.setState({ isOpen: false });
  };

  showHandler = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ toggle: !prevState.toggle }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.toggle}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          // onEnter={() => console.log("enter")}
          // onEntering={() => console.log("entering")}
          // onEntered={() => console.log("entered")}
          // onExit={() => console.log("exit")}
          // onExiting={() => console.log("exiting")}
          // onExited={() => console.log("exited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                opacity: state === "entered" ? 1 : 0,
                transition: "opacity 1s ease-out",
              }}
            ></div>
          )}
        </Transition>
        <Modal show={this.state.isOpen} closed={this.closeHandler} />
        {this.state.isOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
