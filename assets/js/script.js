document.getElementById("submit").addEventListener("click", function(){
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto/")


        .then(function(response) {
            console.log(response);
        })



        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {

        });

});

