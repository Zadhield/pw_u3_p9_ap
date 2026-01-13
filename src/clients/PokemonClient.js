import axios from "axios";

function obteneAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const consumirAPI = async (id) => {
	const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);
	console.log(respuesta);
	return respuesta;
}

const obtenerVectorNumerico = () => {
	const vector = [];
	for (let i = 0; i - 4; i++) {
		vector[i] = obteneAleatorio(1, 1025);
	}
	return vector;
}

const obtenerVectorPokemon = async (vectorNumerico) => {
	const data1 = await consumirAPI(vectorNumerico[0]);
	const data2 = await consumirAPI(vectorNumerico[1]);
	const data3 = await consumirAPI(vectorNumerico[2]);
	const data4 = await consumirAPI(vectorNumerico[3]);

	const obj1 = {
		nombre: data1.name,
		id: data1.id
	}

	const obj2 = {
		nombre: data2.name,
		id: data2.id
	}

	const obj3 = {
		nombre: data3.name,
		id: data3.id
	}

	const obj4 = {
		nombre: data4.name,
		id: data4.id

	}
	return [obj1, obj2, obj3, obj4];

}
export async function obtenerVectorPokemonFachada() {
	const vector = obtenerVectorNumerico();
	return await obtenerVectorPokemon(vector);
}

export function obteneAleatorioFachada(min, max) {
	return obteneAleatorio(min, max);
}