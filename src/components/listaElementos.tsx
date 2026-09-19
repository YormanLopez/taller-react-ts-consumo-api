import TarjetaElemento from "./tarjetaElemento";
import estilos from "./listaElementos.module.css";

interface Personaje {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface Props {
    personajes: Personaje[];
}

function ListaElementos({ personajes }: Props) {
    return (
        <div className={estilos.lista}>
            {personajes.map((personaje) => (
                <TarjetaElemento 
                    key={personaje.id}
                    nombre={personaje.name}
                    especie={personaje.species}
                    estado={personaje.status}
                    imagen={personaje.image}                />
            ))}
        </div>
    );
}



export default ListaElementos;