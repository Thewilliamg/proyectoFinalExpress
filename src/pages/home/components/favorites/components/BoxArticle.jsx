import './boxArticle.css';
import { useState, useEffect } from "react";

export default function BoxArticle({ objecto }) {
    const [products, setProducts] = useState(Object.values(objecto));

    // Efecto para actualizar productos cuando cambia el objeto
    useEffect(() => {
        setProducts(Object.values(objecto));
    }, [objecto]); // Se ejecuta cuando `objecto` cambia

    const handleProductDeleteClick = async (productId) => {
        try {
            const id = localStorage.getItem('userId');
            const response = await fetch(`http://localhost:5001/api/product/favorite/delete`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: id,
                    productId: productId    
                })
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            // Actualiza el estado para eliminar el producto
            setProducts(prevProducts => prevProducts.filter(item => item.productId !== productId));
        } catch (error) {
            console.error("Error en la eliminación del producto:", error.message);
        }
    }

    return (
        <div className="box-articles">
            {
                products.map((item, index) => (
                    <div className="box-containerArticle" key={index}>
                        <div className="box-imagenArticle">
                            <img src={item.imagen} alt="" />
                        </div>
                        <div className="box-textArticle">
                            <p>{item.texto1}</p>
                            <p>S/ {item.texto2}</p>
                            <p>{item.texto3}</p>
                        </div>
                        <button className='buttonX' onClick={() => handleProductDeleteClick(item.productId)}>X</button>
                    </div>
                ))
            }
        </div>
    );
}