var dbGame = [
	{
		pregunta: "Peinar la muñeca",
		respuestas:
			[
				{
					respuesta: "Estar loco",
					correcta: true
				},
				{
					respuesta: "Cepillarse el pelo",
					correcta: false
				},
				{
					respuesta: "Jugar con amigas",
					correcta: false
				},
				{
					respuesta: "Salir de fiesta",
					correcta: false
				}
			]
	},

	{
		pregunta: "Hacer perro muerto",
		respuestas:
			[
				{
					respuesta: "Irse de un lugar sin pagar",
					correcta: true
				},
				{
					respuesta: "Hacerse el desentendido",
					correcta: false
				},
				{
					respuesta: "Matar un perro",
					correcta: false
				},
				{
					respuesta: "Quedarse dormido",
					correcta: false
				}
			]
	},

	{
		pregunta: "Hablar cabezas de pescado",
		respuestas:
			[
				{
					respuesta: "Hablar tonterías",
					correcta: true
				},
				{
					respuesta: "Vomitar repentinamente",
					correcta: false
				},
				{
					respuesta: "Tener mal aliento",
					correcta: false
				},
				{
					respuesta: "Decir palabras vulgares",
					correcta: false
				}
			]
	},

	{
		pregunta: "Estar arriba de la pelota",
		respuestas:
			[
				{
					respuesta: "Estar bebido y contento",
					correcta: true
				},
				{
					respuesta: "Mantener el equilibrio",
					correcta: false
				},
				{
					respuesta: "Ver un partido de fútbol",
					correcta: false
				},
				{
					respuesta: "Estar muy gordo",
					correcta: false
				}
			]
	},

	{
		pregunta: "Tener un patas negras",
		respuestas:
			[
				{
					respuesta: "Tener un amante",
					correcta: true
				},
				{
					respuesta: "Tener los pies sucios",
					correcta: false
				},
				{
					respuesta: "Haber corrido mucho",
					correcta: false
				},
				{
					respuesta: "Tener un perro",
					correcta: false
				}
			]
	},

	{
		pregunta: "Sepa moya",
		respuestas:
			[
				{
					respuesta: "Que nadie sabe",
					correcta: true
				},
				{
					respuesta: "Comida con mal sabor",
					correcta: false
				},
				{
					respuesta: "Hablar demasiado",
					correcta: false
				},
				{
					respuesta: "Tener mucha curiosidad",
					correcta: false
				}
			]
	},

	{
		pregunta: "Estirar la pata",
		respuestas:
			[
				{
					respuesta: "Morir",
					correcta: true
				},
				{
					respuesta: "Hacer deporte",
					correcta: false
				},
				{
					respuesta: "Tener calambres",
					correcta: false
				},
				{
					respuesta: "Tropesarse y caer",
					correcta: false
				}
			]
	},

	{
		pregunta: "Hacer perro muerto",
		respuestas:
			[
				{
					respuesta: "Irse de un lugar sin pagar",
					correcta: true
				},
				{
					respuesta: "Hacerse el desentendido",
					correcta: false
				},
				{
					respuesta: "Matar un perro",
					correcta: false
				},
				{
					respuesta: "Quedarse dormido",
					correcta: false
				}
			]
	},

	{
		pregunta: "Echar al agua",
		respuestas:
			[
				{
					respuesta: "Delatar a alguien",
					correcta: true
				},
				{
					respuesta: "Lavar la ropa",
					correcta: false
				},
				{
					respuesta: "Tener escalosfríos",
					correcta: false
				},
				{
					respuesta: "Necesitar una ducha",
					correcta: false
				}
			]
	},

	{
		pregunta: "Valer hongo",
		respuestas:
			[
				{
					respuesta: "No valer nada",
					correcta: true
				},
				{
					respuesta: "Ser muy divertido",
					correcta: false
				},
				{
					respuesta: "Ser de tamaño pequeño",
					correcta: false
				},
				{
					respuesta: "Ser una persona valiosa",
					correcta: false
				}
			]
	},

	{
		pregunta: "Agarrar papa",
		respuestas:
			[
				{
					respuesta: "Aprovecharse de una situación",
					correcta: true
				},
				{
					respuesta: "Tocar partes íntimas",
					correcta: false
				},
				{
					respuesta: "Tener hambre",
					correcta: false
				},
				{
					respuesta: "Mal interpretar algo",
					correcta: false
				}
			]
	},

	{
		pregunta: "Chanta la moto",
		respuestas:
			[
				{
					respuesta: "Pedirle a alguien que se detenga",
					correcta: true
				},
				{
					respuesta: "Estacionarse",
					correcta: false
				},
				{
					respuesta: "Sentarte en un vehículo",
					correcta: false
				},
				{
					respuesta: "Salir de fiesta",
					correcta: false
				}
			]
	},

	{
		pregunta: "Chicotear los caracoles",
		respuestas:
			[
				{
					respuesta: "Que alguien se apure",
					correcta: true
				},
				{
					respuesta: "Que alguien se levante",
					correcta: false
				},
				{
					respuesta: "Tener mucho sueño",
					correcta: false
				},
				{
					respuesta: "Cocinar caracoles",
					correcta: false
				}
			]
	},

	{
		pregunta: "Morir pollo",
		respuestas:
			[
				{
					respuesta: "Mantener un secreto",
					correcta: true
				},
				{
					respuesta: "Estar exhausto",
					correcta: false
				},
				{
					respuesta: "Estar muy pálido",
					correcta: false
				},
				{
					respuesta: "Comer poco",
					correcta: false
				}
			]
	}
]

_.each(dbGame, function (value, key) {
	dbGame[key].id = key
	dbGame[key].respuestas = _.shuffle(dbGame[key].respuestas)
})
