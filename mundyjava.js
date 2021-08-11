const icon = document.querySelector('.icon');
const search = document.querySelector('.search'); // para el efecto de la barra del primer update en git

icon.onclick = function(){
    $('#exampleModalCenter').modal('show'); //trigger para abrir modal
    //search.classList.toggle('active') es para el efecto de la barra de busqueda del primer update en git
}
//funcion para utilizar el valor ingresado en el input
function btn(){
    const input = document.getElementById('input_text');
    const country=input.value
    get_date_country(country)

}

//request a la appi por el dato del input almacenado "country"
function get_date_country(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        .then(response => response.json())
        .then(res => {
            console.log(res[0].name)
            console.log(res[0].alpha3Code)
            console.log(res[0].capital)
            console.log(res[0].subregion[0])
            console.log(res[0].borders)
            console.log(res[0].currencies[0].name[0])
            console.log(res[0].currencies[0].symbol[0])
            console.log(res[0].population)
            console.log(res[0].demonym)


            const h5_fullname = document.getElementById('h5_text_fullname');
            const h5_alphacode = document.getElementById('h5_text_alphacode');
            const h5_capital= document.getElementById('h5_text_capital');
            const h5_subregion = document.getElementById('h5_text_subregion')
            const h5_border = document.getElementById('h5_text_border');
            const h5_currency = document.getElementById('h5_text_currency');
            const h5_population = document.getElementById('h5_text_population');
            const h5_demonym = document.getElementById('h5_text_demonym');

            if (res.name === undefined) {
                const h3_error=document.getElementById('h3_text_error');
                h3_error.innerText=`Error: ${country} is not valid. Please try again.`
            } else {
                h5_fullname.innerText= `Full name: ${res[0].name}`
                h5_capital.innerText= `Capital: ${res[0].capital}`
                h5_subregion.innerText=`Region: ${res[0].subregion[0]}`
                h5_border.innerText = `Border countries: ${res[0].borders}`
                h5_alphacode.innerText= `Alpha code 3: ${res[0].alpha3Code}`
                h5_currency.innerText = `Currency: ${res[0].currencies[0].symbol[0]} ${res[0].currencies[0].name[0]}`
                h5_population.innerText= `Population: ${res[0].population}`
                h5_demonym.innerText= `Demonym: ${res[0].demonym}`
            }
        }
        );
}