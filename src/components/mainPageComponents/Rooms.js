import smallRoom1 from '../../images/smallRoom1.jpg';
import bigRoom from '../../images/bigRoom.jpg';
import '../../css/Rooms.css';
import Navbar from '../../components/mainPageComponents/Navbar';

export default function Rooms() {
  return (
    <div>
      <Navbar/>
      <div className='rooms'>
        <div className="container">        
          <div className='room'>
            <div className="row">
              <div className="col-md-6">
                <img src={ smallRoom1 } alt="Imagen" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2>Habitacion Pequeña</h2>
                <p>
                    Habitacion para 1 persona <br/>
                    Una cama matrimonial <br/>
                    Baño privado
                </p>
              </div>
            </div>
          </div>
          <div className='room'>
            <div className="row">
              <div className="col-md-6">
                <h2>Habitacion Pequeña</h2>
                <p>
                    Habitacion para 2 personas <br/>
                    Una cama matrimonial <br/>
                    Baño privado
                </p>
              </div>
              <div className="col-md-6">
                <img src={ smallRoom1 } alt="Imagen" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className='room'>
            <div className="row">
              <div className="col-md-6">
                <img src={ smallRoom1 } alt="Imagen" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2>Habitacion Mediana</h2>
                <p>
                    Habitacion para 2 personas <br/>
                    Una cama matrimonial <br/>
                    Baño privado
                </p>
              </div>
            </div>
          </div>
          <div className='room'>
            <div className="row">
              <div className="col-md-6">
                <h2>Habitacion grande</h2>
                <p>
                    Habitacion para 4 personas <br/>
                    Una cama matrimonial <br/>
                    Baño privado
                </p>
              </div>
              <div className="col-md-6">
                <img src={ bigRoom } alt="Imagen" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


