import estilos from './tarjetaElemento.module.css'

interface Props {
  titulo: string
  artista: string
  fecha: string
  imagen: string | null;
}

function TarjetaElemento({ titulo, artista, fecha, imagen }: Props) {
  return (
    <div className={estilos.tarjeta}>
      <img className={estilos.imagen} src={imagen || 'https://via.placeholder.com/150'} alt={titulo} />
      <h3>{titulo}</h3>
      <p>Artista: {artista}</p>
      <p>Fecha: {fecha}</p>
    </div>
  );
}

export default TarjetaElemento