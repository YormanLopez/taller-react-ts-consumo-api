import ListaElementos from './components/listaElementos'
const obras = [
  { id: 1, titulo: 'La persistencia de la memoria', artista: 'Salvador Dalí', fecha: '1931', imagen: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg' },
  { id: 2, titulo: 'La noche estrellada', artista: 'Vincent van Gogh', fecha: '1889', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Starry_Night.JPG' },
  { id: 3, titulo: 'El grito', artista: 'Edvard Munch', fecha: '1893', imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg' },
  { id: 4, titulo: 'Las meninas', artista: 'Diego Velázquez', fecha: '1656', imagen: null },
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