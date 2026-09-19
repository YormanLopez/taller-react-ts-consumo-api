import estilos from './TarjetaElemento.module.css'

interface Props {
  nombre: string
  especie: string
  estado: string
  imagen: string | null;
}

function TarjetaElemento({ nombre, especie, estado, imagen }: Props) {
  return (
    <div className={estilos.tarjeta}>
      <img className={estilos.imagen} src={imagen || 'https://via.placeholder.com/150'} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Especie: {especie}</p>
      <p>Estado: {estado}</p>
    </div>
  );
}

export default TarjetaElemento