import Header from "./component/Header";
import Banner from "./component/Banner";
import HomeCategory from "./component/HomeCategory";
import FlashSale from "./component/FlashSale/FlashSale";
import SimpleBanner from "./component/SimpleBanner";
import BannerMall from "./component/BannerMall/BannerMall";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HomeCategory />
      <FlashSale />
      <SimpleBanner />
      <BannerMall />
    </div>
  );
}

export default App;
