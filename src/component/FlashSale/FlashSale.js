import classNames from "classnames/bind";
import styles from "./FlashSale.module.scss";
import { ArrowLeft, ArrowRight } from "../Icons";
import { useState } from "react";

const cx = classNames.bind(styles);

const FLASH_SALE = [
  {
    src: "https://down-vn.img.susercontent.com/file/0475c12b732e55a265aeee5b2458334b",
    title: "Mall",
    sale: "12%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/2c1e5e908f854e7861fb96c65b53e25d",
    title: "Yêu thích",
    sale: "19%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/1515a5e19c597851518e6f7f6a3cbd96",
    title: "Yêu thích",
    sale: "18%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/1322a87323001d01443b4f546563353a",
    title: "Mall",
    sale: "20%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/9a47a4cd4a32c5fe2aa1ca7b14dddc9d",
    title: "Mall",
    sale: "19%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/a8932fe3e0971f9f453e595e5c864001",
    title: "Yêu thích",
    sale: "17%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/fac61911c0c2e599336b4dc3faf33a8b",
    title: "Mall",
    sale: "17%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/63667e31e1f0746113b4d4657ad6f9d6",
    title: "Mall",
    sale: "14%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/7577d722f2a4f618e4d6de1108c3338b",
    title: "Yêu thích",
    sale: "13%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/6db259e3d7e14fbf7e11cb4fdcd3c8aa",
    title: "Mall",
    sale: "18%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/b409d839fad5d8f0608ad64ce635980e",
    title: "Yêu thích",
    sale: "12%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/52e60bbc2972925b0bc1a877747c265c",
    title: "Yêu thích",
    sale: "15%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/11053af1533a7d16a01b1bdca2fc702e",
    title: "Yêu thích",
    sale: "19%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/e8ae02f494a17282ca84f890245f0ccf",
    title: "Yêu thích",
    sale: "10%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/c32c7eaa5bcf7e2bead36eb5062a8772",
    title: "Yêu thích",
    sale: "11%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/7577d722f2a4f618e4d6de1108c3338b",
    title: "Yêu thích",
    sale: "13%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/6db259e3d7e14fbf7e11cb4fdcd3c8aa",
    title: "Mall",
    sale: "18%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/b409d839fad5d8f0608ad64ce635980e",
    title: "Yêu thích",
    sale: "12%",
  },
  {
    src: "https://down-vn.img.susercontent.com/file/52e60bbc2972925b0bc1a877747c265c",
    title: "Yêu thích",
    sale: "15%",
  },
];

function FlashSale() {
  const [flashsaleBtn, setFlashsaleBtn] = useState(false);

  const handleClick = () => {
    setFlashsaleBtn(!flashsaleBtn);
    const catelist = cx("flashsale-item");
    const list = document.querySelectorAll(`.${catelist}`);
    console.log(list);
    list.forEach((item) => {
      item.style.transform = `translateX(${flashsaleBtn ? 0 : "-600px"})`;
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("flashsale-title")}>
        <div className={cx("flashsale-name")}>FLASHSALE</div>
        <div className={cx("flashsale-btn")}>Xem tất cả</div>
      </div>
      <div className="wrapper-listitem">
        <div className={cx("flashsale-block")}>
          <ul className={cx("flashsale-list")}>
            {FLASH_SALE.map((item, index) => (
              <li key={index} className={cx("flashsale-item")}>
                <a className={cx("flashsale-link")} href="http://google.vn">
                  <img
                    className={cx("item-pic")}
                    src={item.src}
                    alt={item.title}
                  />
                  <div className={cx("item-title")}>{item.title}</div>
                  <div className={cx("item-sale")}>{item.sale}</div>
                  <div className={cx("item-price")}>9.999.999.999</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {flashsaleBtn ? (
          <button
            className={cx("flashsale-btn-left")}
            onClick={() => {
              handleClick();
            }}
          >
            <ArrowLeft />
          </button>
        ) : (
          <button
            className={cx("flashsale-btn-right")}
            onClick={() => {
              handleClick();
            }}
          >
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default FlashSale;
