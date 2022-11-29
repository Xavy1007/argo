import { useEffect, useState } from "react";
import axios from "axios";
const Proveedores=()=>{
const [proveedores, setProveedores] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://localhost:8000/almacen/proveedores/",
        })
        .then(response => {
            console.log(response);
            setProveedores(response.data)
            
        })
        .catch(e => console.log(e));
      }, []);


return (
    
    <div className="container">
        <br/>
    <table border="1" className="table">
        <thead >
            <tr>
                <th>Nombre</th>
            
                <th>Descripcion</th>
            </tr>
        </thead>
        <tbody>
            {proveedores.map(proveedor => (  
            <tr key={proveedor.idproveedor}>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.descripcion}</td>
            </tr>
               ) )}
          



        </tbody>
        
    </table>
    </div>
) ;
       
}
export default Proveedores;