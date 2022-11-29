import { useEffect, useState } from "react";
import axios from "axios";
const Categorias=()=>{
const [categorias, setCategorias] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://localhost:8000/almacen/categorias/",
        })
        .then(response => {
            console.log(response);
            setCategorias(response.data)
            
        })
        .catch(e => console.log(e));
      }, []);


return (
    
    <div className="container">
        <br/>
    <table  className="table">
        <thead >
            <tr>
                <th>Nombre</th>
            
                <th>Descripcion</th>
            </tr>
        </thead>
        <tbody>
            {categorias.map(categoria => (  
            <tr key={categoria.idcategoria}>
                <td>{categoria.nombre}</td>
                <td>{categoria.descripcion}</td>
            </tr>
               ) )}
          



        </tbody>
        
    </table>
    </div>
) ;
       
}
export default Categorias;