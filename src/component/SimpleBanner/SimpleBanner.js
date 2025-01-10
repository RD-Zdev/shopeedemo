import classNames from "classnames/bind";
import styles from "./SimpleBanner.module.scss";

const cx = classNames.bind(styles);

const img = "https://cf.shopee.vn/file/sg-11134252-7ra35-m4r4ot7h9wsh3c";

const LINK = [
  {
    title: "Thời trang Nữ",
    src: "https://shopee.vn/Th%E1%BB%9Di-Trang-N%E1%BB%AF-cat.11035639",
  },
  {
    title: "Điện Thoại & Phụ Kiện",
    src: "https://shopee.vn/Điện-Thoại-%26-Ph%C3%BAp-Ki%E1%BB%83n-cat.11035641",
  },
  {
    title: "Mẹ & Bé",
    src: "https://shopee.vn/M%E1%BA%B7-%26-B%C3%A9-cat.11035643",
  },
];

function SimpleBanner() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("simple-banner")}>
        <img src={img} alt="" />
        <div className={cx("simple-banner-content")}>
          {LINK.map((item, index) => (
            <a className={cx("simple-banner-item")} href={item.src} key={index}>
              {/* {item.title} */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleBanner;
