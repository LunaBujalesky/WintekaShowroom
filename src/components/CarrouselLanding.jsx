
import bannerimg3 from "../assets/bannerimg3.png";

function CarrouselLanding({ greeting }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: "10px",
        width: "98%",
        height:  "500px",
        textAlign: "center",
        backgroundImage: `url(${bannerimg3})`,
        textShadow: "10px 0px 9.7px rgba(255, 251, 200, 0.58), 0px 2px 9.7px rgba(52, 50, 41, 1)",
      }}
    >
      {greeting}
    </div>
  );
}
export default CarrouselLanding;
