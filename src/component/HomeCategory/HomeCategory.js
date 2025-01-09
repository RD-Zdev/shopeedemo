import classNames from "classnames/bind";
import styles from "./HomeCategory.module.scss";
import { ArrowLeft, ArrowRight } from "./../Icons";
import { useState } from "react";

const cx = classNames.bind(styles);

const CATEGORY_LISTS = [
  {
    title: "Thời Trang Nam",
    src: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp",
  },
  {
    title: "Thời Trang Nữ",
    src: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w640_nl.webp",
  },
  {
    title: "Điện Thoại & Phụ Kiện",
    src: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp",
  },
  {
    title: "Mẹ & Bé",
    src: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e@resize_w640_nl.webp",
  },
  {
    title: "Thiết Bị Điện Tử",
    src: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5@resize_w640_nl.webp",
  },
  {
    title: "Nhà Cửa & Đời Sống",
    src: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f@resize_w640_nl.webp",
  },
  {
    title: "Máy Tính & Laptop",
    src: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w640_nl.webp",
  },
  {
    title: "Sắc Đẹp",
    src: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72@resize_w640_nl.webp",
  },
  {
    title: "Máy Ảnh & Máy Quay Phim",
    src: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w640_nl.webp",
  },
  {
    title: "Sức Khỏe",
    src: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747@resize_w640_nl.webp",
  },
  {
    title: "Đồng Hồ",
    src: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp",
  },
  {
    title: "Giày Dép Nữ",
    src: "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847@resize_w640_nl.webp",
  },
  {
    title: "Giày Dép Nam",
    src: "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w640_nl.webp",
  },
  {
    title: "Túi Ví Nữ",
    src: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52@resize_w640_nl.webp",
  },
  {
    title: "Thiết Bị Điện Gia Dụng",
    src: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w640_nl.webp",
  },
  {
    title: "Phụ Kiện & Trang Sức Nữ",
    src: "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w640_nl.webp",
  },
  {
    title: "Thể Thao & Du Lịch",
    src: "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4@resize_w640_nl.webp",
  },
  {
    title: "Bách Hóa Online",
    src: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889@resize_w640_nl.webp",
  },
  {
    title: "Ô Tô & Xe Máy & Xe Đạp",
    src: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w640_nl.webp",
  },
  {
    title: "Nhà Sách Online",
    src: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w640_nl.webp",
  },
  {
    title: "Balo & Túi Ví Nam",
    src: "https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f@resize_w640_nl.webp",
  },
  {
    title: "Thời Trang Trẻ Em",
    src: "https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0@resize_w640_nl.webp",
  },
  {
    title: "Đồ Chơi",
    src: "https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684@resize_w640_nl.webp",
  },
  {
    title: "Giặt Giũ & Chăm Sóc Nhà Cửa",
    src: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763@resize_w640_nl.webp",
  },
  {
    title: "Chăm Sóc Thú Cưng",
    src: "https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec@resize_w640_nl.webp",
  },
  {
    title: "Voucher & Dịch Vụ",
    src: "https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1@resize_w640_nl.webp",
  },
  {
    title: "Dụng cụ và thiết bị tiện ích",
    src: "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0@resize_w640_nl.webp",
  },
];

function HomeCategory() {
  const [categoryBtn, setCategoryBtn] = useState(false);

  const handleClick = () => {
    setCategoryBtn(!categoryBtn);
    const catelist = cx("category-list");
    const list = document.querySelectorAll(`.${catelist}`); // vì list sẽ là 1 nodelist nên khi thêm style vào list sẽ phải dùng list[0], còn list có nhiều phần tử sẽ dùng list.forEach(item => item.style.transform)
    list[0].style.transform = `translateX(${categoryBtn ? 0 : "-600px"})`;
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("category-title")}>
        <div className={cx("category-name")}>DANH MỤC</div>
      </div>
      <div className="wrapper-listitem">
        <div className={cx("category-block")}>
          <ul className={cx("category-list")}>
            {CATEGORY_LISTS.map((item, index) => (
              <li key={index} className={cx("category-item")}>
                <a className={cx("category-link")} href="http://google.vn">
                  <img
                    className={cx("item-pic")}
                    src={item.src}
                    alt={item.title}
                  />
                  <div className={cx("item-title")}>{item.title}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {categoryBtn ? (
          <button
            className={cx("category-btn-left")}
            onClick={() => {
              handleClick();
            }}
          >
            <ArrowLeft />
          </button>
        ) : (
          <button
            className={cx("category-btn-right")}
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

export default HomeCategory;
