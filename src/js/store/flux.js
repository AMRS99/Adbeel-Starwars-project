const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			planets:[],
			vehicles:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
			GetCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(response =>{
					if(!response.ok)
						throw new Error(response.statusText);
					return response.json();
				})
				.then(data =>{
					setStore({characters: data.results})
				})
				.catch(error=>{"Error:", error})
			},
			GetPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(response => {
					if(!response.ok)
						throw new Error(response.statusText);
					return response.json();
				})
				.then(data =>{
					setStore({planets: data.results})
				})
				.catch(error=>{"Error:", error})
			},
			GetVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(response => {
					if(!response.ok)
						throw new Error(response.statusText);
					return response.json();
				})
				.then(data =>{
					setStore({vehicles: data.results})
				})
				.catch(error=>{"Error:", error})
			}
		}
	};
};

export default getState;
