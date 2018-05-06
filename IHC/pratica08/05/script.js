fetch("http://thecatapi.com/api/images/get?format=xml&results_per_page=20", {
    method: 'get'
}).then(function(response){
    response.json().then(function(data){
        console.log(data);
    })
});