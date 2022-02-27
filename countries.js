const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => displaycountry(data));

}

loadCountries()

const displaycountry = countries => {

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name);

        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        
               <h3>${country.name.common}</h3>
                <p>${country.capital}</p>
                <button onclick="loadcountryName('${country.name.common}')">Show Details</button>
        `;


        countriesDiv.appendChild(div);

    });

}

const loadcountryName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>displaycountryDetail(data[0]))
    
}
const displaycountryDetail=country=>{
const countryDiv=document.getElementById('country-detail');
      
      countryDiv.innerHTML=`
           <h5>${country.name}</h5>
           <p>${country.population}</p>
           <img style="width:200px;" src="${country.flag}"/>
      `;

}