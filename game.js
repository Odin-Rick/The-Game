function game() {
document.getElementById("start")

alert('Je bent opgepakt door de politie en word naar een gevangenis gestuurd')

		var sleutel = prompt('je word wakker in een cel, je ziet een sleutel liggen, pak je hem? ja of nee?')
			if (sleutel === 'ja'){
					if(prompt('Iemand doet je cel open, probeer je hem aan te vallen? ja of nee?') === 'nee'){
							if(prompt('De bewaker is weg en je doet de cel zachtjes open, waar ga je naar toe? De kantine of de controle kamer?') === 'de kantine'){
										if(prompt('Je komt aan in de kantine, ga je wat eten? ja of nee? ') === 'nee'){
													if(prompt('je loopt de gang in, ga je links of rechts') === 'rechts'){		
															if(prompt('nu is het tijd om te ontsnappen, ga je via de hoofdingang of uit het raam') === 'het raam'){
																	if(prompt('je bent op het plein omringd door een hek, pak je de ladder? ja of nee?') === 'ja' ){
																			if(prompt('Je bent buiten de gevangenis, pak je de auto of de motor om weg te komen?') === 'de auto'){
																					if(prompt('je rijd richting de grens, ga je de grens over? ja of nee?') === 'ja'){
																						 	(alert('Je bent over de grens, de politie kan je niet meer pakken. Je bent succesvol ontsnapt!!'))
										}
										else{
											alert('je rijd weg van de grens maar achter kwam de politie achter je aan, helaas')
										}
									}
									else{
										alert('Je rijd weg met de motor maar de weg is afgezet, je kan er niet omheen')
									}
								}
								else{
									alert('Je had geen tijd om over het hek heen te gaan, je bent opgepakt')
								}										
							}
							else{	
								alert('bij de hoofdingang staan alle bewakers, je word opgepakt.')
							}
						}
						else{
							alert('je loopt naar links waar net 5 bewakers aan komen rennen, helaas')
						}
					}
					else{
						alert('terwijl je zit te eten word je opgepakt, jammer')
					}
				}
				else{
					alert('Je bent in de controle kamer maar er zitten 3 bewakers op je te wachten...')
				}
			}
			else{
				alert('Je hebt de bewaker knockout geslagen maar er komen er meer aan! Je bent opgepakt')
			}
		}
		else{
			alert('Nu je de sleutel niet hebt kan je niet ontsnappen, helaas')
		}
	}	
