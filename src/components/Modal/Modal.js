import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
  enter: 600,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      classNames={{
        enter: "",
        enterActive: "ModalShow",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      {/* {(state) => {
        const classStyle = [
          "Modal",
          state === "entering"
            ? "ModalShow"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={classStyle.join(" ")}>
            <h1>A Modal</h1>
            <button onClick={props.closed}>Dismiss</button>
          </div>
        );
      }} */}

      <div className="Modal">
        <h1>A Modal</h1>
        <button onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>
  );
};

export default modal;
