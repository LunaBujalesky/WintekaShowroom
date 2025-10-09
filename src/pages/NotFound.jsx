import ErrorPage from "../assets/404Error.jpg";
function NotFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center'}}>
      <img src={ErrorPage} alt="Página no encontrada" />
      <h2>404</h2>
      <p>Página no encontrada</p>
    </div>
  );
}

export default NotFound;
