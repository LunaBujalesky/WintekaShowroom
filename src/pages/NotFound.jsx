import ErrorPage from "../assets/error.png";

function NotFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', textAlign: 'center'}}>
      <h2 style={{fontSize: '40px', color: '#322C26'}}>404</h2>
      <p style={{fontSize: '20px', color: '#322C26', fontWeight: 'bold'}}>Lo sentimos, parece que lo que buscas no existe o no se encuentra disponible</p>
      <img src={ErrorPage} alt="Página no encontrada" style={{width: '500px', height: 'fit-content',}}/>
      
    </div>
  );
}

export default NotFound;
