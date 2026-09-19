import {useState, useEffect} from "react";

// se crea una interface para ayudar a tipar los datos que se van a recibir de la API de obras de arte
interface Arte{
  id: number;
  titulo: string;
  artista: string | null; // El artista puede ser nulo si no se conoce
  imagen_id: string | null; // La imagen puede ser nula si no se tiene una
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
  const [marcados, setMarcados] = useState<number[]>([]);
}