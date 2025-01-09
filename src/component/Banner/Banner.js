import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Banner() {
  const BANNER_IMG = [
    "https://cf.shopee.vn/file/sg-11134258-7ra0x-m4imnj9pgbi969_xxhdpi",

    "https://cf.shopee.vn/file/vn-11134258-7ras8-m4fz6r94kf0n05_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra3a-m4k64s558b5ce3_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra2z-m4ilegm00mrl30_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra2w-m4ipoh7q76nka8_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra3t-m4imbxq2hawke9_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra3u-m4imgv8cpw2qcf_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra1s-m4jqsf04q3h79e_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra0i-m4imgwn4qdqz63_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra22-m4imgxr313q351_xxhdpi",

    "https://cf.shopee.vn/file/sg-11134258-7ra0x-m4imnj9pgbi969_xxhdpi",

    "https://cf.shopee.vn/file/vn-11134258-7ras8-m4fz6r94kf0n05_xxhdpi",
  ];

  const BANNER_ITEM = [
    {
      img: "https://cf.shopee.vn/file/vn-50009109-5bf65d4dc0eb8f6b42074751e8b736a7_xhdpi",
      title: "Hàng Chọn Giá Hời",
    },
    {
      img: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
      title: "Mã Giảm Giá",
    },
    {
      img: "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
      title: "Miến Phí Ship - Có Shopee",
    },
    {
      img: "https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi",
      title: "Shoppe Style Voucher 30%",
    },
    {
      img: "https://cf.shopee.vn/file/vn-11134258-7ras8-m4ipsn9el49b0a_xhdpi",
      title: "Voucher Giảm Đến 1 Triệu",
    },
    {
      img: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi",
      title: "Khung Giờ Săn Sale",
    },
    {
      img: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
      title: "Hàng Quốc Tế",
    },
    {
      img: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
      title: "Nạp Thẻ, Dịch Vụ & Vé Tàu Hoả",
    },
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % BANNER_IMG.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [BANNER_IMG.length]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner")}>
        <div className={cx("big-banner")}>
          <img
            className={cx("image")}
            src={BANNER_IMG[bannerIndex]}
            alt="Banner"
          />
        </div>
        <div className={cx("small-banner")}>
          <img
            className={cx("image")}
            src={BANNER_IMG[(bannerIndex + 1) % BANNER_IMG.length]}
            alt="Banner"
          />
          <img
            className={cx("image")}
            src={BANNER_IMG[(bannerIndex + 2) % BANNER_IMG.length]}
            alt="Banner"
          />
        </div>
      </div>
      <div className={cx("item-list")}>
        {BANNER_ITEM.map((item, index) => (
          <div key={index} className={cx("item")}>
            <img src={item.img} alt={item.title} />
            <div className={cx("title")}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
