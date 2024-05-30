//DESARROLLA AQUI TUS SOLUCIONES
//1.Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.
const getRandomPokemon = async () => {
    const numeroAleatorio = Math.floor(Math.random() * 1025);
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            return respuestaOK;
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }
};

//2.Declara una funcion **getImageAndName** que retorne el nombre 
//y la URL de la imagen de un pokemon => (return {img, name}).
const getImageAndName = async (pokemon) => {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            const img = respuestaOK.sprites.front_default;
            const name = respuestaOK.name;
            return { img, name };
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }
};

//3.Declara una funcion **printImageAndName** que retorne el string necesario 
//para pintar la imagen y el nombre del pokemon en el DOM.
const printImageAndName = async () => {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/pikachu`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            return `<section><img src="${respuestaOK.sprites.front_default}" alt="${respuestaOK.name}"><h1>${respuestaOK.name}</h1></section>`;
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }

};

//4.Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio.
const getRandomDogImage = async () => {
    try {
        const respuesta = await fetch(
            `https://dog.ceo/api/breeds/image/random`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            let urlImagen = respuestaOK.message;
            return urlImagen;
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }


};

// 5.Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio. 
const getRandomPokemonImage = async () => {
    const numeroAleatorio = Math.floor(Math.random() * 1025);
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            const imagen = respuestaOK.sprites.front_default;
            return imagen;
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }
};

//6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
const printPugVsPikachu = async () => {
    try {
      const respuesta1 = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`, {
        method: 'GET',
      });
      const respuesta2 = fetch(`https://dog.ceo/api/breed/pug/images/random`, {
        method: 'GET',
      });
  
      const respuestas = await Promise.all([respuesta1, respuesta2]);
  
      if (!respuestas[0].ok || !respuestas[1].ok) {
        return Promise.reject(
          new Error(`¡Error HTTP! Estado: ${respuestas.status}`)
        );
      } else {
        let respuesta1OK = await respuestas[0].json();
        let respuesta2OK = await respuestas[1].json();
  
        let imgPikachu = respuesta1OK.sprites.front_default;
        let namePikachu = respuesta1OK.name;
        const bodyHTML = document.querySelector('body');
        const imgHTML = document.createElement('img');
        const imgPug = document.createElement('img');
        const h3PikachuPug = document.createElement('h3');
        h3PikachuPug.innerHTML = `La batalla entre ${namePikachu} y Pug`;
        imgHTML.src = imgPikachu;
        imgPug.src = respuesta2OK.message;
  
        bodyHTML.append(h3PikachuPug, imgHTML, imgPug);
      }
    } catch (error) {
      throw console.log(`Este es el error: ${error}`);
    }
  };
  
  printPugVsPikachu();

//7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio. 
const getRandomCharacter = async () => {
    const numeroAleatorio = Math.floor(Math.random() * 826);
    try {
        const respuesta = await fetch(
            `https://rickandmortyapi.com/api/character/${numeroAleatorio}`,
            {
                method: 'GET',
            }
        );
        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            return respuestaOK;
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }
};

//8. Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, 
//nombre, episodios en los que aparece y el nombre del primer episodio en el que 
//aparece + fecha de estreno, tendrás que hacer otro fetch 
//para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
const getRandomCharacterInfo = async () => {
    const numeroAleatorio = Math.floor(Math.random() * 826);
    try {
        const respuesta = await fetch(
            `https://rickandmortyapi.com/api/character/${numeroAleatorio}`,
            {
                method: 'GET',
            }
        );

        if (!respuesta.ok) {
            return Promise.reject(
                new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
            );
        } else {
            let respuestaOK = await respuesta.json();
            let img = respuestaOK.image;
            let name = respuestaOK.name;
            let episodes = respuestaOK.episode;
            const respuesta2 = await fetch(`${episodes[0]}`, {
                method: 'GET',
            });
            if (!respuesta2.ok) {
                return Promise.reject(
                    new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
                );
            } else {
                let respuesta2OK = await respuesta2.json();
                let firstEpisode = respuesta2OK.name;
                let dateEpisode = respuesta2OK.air_date;
                return ({ img, name, episodes, firstEpisode, dateEpisode });
            }
        }
    } catch (error) {
        throw console.log(`Este es el error: ${error}`);
    }
};

//9.Pinta los anteriores datos en el DOM (no se testea)
const paintRandomCharacterInfo = async () => {
    const numeroAleatorio = Math.floor(Math.random() * 826);
    try {
      const respuesta = await fetch(
        `https://rickandmortyapi.com/api/character/${numeroAleatorio}`,
        {
          method: 'GET',
        }
      );
  
      if (!respuesta.ok) {
        return Promise.reject(
          new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
        );
      } else {
        let respuestaOK = await respuesta.json();
        let img = respuestaOK.image;
        let name = respuestaOK.name;
        let episodes = respuestaOK.episode;
        const respuesta2 = await fetch(`${episodes[0]}`, {
          method: 'GET',
        });
        if (!respuesta2.ok) {
          return Promise.reject(
            new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
          );
        } else {
          let respuesta2OK = await respuesta2.json();
          let firstEpisode = respuesta2OK.name;
          let dateEpisode = respuesta2OK.air_date;
          
          const bodyHTML = document.querySelector('body');
          const imgHTML = document.createElement('img');
          const h3Personaje = document.createElement('h3');
          const listaDatos = document.createElement('UL');
          listaDatos.innerHTML = `<li>First episode: ${firstEpisode}</li><li>Date of first episode: ${dateEpisode}</li>`;
          h3Personaje.innerHTML = name;
          imgHTML.src= img;
          bodyHTML.append(imgHTML, h3Personaje, listaDatos);  
          return ({ img, name, episodes, firstEpisode, dateEpisode })
        }
      }
    } catch (error) {
      throw console.log(`Este es el error: ${error}`);
    }
  };

  paintRandomCharacterInfo();