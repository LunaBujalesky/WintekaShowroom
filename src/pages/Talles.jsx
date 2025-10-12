import TablaTalles from "../assets/guia-de-talles.jpg";
function  Talles() {
    return (
            <div style={{ display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", 
            background:"#5A6648", margin:"20px auto", width:"1700px", height:"1200px"}}>
                <h2 style={{ fontFamily: 'QuencyDemo', fontSize:"96px" }}>Guia de Talles</h2>
                <img src={TablaTalles} alt="" style={{width:"1296px", height:"840px"}}/>
            </div>
        
    );
  }
  
  export default  Talles;