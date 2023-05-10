import './style/reset.css';
import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const bannerTitle = 'We believe well-being is for everyone';
  const bannerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut."

  return (
    <>
      <Header></Header>
      <Banner bannerTitle={bannerTitle} bannerText={bannerText}></Banner>
    </>
  );
}

export default App;
