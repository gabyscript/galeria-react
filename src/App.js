import './App.css';
import Header from './components/Header/Header.jsx';
import Cards from './components/Cards/Cards.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <><><div>
      <Header />
    </div><section className='card-section'>
        <Cards title="Libros" description="Esta es la tarjeta 1" url="https://i.postimg.cc/CK4QFcpq/libros.jpg" />
        <Cards title="Flores" description="Esta es la tarjeta 2" url="https://i.postimg.cc/4NZHcPDd/flores.jpg" />
        <Cards title="Música" description="Esta es la tarjeta 3" url="https://i.postimg.cc/QdvfhvzC/musica.jpg"/>        
      </section></><div>
        <Footer info="Para más trabajos, click en el buttón a continuación"/>
      </div></> 
  )  
}

export default App;
