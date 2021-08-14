const icon = document.querySelector('.icon');
const search = document.querySelector('.search'); // para el efecto de la barra del primer update en git

icon.addEventListener('click', function(e) {
    $('#exampleModalCenter').modal('show');                         //trigger para abrir modal
    //search.classList.toggle('active') es para el efecto de la barra de busqueda del primer update en git
    e.stopPropagation();     //para que no se active al cliquear un elemento padre
    
    //funcion para utilizar el valor ingresado en el input
    const input = document.getElementById('input_text');
    const country=input.value
    get_date_country(country)

    //request a la appi por el dato del input almacenado "country"
    function get_date_country(country) {
        fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .then(response => response.json())
            .then(res => {
            console.log(res[0].name)
            console.log(res[0].alpha3Code)
            console.log(res[0].capital)
            console.log(res[0].subregion)
            console.log(res[0].languages[0].name[0])
            console.log(res[0].currencies[0].name[0])
            console.log(res[0].currencies[0].symbol[0])
            console.log(res[0].population)
            console.log(res[0].demonym)


            const h2_fullname = document.getElementById('h2_text_fullname');
            const li_alphacode = document.getElementById('li_text_alphacode');
            const li_capital= document.getElementById('li_text_capital');
            const li_subregion = document.getElementById('li_text_region')
            const li_border = document.getElementById('li_text_border');
            const li_currency = document.getElementById('li_text_currency');
            const li_population = document.getElementById('li_text_population');
            const li_demonym = document.getElementById('li_text_demonym');

            h2_fullname.innerText= `${res[0].name}`
            li_capital.innerText= `Capital: ${res[0].capital}`
            li_subregion.innerText=`Region: ${res[0].subregion}`
            li_border.innerText = `Language: ${res[0].languages[0].name}`
            li_alphacode.innerText= `Alpha code 3: ${res[0].alpha3Code}`
            li_currency.innerText = `Currency: ${res[0].currencies[0].symbol} ${res[0].currencies[0].name}`
            li_population.innerText= `Population: ${res[0].population} inhabitants`
            li_demonym.innerText= `Demonym: ${res[0].demonym}`

            if (res.name == "") or (res.name == null); or (res.name==undefined); {
                $('#Modal1').modal('show');
            }
            }
            );
    }
    }
,);