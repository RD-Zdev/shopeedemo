import classNames from "classnames/bind";

import styles from "./ListRemark.module.scss";

const cx = classNames.bind(styles);

const products = [
  {
    image: "https://example.com/image1.jpg",
    productName: "Product Name 1Product Name 1Product Name 1",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "200,000",
    soldQuantity: 150,
  },
  {
    image: "https://example.com/image2.jpg",
    productName: "Product Name 2",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "150,000",
    soldQuantity: 300,
  },
  // Add more products here
  {
    image: "https://example.com/image3.jpg",
    productName: "Product Name 3",
    favorite: true,
    bestSeller: true,
    cashBack5: true,
    price: "250,000",
    soldQuantity: 200,
  },
  {
    image: "https://example.com/image4.jpg",
    productName: "Product Name 4",
    favorite: false,
    bestSeller: false,
    cashBack5: true,
    price: "100,000",
    soldQuantity: 100,
  },
  {
    image: "https://example.com/image5.jpg",
    productName: "Product Name 5",
    favorite: true,
    bestSeller: false,
    cashBack5: false,
    price: "300,000",
    soldQuantity: 50,
  },
  {
    image: "https://example.com/image6.jpg",
    productName: "Product Name 6",
    favorite: true,
    bestSeller: true,
    cashBack5: false,
    price: "180,000",
    soldQuantity: 400,
  },
  {
    image: "https://example.com/image7.jpg",
    productName: "Product Name 7",
    favorite: false,
    bestSeller: true,
    cashBack5: true,
    price: "220,000",
    soldQuantity: 220,
  },
  {
    image: "https://example.com/image8.jpg",
    productName: "Product Name 8",
    favorite: false,
    bestSeller: false,
    cashBack5: false,
    price: "120,000",
    soldQuantity: 330,
  },
  {
    image: "https://example.com/image9.jpg",
    productName: "Product Name 9",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "270,000",
    soldQuantity: 145,
  },
  {
    image: "https://example.com/image10.jpg",
    productName: "Product Name 10",
    favorite: false,
    bestSeller: true,
    cashBack5: true,
    price: "330,000",
    soldQuantity: 90,
  },
  {
    image: "https://example.com/image11.jpg",
    productName: "Product Name 11",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "190,000",
    soldQuantity: 110,
  },
  {
    image: "https://example.com/image12.jpg",
    productName: "Product Name 12",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "210,000",
    soldQuantity: 295,
  },
  {
    image: "https://example.com/image13.jpg",
    productName: "Product Name 13",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "290,000",
    soldQuantity: 135,
  },
  {
    image: "https://example.com/image14.jpg",
    productName: "Product Name 14",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "260,000",
    soldQuantity: 410,
  },
  {
    image: "https://example.com/image15.jpg",
    productName: "Product Name 15",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "350,000",
    soldQuantity: 120,
  },
  {
    image: "https://example.com/image16.jpg",
    productName: "Product Name 16",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "230,000",
    soldQuantity: 250,
  },
  {
    image: "https://example.com/image17.jpg",
    productName: "Product Name 17",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "280,000",
    soldQuantity: 180,
  },
  {
    image: "https://example.com/image18.jpg",
    productName: "Product Name 18",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "170,000",
    soldQuantity: 310,
  },
  {
    image: "https://example.com/image19.jpg",
    productName: "Product Name 19",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "240,000",
    soldQuantity: 200,
  },
  {
    image: "https://example.com/image20.jpg",
    productName: "Product Name 20",
    favorite: false,
    bestSeller: true,
    cashBack5: true,
    price: "310,000",
    soldQuantity: 275,
  },
  {
    image: "https://example.com/image21.jpg",
    productName: "Product Name 21",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "400,000",
    soldQuantity: 190,
  },
  {
    image: "https://example.com/image22.jpg",
    productName: "Product Name 22",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "280,000",
    soldQuantity: 320,
  },
  {
    image: "https://example.com/image23.jpg",
    productName: "Product Name 23",
    favorite: true,
    bestSeller: true,
    cashBack5: false,
    price: "340,000",
    soldQuantity: 230,
  },
  {
    image: "https://example.com/image24.jpg",
    productName: "Product Name 24",
    favorite: false,
    bestSeller: false,
    cashBack5: true,
    price: "220,000",
    soldQuantity: 185,
  },
  {
    image: "https://example.com/image25.jpg",
    productName: "Product Name 25",
    favorite: true,
    bestSeller: false,
    cashBack5: false,
    price: "180,000",
    soldQuantity: 260,
  },
  {
    image: "https://example.com/image26.jpg",
    productName: "Product Name 26",
    favorite: true,
    bestSeller: true,
    cashBack5: true,
    price: "250,000",
    soldQuantity: 410,
  },
  {
    image: "https://example.com/image27.jpg",
    productName: "Product Name 27",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "330,000",
    soldQuantity: 275,
  },
  {
    image: "https://example.com/image28.jpg",
    productName: "Product Name 28",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "270,000",
    soldQuantity: 145,
  },
  {
    image: "https://example.com/image29.jpg",
    productName: "Product Name 29",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "300,000",
    soldQuantity: 215,
  },
  {
    image: "https://example.com/image30.jpg",
    productName: "Product Name 30",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "210,000",
    soldQuantity: 195,
  },
  {
    image: "https://example.com/image31.jpg",
    productName: "Product Name 31",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "240,000",
    soldQuantity: 280,
  },
  {
    image: "https://example.com/image32.jpg",
    productName: "Product Name 32",
    favorite: true,
    bestSeller: true,
    cashBack5: false,
    price: "290,000",
    soldQuantity: 225,
  },
  {
    image: "https://example.com/image33.jpg",
    productName: "Product Name 33",
    favorite: false,
    bestSeller: false,
    cashBack5: true,
    price: "170,000",
    soldQuantity: 140,
  },
  {
    image: "https://example.com/image34.jpg",
    productName: "Product Name 34",
    favorite: true,
    bestSeller: false,
    cashBack5: false,
    price: "260,000",
    soldQuantity: 310,
  },
  {
    image: "https://example.com/image35.jpg",
    productName: "Product Name 35",
    favorite: false,
    bestSeller: true,
    cashBack5: true,
    price: "320,000",
    soldQuantity: 170,
  },
  {
    image: "https://example.com/image36.jpg",
    productName: "Product Name 36",
    favorite: true,
    bestSeller: false,
    cashBack5: true,
    price: "230,000",
    soldQuantity: 220,
  },
  {
    image: "https://example.com/image37.jpg",
    productName: "Product Name 37",
    favorite: false,
    bestSeller: true,
    cashBack5: false,
    price: "280,000",
    soldQuantity: 210,
  },
  {
    image: "https://example.com/image38.jpg",
    productName: "Product Name 38",
    favorite: true,
    bestSeller: true,
    cashBack5: true,
    price: "270,000",
    soldQuantity: 240,
  },
  {
    image: "https://example.com/image39.jpg",
    productName: "Product Name 39",
    favorite: false,
    bestSeller: false,
    cashBack5: true,
    price: "300,000",
    soldQuantity: 190,
  },
  {
    image: "https://example.com/image40.jpg",
    productName: "Product Name 40",
    favorite: true,
    bestSeller: false,
    cashBack5: false,
    price: "1,000,000",
    soldQuantity: 250,
  },
];

function ListRemark() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>GỢI Ý HÔM NAY</div>
      <ul className={cx("list")}>
        {products.map((item, index) => (
          <li key={index} className={cx("wrapper-item")}>
            <img src={item.image} alt="" />
            <div className={cx("title-item")}>
              {item.favorite && (
                <span className={cx("favorite-item")}>Yêu thích</span>
              )}
              {item.productName}
            </div>
            <div className={cx("info-item")}>
              {item.bestSeller && (
                <div className={cx("bestseller-item")}>Đang bán chạy</div>
              )}
              {item.cashBack5 && (
                <div className={cx("cashback-item")}>Hoàn 5%</div>
              )}
            </div>
            <div className={cx("price-item")}>
              <div className={cx("price")}>
                <span className={cx("VND")}>₫</span>
                {item.price}
              </div>
              <div className={cx("sold-item")}>Đã bán {item.soldQuantity}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRemark;
