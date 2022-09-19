import Footer from "../components/Footer";
import Header from "../components/Header";

const FullHalfPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto">
        <div className="btn btn-primary">
          Hello World!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullHalfPage;