import React, { Container } from 'react-bootstrap';
import TopNav from './components/TopNav';
import MedNav from './components/MedNav';
import BottomNav from './components/BottomNav';
import { CartProvider } from 'react-use-cart';
import Cards from './components/Card';
import SimilarSwiper from './components/SimilarSwiper';
import data from './data';
import Footer from './components/Footer';


function App() {




  // const addItem = () => {
  //   localStorage.setItem('item', JSON.stringify(data));

  // }


  // //get Data from localStorage
  // let dataGet = [];
  // const loadData = localStorage.getItem("item");
  // dataGet = JSON.parse(loadData);


  // const Remove = () => {

  //   localStorage.removeItem("item");

  // }




  return (

    <>
      <CartProvider>
        <TopNav />
        <MedNav />
        <BottomNav />
        <Container>

          {
            data.products.map((item) => {
              return (
                <Cards item={item} id={item.id} title={item.title} price={item.price} rate={item.rate} allRate={item.allRate} image={item.image} category={item.category} />
              )
            })
          }


          <SimilarSwiper />

        </Container>
      </CartProvider>

      <Footer />

    </>

  );
}

export default App;
