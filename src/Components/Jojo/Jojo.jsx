import "./Jojo.css";
import Cofe from "../img/Cofe.png";

function Jojo() {
  return (
    <>
      <section className="jojo">
        <div className="container">
            <div className="jojo_box">
                <h3 className="jojo_heading">Uncompromising quality</h3>
                <p className="jojo_text">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>

            <img className="jojo_img" src={Cofe} alt="img" />

        </div>
      </section>
    </>
  );
}

export default Jojo;