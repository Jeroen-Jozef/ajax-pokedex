function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
}

document.getElementById("submit").addEventListener("click", function(){
    let pokemon = document.getElementById("input").value;

    if (pokemon === "Jeroen-Jozef") {
        document.getElementById("id").innerText = "rijksnummer 56-45-43";
        var img = document.getElementById("sprite");
        img.src = "https://avatars3.githubusercontent.com/u/53226870?s=400&v=4";
        const moves = ['walk with stick', 'sleep', 'dance', 'wiggle', 'smoke', 'grow grey beard'];
        for (let i = 0; i < moves.length; i++) {
            document.querySelectorAll(".move")[i].innerText = moves[i];
        }

        document.getElementById("evolution").innerText = "Evolved from Baby Jeroen";
    }


    let pokemonInfo = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ pokemon +"/")
        .then(function(response) {
            pokemonInfo = response.data;
            console.log(pokemonInfo);
            var id = pokemonInfo.id;
            console.log(id);
            document.getElementById("id").innerText = id;
            var sprite = document.getElementById("sprite");
            sprite.src = pokemonInfo.sprites.front_default;
            var species = pokemonInfo.species.url;
            console.log(species);
            let moveNames = [];
            pokemonInfo.moves.forEach(function(move, index){
                moveNames.push(move.move.name);
            });
            for (var i = 0; i < 4; i++) {
                var removedMove = moveNames.splice(getRandomIndex(moveNames), 1);
                document.querySelectorAll('.move')[i].innerText = removedMove;
            }


            let speciesInfo = [];
            axios.get(species)
                .then(function(response){
                    speciesInfo = response.data;
                    console.log(speciesInfo);
                    var generationChecker = speciesInfo.evolves_from_species;
                    if (generationChecker === null) {
                        document.getElementById("evolution").innerText = "I'm a baby";
                    } else {
                        document.getElementById("evolution").innerText = generationChecker.name;
                    }


                })
                .catch(function (error) {
                console.error(error);
                })
                .finally(function () {

                });
        })

        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {

        });

});

