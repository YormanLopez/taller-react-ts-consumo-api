import { useState, useEffect } from "react";
import ListaElementos from "./components/ListaElementos";


interface Personajes {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface RespuestaAPI {
  results: Personajes[];
}


function App() {

  // declaracion e inicializacion de los estados que se van a usar en la aplicacion
  const [personajes, setPersonajes] = useState<Personajes[]>([]);
  const [texto, setTexto] = useState<string>("");
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [intentos, setIntentos] = useState(0);
  const [marcados, setMarcados] = useState<number[]>(() => {
    const guardado = localStorage.getItem("marcados");
    return guardado ? (JSON.parse(guardado) as number[]) : [];
  });
  // se hace un efecto secundario para actualizar el estado de busqueda con un retraso de 400ms después de que el usuario deje de escribir
  useEffect(() => {
    const id = setTimeout(() => {
      setBusqueda(texto);
    }, 400);

    return () => {
      clearTimeout(id);
    };
  }, [texto]);
  // se hace un efecto secundario para cargar los datos de la API cuando se actualiza el estado de busqueda o intentos
  useEffect(() => {
    async function cargar() {
      setError(null);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(busqueda)}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const json: RespuestaAPI = await res.json();
        setPersonajes(json.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      }
    }
    cargar();
  }, [busqueda, intentos]);


  return <div>
    <h1>Serie Rick And Morty</h1>

    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Buscar personaje..."
    />
    {error && (
      <div>
        <p>Ha ocurrido un error: {error}</p>
        <button onClick={() => setIntentos((n) => n + 1)}>
          Reintentar
        </button>
      </div>
    )}
    <ListaElementos personajes={personajes} />
  </div>;
}

export default App;