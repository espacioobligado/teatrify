import React, { useEffect,useState } from 'react';
import './ItemList.css';
import { getItem } from './getItem';   
 import './v2.css'

const ItemListCopy = ( ) => {

const [productos, setProductos] = useState([]);  
useEffect(() => {
  getItem()
    .then((data) => {
      setProductos(data);  
    })
    .catch((error) => {
      console.error('Error al obtener los productos:', error);
    });
}, []);

return (
  <>
<script src="https://cdn.example.com/script.js"></script>
     
<div>
				<Script
					url="./ItemList/lib/turnjs4/lib/turn.js"
				/>
			</div>


      <div className="magazine">
        {productos.map((producto) => (
          <div style={{ backgroundImage: `url(${producto.img})`, backgroundSize: 'cover', height: '50%', width: '50%' }} key={producto.id}></div>
        ))}
      </div>
  
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   
         
  </>
);
};

export default ItemList;