const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			planetas: [],
			planeta: {},
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			obtenerPersonajes: async () => {
				try {

					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({ personajes: data.results })
				} catch (err) {
					console.error(err)

				}
			},


			personajeIndividual: async (id) => {
				try {

					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ personaje: data })
				} catch (err) {
					console.error(err)

				}
			},

			obtenerPlanetas: async () => {
				try {

					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({ planetas: data.results })
				} catch (err) {
					console.error(err)

				}
			},

			planetaIndividual: async (id) => {
				try {

					const response = await fetch("https://swapi.dev/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ planeta: data })
				} catch (err) {
					console.error(err)

				}
			},

			favoritos: (nombre) => {
				const store = getStore()
				if (store.favoritos.includes(nombre)) {
					// Si esta incluido lo va a borrar
					let aux = [] 
					aux = store.favoritos.filter((elemento)=>elemento != nombre)
					setStore({
						favoritos: aux
					})
				}
				else {
					setStore({
						favoritos: [...store.favoritos, nombre]
					})
				}
			}
		}

	};
};

export default getState;
