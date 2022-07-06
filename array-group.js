/* Formatear array de objetos (array comidas) a un nuevo formato de array (formato comidas) en javascript  */

/* Formato de array que deseo obtener */
const formatoComidas = [
		{
			fecha: "01-07-2022",
			desayuno: 'D',
			precioDesayuno: 5,
			almuerzo: 'A',
			precioAlmuerzo: 8,
			cena: 'C',
			precioCena: 5
		},
		{
			fecha: "02-07-2022",
			desayuno: null,
			precioDesayuno: null,
			almuerzo: 'A',
			precioAlmuerzo: 8,
			cena: 'C',
			precioCena: 5
		},
	]

/* Formato de array actual */
	const comidas = [
		{
			fecha: "01-07-2022",
			tipo: 'D',
			precio: 5
		},
		{
			fecha: "01-07-2022",
			tipo: 'A',
			precio: 8
		},
		{
			fecha: "01-07-2022",
			tipo: 'C',
			precio: 5
		},
		{
			fecha: "02-07-2022",
			tipo: 'A',
			precio: 8
		},
		{
			fecha: "02-07-2022",
			tipo: 'C',
			precio: 5
		},
		{
			fecha: "03-07-2022",
			tipo: 'A',
			precio: 1200
		},
		{
			fecha: "03-07-2022",
			tipo: 'C',
			precio: 80
		},
    {
			fecha: "04-07-2022",
			tipo: 'A',
			precio: 8.5
		},
    {
			fecha: "04-07-2022",
			tipo: 'C',
			precio: 5.5
		},
	];

    /* Solución */


	const groupByReduce = (list, group, key, value ) => {
		const data = Array.from(
			list.reduce((map, object) => {
				console.log(object[key]);
				return map.set(object[group], Object.assign(
					map.get(object[group]) || { [group]: object[group]},
					{ [object[key]]: object[value] }
				))
			}, new Map).values()
		)

		return data.map(value => {
			return ({
				fecha: value.fecha,
				desayuno: value.D || null,
				precioDesayuno: findePrice(value.D, value.fecha),
				almuerzo: value.A,
				precioAlmuerzo: findePrice(value.A, value.fecha),
				cena: value.C,
				precioCena: findePrice(value.C, value.fecha)
			 })
		});
	}

	const findePrice = (type, fecha) => {
		const data = comidas.find(value => value.tipo == type && value.fecha === fecha);
		return data?.precio || null;
	}


		console.log('array-formateado', groupByReduce(comidas, 'fecha', 'tipo', 'tipo'));

/* fin  */