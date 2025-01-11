import classNames from "classnames/bind";

import styles from "./TopSearch.module.scss";
import { ArrowRight } from "../Icons";
import BtnRightLeft from "../BtnRightLeft/BtnRightLeft";

const cx = classNames.bind(styles);

const items = [
  {
    count: "Bán 15k+ / tháng",
    title: "Giày Đá Bóng",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/300fe9faaec0ed3fa2888e96e788b2a0",
  },
  {
    count: "Bán 12k+ / tháng",
    title: "Bóng Đá",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/c34a2de0e7995796d2a7b8028cf05e27",
  },
  {
    count: "Bán 46k+ / tháng",
    title: "Tai Nghe Bluetooth",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/52735acc6d340521bc20fcac3b9b61bb",
  },
  {
    count: "Bán 65k+ / tháng",
    title: "Áo Thun Local Brand",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/63d7bef820b88a57b5ae4713eb2d20d7",
  },
  {
    count: "Bán 31k+ / tháng",
    title: "Giày Thể Thao Nam",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/5a7c2909e1400bb60fda38c4ba1190e8",
  },
  {
    count: "Bán 141k+ / tháng",
    title: "Khăn Choàng Cổ",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/80113fc84509baed97aec8c2dc3842fd",
  },
  {
    count: "Bán 180k+ / tháng",
    title: "Son Kem Lì Mịn Môi Romand",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/c8169887b60e20a161d0288e6f9a193e",
  },
  {
    count: "Bán 3k+ / tháng",
    title: "Kệ sách Đa Năng",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/d46afbbeea311773ad9dba14ce67fc6b",
  },
  {
    count: "Bán 168k+ / tháng",
    title: "Quần Lót Nam Co Dãn",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/db3fb9563d3779ed850b7b735aba8c09",
  },
  {
    count: "Bán 161k+ / tháng",
    title: "Quần Lót Nữ Cotton",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/e561d5b5de63d35f66e52f172b0821d6",
  },
  {
    count: "Bán 138k+ / tháng",
    title: "Quần Ống Rộng Nữ",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/9ec433bca2d7e0f8f6fc2ce1c5097882",
  },
  {
    count: "Bán 124k+ / tháng",
    title: "Quần Tất Siêu Dai",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/273e6879815302ae0c682187d2dbd9df",
  },
  {
    count: "Bán 116k+ / tháng",
    title: "Tất Lolita",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/94a5c3b501c4f374d592a9c6716d98d2",
  },
  {
    count: "Bán 118k+ / tháng",
    title: "Len",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/f673e2a1df19bfbf406aca480669644f",
  },
  {
    count: "Bán 208k+ / tháng",
    title: "Mi Giả 3D Cao Cấp",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/a2cb4047ab614094378f561d5251b9ff",
  },
  {
    count: "Bán 15k+ / tháng",
    title: "Tất Màu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/8d34fd98601d99e24560f027cf16fab4",
  },
  {
    count: "Bán 191k+ / tháng",
    title: "Bông Tẩy Trang 3 Lớp Cotton Pads",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/1378b90f69b5e6208e6e4dee751c9093",
  },
  {
    count: "Bán 137k+ / tháng",
    title: "Giấy Ăn Gấu Trúc Sipiao",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/cddc863729c372f58ab26015f0f7825a",
  },
  {
    count: "Bán 260k+ / tháng",
    title: "Nước Tẩy Trang L'Oreal Paris 3 In 1",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/569f5566d9c55f4b3fa34d70e0d5acc3",
  },
];

function TopSearch() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("content")}>TÌM KIẾM HÀNG ĐẦU</div>
        <div className={cx("header-btn")}>
          Xem tất cả <ArrowRight className={cx("icon")} />
        </div>
      </div>
      <BtnRightLeft>
        <ul className={cx("list-item")}>
          {items.map((item, index) => (
            <li key={index}>
              <div className={cx("item")}>
                <div className={cx("item-img")}>
                  <img src={item.imgSrc} alt={item.title} />
                  <div className={cx("item-count")}>{item.count}</div>
                </div>
                <div className={cx("item-title")}>{item.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </BtnRightLeft>
    </div>
  );
}

export default TopSearch;
