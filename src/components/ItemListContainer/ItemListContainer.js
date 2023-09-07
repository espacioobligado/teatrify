import ItemLista from "../ItemList/ItemLista"  
import { Loader } from "../Loader/Loader"
import { useProductos } from "./useProductos"


 
export const ItemListContainer = () => {

    return (
        <section className="container my-5">
            {
               <ItemLista  />
            }
            
        </section>
    )
}


