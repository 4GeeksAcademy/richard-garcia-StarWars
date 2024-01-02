const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			planetas: [],
			planeta: {}
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
		}
	};
};

export default getState;
