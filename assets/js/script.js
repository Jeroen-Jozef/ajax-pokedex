document.getElementById("submit").addEventListener("click", function(){
    let pokemon = document.getElementById("input").value;
    axios.get("https://pokeapi.co/api/v2/pokemon/"+ pokemon +"/")
        .then(function(response) {
            console.log(response);

        })

        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {

        });

});

