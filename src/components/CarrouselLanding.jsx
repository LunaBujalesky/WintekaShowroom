
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
        width: "1837px",
        height:  "500px",
        textAlign: "center",
        backgroundImage: `url(${bannerimg3})`,

        textShadow: "10px 0px 9.7px rgba(255, 251, 200, 0.26), 0px 3px 9.7px rgba(241, 230, 166, 0.25)",
      }}
    >
      {greeting}
    </div>
  );
}
export default CarrouselLanding;
