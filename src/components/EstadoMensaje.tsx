import estilos from './EstadoMensaje.module.css';

type Tipo = "cargando" | "error" | "vacio";

interface Props {
    tipo: Tipo;
    mensaje?: string;
    onReintentar?: () => void;

}

function EstadoMensaje ({ tipo, mensaje, onReintentar }: Props) {
    return (
        <div className={estilos.contenedor}>
            {tipo === "cargando" && <p>Cargando personajes....</p>}
            {tipo === "error" &&  <p>Error al cargar los datos.</p>}
            {tipo === "error" && onReintentar && (
                <button onClick={onReintentar}>
                    Reintentar
                </button>
            )}
            {tipo === "vacio" && <p>No hay datos para mostrar.</p>}

        </div>
    );
}

export default EstadoMensaje;