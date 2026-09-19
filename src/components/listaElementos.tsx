import TarjetaElemento from "./tarjetaElemento";
import estilos from "./listaElementos.module.css";

interface Obra {
    id: number;
    titulo: string;
    artista: string;
    fecha: string;
    imagen: string | null;
}

interface Props {
    obras: Obra[];
}

function ListaElementos({ obras }: Props) {
    return (
        <div className={estilos.lista}>
            {obras.map((obra) => (
                <TarjetaElemento 
                    key={obra.id}
                    titulo={obra.titulo}
                    artista={obra.artista}
                    fecha={obra.fecha} 
                    imagen={obra.imagen}                />
            ))}
        </div>
    );
}



export default ListaElementos;