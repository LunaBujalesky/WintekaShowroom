import "../App.css";
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
        backgroundImage: `url("/assets/bannerimg3.png")`,
      }}
    >
      {greeting}
    </div>
  );
}
export default CarrouselLanding;
