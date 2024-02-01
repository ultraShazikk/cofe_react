import "./Cont.css";
import Un from "../img/CombinedShape.svg";
import Ca from "../img/CombinedShape(1).svg";
import Au from "../img/CombinedShape2.svg";

function Cont() {
  return (
    <>
      <section className="cont">
        <div className="container">
          <h4 className="cont_title">Our headquarters</h4>
          <ul className="cont_list">
            <li className="cont_item">
              <img src={Un} alt="img" width="42" height="50" />
              <h5 className="cont_heading">United Kingdom</h5>
              <p className="cont_text">68  Asfordby Rd</p>
              <p className="cont_text">Alcaston</p>
              <p className="cont_text">SY6 1YA</p>
              <p className="cont_text">+44 1241 918425</p>

            </li>

            <li className="cont_item">
              <img src={Ca} alt="img" width="52" height="50" />
              <h5 className="cont_heading">Canada</h5>
              <p className="cont_text">1528  Eglinton Avenue</p>
              <p className="cont_text">Toronto</p>
              <p className="cont_text">Ontario M4P 1A6</p>
              <p className="cont_text">+1 416 485 2997</p>

            </li>

            <li className="cont_item">
              <img src={Au} alt="img" width="49" height="44" />
              <h5 className="cont_heading">Australia</h5>
              <p className="cont_text">36 Swanston Street</p>
              <p className="cont_text">Kewell</p>
              <p className="cont_text"> Victoria</p>
              <p className="cont_text"> +61 4 9928 3629</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Cont;