import logo from './logo.svg';
import './App.css';
import { ModalEjemplo } from './components/modalEjemplo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tarjeta } from './components/Tarjeta';

function App() {
 return (
   <>
   <Tarjeta/>
    <div className="card" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  </div>
   <ModalEjemplo/>
   <div className="container">
     <div className="row">
       <div className="col-6" style={{backgroundColor:"red"}}>
            <form className="row g-3">
              <div className="col-auto">
                <label for="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
              </div>
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
              </div>
            </form>
       </div>
     </div>
   </div>
   </>
 )
}

export default App;
