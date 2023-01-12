import './App.css';
import { Wishlist } from './Wishlist';
import pic4 from './pic4.png'

function App() {
  return (
    <div className="container-general">
      
         <div className="container-top">
            <h1 className="header">Wish List</h1>
            <img className="pic4" src={pic4} alt="pic" width="400px" />
          </div>
          
          <div>

          <Wishlist />
          </div>
      

    </div>
  );
}

export default App;
