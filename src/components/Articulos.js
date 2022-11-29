import { useEffect, useState } from "react";
import axios from "axios";
const Articulos=()=>{
const [articulos, setArticulos] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://localhost:8000/almacen/articulos/",
        })
        .then(response => {
            console.log(response);
            setArticulos(response.data)
            
        })
        .catch(e => console.log(e));
      }, []);


return (
    
    <div className="container">
        <br/>
    <table className="table">
        <thead >
            <tr>
                <th>Nombre</th>
            
                <th>Descripcion</th>
            </tr>
        </thead>
        <tbody>
            {articulos.map(articulo => (  
            <tr key={articulo.idarticulo}>
                <td>{articulo.nombre}</td>
                <td>{articulo.descripcion}</td>
            </tr>
               ) )}
          



        </tbody>
        
    </table>
    </div>
) ;
       
}
export default Articulos;