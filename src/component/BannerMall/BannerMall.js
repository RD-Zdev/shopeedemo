import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./BannerMall.module.scss";
import { ArrowRight, ArrowLeft } from "../Icons/icon";

const cx = classNames.bind(styles);

const BANNER_MALL_HEADER = [
  {
    title: "Trả hàng miễn phí 15 ngày",
    src: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/6c502a2641457578b0d5.png",
  },
  {
    title: "Hàng chính hãng 100%",
    src: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/511aca04cc3ba9234ab0.png",
  },
  {
    title: "Miễn phí vận chuyển",
    src: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/16ead7e0a68c3cff9f32.png",
  },
];

const imgMall = "https://cf.shopee.vn/file/vn-11134258-7ras8-m4iespqewa2vee";

const productsMall = [
  {
    title: "Mua 1 tặng 1",
    src: "https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-m046cqhd7h5b3d@resize_w402_nl.webp",
  },
  {
    title: "Ưu đãi đến 50%",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2@resize_w402_nl.webp",
  },
  {
    title: "Mua 1 được 2",
    src: "https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1@resize_w402_nl.webp",
  },
  {
    title: "Mua 1 tặng 1",
    src: "https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b@resize_w402_nl.webp",
  },
  {
    title: "Mua 1 được 6",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w402_nl.webp",
  },
  {
    title: "Deli siêu sale",
    src: "https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d@resize_w402_nl.webp",
  },
  {
    title: "Mua là có quà",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409@resize_w402_nl.webp",
  },
  {
    title: "Mua là có quà",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e@resize_w402_nl.webp",
  },
  {
    title: "Quà mọi đơn",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec@resize_w402_nl.webp",
  },
  {
    title: "Mua 1 tặng 1",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-b44bb96f2e16efe70badc41661365c8a@resize_w402_nl.webp",
  },
  {
    title: "Quà tặng 599k",
    src: "https://down-vn.img.susercontent.com/file/fc7077ffe57d87a65f642f094bbcf959@resize_w402_nl.webp",
  },
  {
    title: "Thời trang -50%",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b@resize_w402_nl.webp",
  },
  {
    title: "Giảm đến 50%",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-87186ed98227adab30afbe0f244f49a4@resize_w402_nl.webp",
  },
  {
    title: "Giảm đến 50%",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6@resize_w402_nl.webp",
  },
  {
    title: "Giảm đến 50%",
    src: "https://down-vn.img.susercontent.com/file/vn-50009109-e8e0b80b57828bee61eb7e31c3d83765@resize_w402_nl.webp",
  },
];
function BannerMall() {
  const [bannersaleBtn, setBannerSaleBtn] = useState(false);

  const handleClick = () => {
    setBannerSaleBtn(!bannersaleBtn);
    const classList = cx("bannersale-list");
    const bannerlist = document.querySelector(`.${classList}`);
    bannerlist.style.transform = `translateX(${bannersaleBtn ? 0 : "-800px"})`;
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <h3 className={cx("title-name")}>SHOPEE MALL</h3>
          <div className={cx("title-data")}>
            {BANNER_MALL_HEADER.map((item, index) => (
              <div key={index} className={cx("header-item")}>
                <img
                  className={cx("header-item-img")}
                  src={item.src}
                  alt={item.title}
                />
                <div className={cx("header-item-title")}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("header-btn")}>
          Xem tất cả{" "}
          <span className={cx("wrapper-btn")}>
            <ArrowRight className={cx("header-btn-icon")} />
          </span>
        </div>
      </div>
      <div className={cx("content")}>
        <img
          className={cx("content-banner-img")}
          src={imgMall}
          alt="Banner Mall"
        />
        <div className={cx("content-banner")}>
          <div className={cx("content-banner-title")}>
            {/* ------------------------------------ */}
            <div className="wrapper-listitem">
              <div className={cx("bannersale-block")}>
                <ul className={cx("bannersale-list")}>
                  {productsMall.map((item, index) => (
                    <li key={index} className={cx("bannersale-item")}>
                      <a
                        className={cx("bannersale-link")}
                        href="http://google.vn"
                      >
                        <img
                          className={cx("item-pic")}
                          src={item.src}
                          alt={item.title}
                        />
                        <div className={cx("item-title")}>{item.title}</div>
                      </a>
                    </li>
                  ))}
                  <li className={cx("list-btn")}>
                    Xem tất cả
                    <span className={cx("wrapper-btn")}>
                      <ArrowRight className={cx("header-btn-icon")} />
                    </span>
                  </li>
                </ul>
              </div>
              {bannersaleBtn ? (
                <button
                  className={cx("btn-left")}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <ArrowLeft className={cx("arrow-btn")} />
                </button>
              ) : (
                <button
                  className={cx("btn-right")}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <ArrowRight className={cx("arrow-btn")} />
                </button>
              )}
            </div>
            {/* ------------------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerMall;
