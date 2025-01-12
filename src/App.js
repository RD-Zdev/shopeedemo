import Header from "./component/Header";
import Banner from "./component/Banner";
import HomeCategory from "./component/HomeCategory";
import FlashSale from "./component/FlashSale/FlashSale";
import SimpleBanner from "./component/SimpleBanner";
import BannerMall from "./component/BannerMall";
import TopSearch from "./component/TopSearch/TopSearch";
import ListRemark from "./component/ListRemark/ListRemark";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HomeCategory />
      <FlashSale />
      <SimpleBanner />
      <BannerMall />
      <TopSearch />
      <ListRemark />
      <Footer />
    </div>
  );
}

export default App;
