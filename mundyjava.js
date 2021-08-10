const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

icon.onclick = function(){
    search.classList.toggle('active')
    $('#mimodal').modal('show');
}

function btn(){
    const input = document.getElementById('input_text');
    const country=input.value
    get_date_country(country)

}

function get_date_country(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        .then(response => response.json())
        .then(res => {
            console.log(res[0].name)
            console.log(res[0].alpha3Code)
            console.log(res[0].capital)
            console.log(res[0].borders)
            console.log(res[0].currencies)
            console.log(res[0].population)
            console.log(res[0].demonym)


            const h5_fullname = document.getElementById('h5_text_fullname');
            const h5_alphacode = document.getElementById('h5_text_alphacode');
            const h5_capital= document.getElementById('h5_text_capital');
            const h5_border = document.getElementById('h5_text_border');
            const h5_currency = document.getElementById('h5_text_currency');
            const h5_population = document.getElementById('h5_text_population');
            const h5_demonym = document.getElementById('h5_text_demonym');


            h5_fullname.innerText= `Full name: ${res[0].name}`
            h5_alphacode.innerText= `Alpha code 3: ${res[0].alpha3Code}`
            h5_capital.innerText= `Capital: ${res[0].capital}`
            h5_border.innerText = `Border countries: ${res[0].borders}`
            h5_currency.innerText = `Currency: ${res[0].currencies}`
            h5_population.innerText= `Popularion ${res[0].population}`
            h5_demonym.innerText= `Demonym: ${res[0].demonym}`
        }
        );
}