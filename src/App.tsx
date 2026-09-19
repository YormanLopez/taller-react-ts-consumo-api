import { useState, useEffect } from "react";

// se crea una interface para ayudar a tipar los datos que se van a recibir de la API de obras de arte
interface Arte {
  id: number;
  title: string;
  artist_display: string | null; // El artista puede ser nulo si no se conoce
  image_id: string | null; // La imagen puede ser nula si no se tiene una
}
interface RespuestaAPI {
  data: Arte[];
}


function App() {

  // declaracion e inicializacion de los estados que se van a usar en la aplicacion
  const [artes, setArtes] = useState<Arte[]>([]);
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
        const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(busqueda)}&limit=12&fields=id,title,artist_display,image_id`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const json: RespuestaAPI = await res.json();
        setArtes(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      }
    }
    cargar();
  }, [busqueda, intentos]);


  return <div>
    <h1>Obras de arte</h1>

    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Buscar obra..."
    />
    {error && (
      <div>
        <p>Ha ocurrido un error: {error}</p>
        <button onClick={() => setIntentos((n) => n + 1)}>
          Reintentar
        </button>
      </div>
    )}
    {artes.map((arte) => (
      <div key={arte.id}>
        {arte.image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${arte.image_id}/full/843,/0/default.jpg`}
            alt={arte.title}
          />
        )}
        <h3>{arte.title}</h3>
        <p>{arte.artist_display}</p>
      </div>
    ))}
  </div>;
}

export default App;