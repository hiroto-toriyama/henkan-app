import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopCards from "../components/TopCards";

const TopPage = () => {
  return  (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-5">
        文字列をいろいろ変換するwebアプリだよ

        <TopCards />

      </div>
      <Footer />
    </div>
  );
};

export default TopPage;