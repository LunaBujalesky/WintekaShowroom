import ErrorPage from "../assets/4error.png";

function NotFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', height: '100vh', textAlign: 'center'}}>
      <h2>404</h2>
      <p>Página no encontrada</p>
      <img src={ErrorPage} alt="Página no encontrada" style={{width: '300px', height: 'fit-content',}}/>
      
    </div>
  );
}

export default NotFound;
