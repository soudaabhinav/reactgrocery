import "./Banner.css";

const Banner = ({ datum }) => {
  return (
    <div className="banner">
      <div className="img">
        <img src={datum.image}></img>
      </div>
    </div>
  );
};

export default Banner;
