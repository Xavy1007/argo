import { useEffect, useState } from "react";
import axios from "axios";
const Almacenes=()=>{
const [almacenes, setAlmacenes] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://localhost:8000/almacen/almacenes/",
        })
        .then(response => {
            console.log(response);
            setAlmacenes(response.data)
            
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
            {almacenes.map(almacen => (  
            <tr key={almacen.idalmacen}>
                <td>{almacen.nombre}</td>
                <td>{almacen.descripcion}</td>
            </tr>
               ) )}
          



        </tbody>
        
    </table>
    </div>
) ;
       
}
export default Almacenes;