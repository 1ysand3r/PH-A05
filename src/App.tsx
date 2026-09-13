import Banner from "./Banner.tsx"
import Footer from "./Footer.tsx"
import Header from "./Header.tsx"
import Technologies from "./Technologies.tsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Technologies/>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
