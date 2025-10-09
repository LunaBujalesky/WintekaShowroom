
import bannerimg3 from "../assets/bannerimg3.png";

function CarrouselLanding({ greeting }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "1837px",
        height:  "fit-content",
        textAlign: "center",
        backgroundImage: `url(${bannerimg3})`,
      }}
    >
      {greeting}
    </div>
  );
}
export default CarrouselLanding;
