import axios from "axios";

// Nomenclatura de una expresión lambda en js
const consumirAPI = async () => {
	// Siempre que tenga el async tiene que tener el await
	// se puede omitir el await porq la última versión de axios ya incluye await pero la función siempre tiene
	// que tenerel async y await (consumirAPIFacade)
	const respuesta = await axios.get('https://yesno.wtf/api').then(r => r.data);
	console.log(respuesta);
	return respuesta;
}
// Se usa una fachada para no exponer todo el método que contiene el cuerpo
export async function consumirAPIFacade() {
	return await consumirAPI();

}