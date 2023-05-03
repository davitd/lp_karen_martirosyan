import { useEffect, useState } from 'react';
import Register from './pages/auth/Register';
import MobileRegister from './mobile/authPage/MobileRegister';
import Navbar from './components/navbar/Navbar';
import ContainerImg from './components/containerImg/ContainerImg';
import { Loading } from './components/loading/Loading';
import Footer from './components/footer/Footer';


function App() {
  const [mobile, setMobile] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMobile(window.innerWidth < 650)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="App loading">
        <Loading />
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        {mobile ? <MobileRegister /> : <Register />}
        <ContainerImg />
      </main>
      <Footer />
    </div>
  );
}

export default App;
