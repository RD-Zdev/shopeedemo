import classNames from "classnames/bind";
import styles from "./FooterDown.module.scss";

const cx = classNames.bind(styles);

function FooterDown() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div>CHÍNH SÁCH BẢO MẬT</div>
        <div>QUY CHẾ HOẠT ĐỘNG</div>
        <div>CHÍNH SÁCH VẬN CHUYỂN</div>
        <div>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
      </div>
      <div className={cx("infor-checked")}>
        <div className={cx("infor-list")}>
          <div className={cx("pic1")}></div>
          <div className={cx("pic1")}></div>
          <div className={cx("pic2")}></div>
        </div>
        <div>Công ty TNHH Shopee</div>
      </div>
      <div className={cx("infor-footer")}>
        <div>
          Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
          Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài
          hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
        </div>
        <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</div>
        <div>
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
          lần đầu ngày 10/02/2015
        </div>
        <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
      </div>
    </div>
  );
}

export default FooterDown;
