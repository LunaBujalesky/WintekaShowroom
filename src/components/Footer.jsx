import Mushrooms from "../assets/honguitosFooter.svg";
function Footer() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={{ Mushrooms }} alt="" />
    </div>
  );
}
export default Footer;
