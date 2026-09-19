import ListaElementos from './components/listaElementos'
const obras = [
  { id: 1, titulo: 'La persistencia de la memoria', artista: 'Salvador Dalí', fecha: '1931' },
  { id: 2, titulo: 'La noche estrellada', artista: 'Vincent van Gogh', fecha: '1889' }, 
  { id: 3, titulo: 'El grito', artista: 'Edvard Munch', fecha: '1893' },
  { id: 4, titulo: 'Las meninas', artista: 'Diego Velázquez', fecha: '1656' },
];

function App() {
  return (
    <>
      <h1>Galería de arte</h1>
      <ListaElementos obras={obras} />
    </>
  )
}

export default App