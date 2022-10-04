import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  return  (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-5">
        文字列をいろいろ変換するwebアプリだよ

        <div className="flex flex-wrap my-5 -m-5">
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
          <div className="flex-auto card w-96 bg-accent text-accent-content m-5">
            <div className="card-body">
              <h2 className="card-title">全角/半角</h2>
              <p>全角の文章を半角の文章に変換したり、半角の文章を全角の文章に変換できたりするよ</p>
              <div className="card-actions justify-end">
                <Link to="/full-half" className="btn">USE THIS</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;