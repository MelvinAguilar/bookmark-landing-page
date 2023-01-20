import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Features from "../../components/Features/Features";
import Extension from "../../components/Extension/Extension";
import Questions from "../../components/Questions/Questions";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Introduction />
        <Features />
        <Extension />
        <Questions />
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Home;
