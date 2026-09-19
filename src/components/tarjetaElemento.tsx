import estilos from './tarjetaElemento.module.css'

interface Props {
  titulo: string
  artista: string
  fecha: string
}

function TarjetaElemento({ titulo, artista, fecha }: Props) {
  return (
    <div className={estilos.tarjeta}>
      <h3>{titulo}</h3>
      <p>Artista: {artista}</p>
      <p>Fecha: {fecha}</p>
    </div>
  );
}

export default TarjetaElemento