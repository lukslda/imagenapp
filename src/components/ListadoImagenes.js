import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    //envia todo el objecto imagen para tener disponible a todos los valores
                    imagen={imagen}
                />
            ))}
        </div>
     );
}

export default ListadoImagenes;