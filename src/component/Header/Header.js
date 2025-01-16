import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import {
  FacebookIcon,
  InstagramIcon,
  BellIcon,
  GlobeIcon,
  QuestionIcon,
  Logo,
  CartIcon,
  SearchIcon,
} from "../Icons";

const cx = classNames.bind(styles);

const Topleft = [
  { title: "Kênh Người bán", tippy: "Bán" },
  { title: "Trở thành Người bán Shopee " },
  { title: "Tải ứng dụng" },
  { title: "Kết nối", icon: [<FacebookIcon />, <InstagramIcon />] },
];
const Topright = [
  { title: "Thông báo", icon: <BellIcon /> },
  { title: "Hỗ trợ", icon: <QuestionIcon /> },
  { title: "Ngôn ngữ", icon: <GlobeIcon /> },
  { title: "Tài khoản" },
];
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-top")}>
        <div className={cx("header-left")}>
          {Topleft.map((item, index) => (
            <Tippy
              render={(attrs) =>
                item.tippy && ( // điều kiện có item.tippy sẽ hiển thị
                  <div className={cx("tippy-header")} tabIndex="-1" {...attrs}>
                    <strong>{item.tippy}</strong>
                  </div>
                )
              }
              placement="bottom"
              interactive={true}
            >
              <div key={index} className={cx("item")}>
                {item.title}
                {item.icon &&
                  item.icon.map((icon, index) => {
                    return (
                      <span className={cx("header-icon")} key={index}>
                        {icon}
                      </span>
                    );
                  })}
              </div>
            </Tippy>
          ))}
        </div>
        <div className={cx("header-right")}>
          {Topright.map((item, index) => (
            <div key={index} className={cx("item")}>
              {item.icon && (
                <span className={cx("header-icon")}>{item.icon}</span>
              )}
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className={cx("header-bottom")}>
        <div className={cx("logo-header")}>
          <Logo className={cx("logo")} />
        </div>
        <div className={cx("search")}>
          <div className={cx("search-input")}>
            <input type="text" placeholder="Tìm kiếm trên Shopee" />
            <div className={cx("search-btn")}>
              <SearchIcon className={cx("search-icon")} />
            </div>
          </div>
          <div className={cx("list-suggest")}>
            <ul>
              <li>Tìm kiếm</li>
              <li>Tin tức</li>
              <li>Điểm bán</li>
              <li>Tài khoản</li>
              <li>Tìm kiếm</li>
              <li>Tin tức</li>
              <li>Điểm bán</li>
              <li>Tài khoản</li>
              <li>Tìm kiếm</li>
              <li>Tin tức</li>
              <li>Điểm bán</li>
              <li>Tài khoản</li>
            </ul>
          </div>
        </div>
        <Tippy
          render={(attrs) => (
            <div className={cx("tippy-cart")} tabIndex="-1" {...attrs}>Chưa có sản phẩm</div>
          )}
          placement="bottom"
          interactive={true}
        >
          <div className={cx("cart")}>
            <CartIcon className={cx("cart-icon")} />
          </div>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
