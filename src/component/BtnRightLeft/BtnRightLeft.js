import classNames from "classnames/bind";
import styles from "./BtnRightLeft.module.scss";

import { useState, useRef } from "react";

import { ArrowRight, ArrowLeft } from "./../Icons";

const cx = classNames.bind(styles);

function BtnRightLeft({ children, moveValue = 300, timesMove = 2 }) {
  const [btnShow, setBtnShow] = useState(0);
  const [range, setRange] = useState(0);
  const listRef = useRef(null);

  function handlePrev() {
    setBtnShow(btnShow - 1);
    setRange((Prev) => {
      const newRange = Prev + moveValue;
      if (listRef.current) {
        listRef.current.style.transform = `translateX(${newRange}px)`;
      }
      return newRange;
    });
  }

  function handleNext() {
    setBtnShow(btnShow + 1);
    setRange((Prev) => {
      const newRange = Prev - moveValue;
      if (listRef.current) {
        listRef.current.style.transform = `translateX(${newRange}px)`;
      }
      return newRange;
    });
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-list")}>
        <div className={cx("block")} ref={listRef}>
          {children}
        </div>
      </div>
      {btnShow === 0 ? (
        <button className={cx("btn-right")} onClick={handleNext}>
          <ArrowRight className={cx("icon")} />
        </button>
      ) : btnShow < timesMove ? (
        <>
          <button className={cx("btn-left")} onClick={handlePrev}>
            <ArrowLeft className={cx("icon")} />
          </button>
          <button className={cx("btn-right")} onClick={handleNext}>
            <ArrowRight className={cx("icon")} />
          </button>
        </>
      ) : (
        <button className={cx("btn-left")} onClick={handlePrev}>
          <ArrowLeft className={cx("icon")} />
        </button>
      )}
    </div>
  );
}

export default BtnRightLeft;
