
countries = ["Afghanistan","Afryka Południowa","Albania","Algeria","Angola","Arabia Saudyjska","Argentyna","Armenia","Australia","Austria","Azerbejdżan","Bahamy","Bangladesz","Belgia","Belize","Benin","Bhutan","Białoruś","Boliwia","Botswana","Bośnia i Hercegowina","Brazylia","Brunei","Burkina Faso","Burundi","Bułgaria","Chad","Chile","Chiny","Chorwacja","Cypr","Czarnogóra","Czechy","DR Konga","Dania","Demokratyczna Republika Konga","Diamond Princess","Dżibuti","Egipt","Ekwador","El Salvador","Erytrea","Estonia","Etiopia","Falklandy","Fidżi","Filipiny","Finlandia","Francja","Francuskie Terytoria Południowe","Gabon","Gambia","Ghana","Grecja","Grenlandia","Gruzja","Guinea-Bissau","Gujana","Gujana Francuska",
"Gwatemala","Gwinea","Gwinea Równikowa","Haiti","Hiszpania","Holandia","Honduras","Hong Kong","Indie","Indonezja","Irak","Iran","Irlandia","Islandia","Izrael","Jamajka","Japonia","Jemen","Jordania","Kambodża","Kamerun","Kanada","Katar","Kazachstan","Kenia","Kirgistan","Kolumbia","Kongo","Korea","Korea Południowa","Korea Północna","Kosowo","Kostaryka","Kuba","Kuwejt","Lao","Lesotho","Liban","Liberia","Libia","Litwa","Łotwa","Luksemburg","Macedonia","Madagaskar","Malawi","Malezja","Mali","Maroko","Mauretania","Meksyk","Mongolia","Mozambik","Mołdawia","Myanmar","Namibia","Nepal","Niemcy","Niger","Nigeria","Nikaragua","Norwegia","Nowa Kaledonia","Nowa Zelandia","Oman","Pakistan","Palestyna","Panama","Papua Nowa Gwinea","Paragwaj","Peru","Polska",
"Portoryko","Portugalia","Południowy Sudan","Republika Dominikany","Republika Kosowa","Republika Syryjsko-Arabska","Republika Środkowoafrykańska","Rosja","Rumunia","Rwanda","Sahara Zachodnia","Senegal","Serbia","Sierra Leone","Singapur","Somalia","Sri Lanka","Suazi","Sudan","Surinam","Svalbard i Jan Mayen","Szwajcaria","Szwecja","Słowacja","Słowenia","Tadżykistan","Tajlandia","Tajwan","Tanzania","Timor Wschodni","Togo","Trynidad i Tobago","Tunezja","Turcja","Turkmenia","USA","Uganda","Ukraina","Urugwaj","Uzbekistan","Vanuatu","Wenezuela","Wielka Brytania","Wietnam","Wybrzeże Kości Słoniowej","Wyspy Salomona","Węgry","Włochy","Zambia","Zimbabwe","Zjednoczone Emiraty Arabskie"]

  var first = document.querySelector("#f")
  var second = document.querySelector("#s")
  var btn = document.querySelector("#check")
  var alert = document.querySelector("#alert")
  var table = document.querySelector("#data")
  
  for (var i=0; i<countries.length; i++){
    if (countries[i] === "Polska"){
      first.innerHTML +=`<option selected>${countries[i]}</option>`
    }
    else {
      first.innerHTML +=`<option>${countries[i]}</option>`
    }
    second.innerHTML +=`<option>${countries[i]}</option>`
  }

btn.addEventListener("click", function(){
var fcountry = first.value
var scountry = second.value
var answers1 = []
var answers2 = []
if (fcountry === scountry){
  table.innerHTML =""
  alert.innerHTML ="Wybierz dwa różne kraje!"
}
else {
  alert.innerHTML =""
$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var arr =[]
    var d = data.countryitems[0]
    for (var i=1; i<=182; i++){
        arr.push(d[i])
    }
    arr = JSON.stringify(arr)
    $.ajax({
        type: "POST",
        url: 'data.php',
        data: {
            dane:arr
        },
        success: function(feedback)
        {
          var final = JSON.parse(feedback)
          for (var x = 0; x<final.length; x++){
            if (final[x]["title"] === fcountry){
              answers1.push(final[x])
            }
            else if (final[x]["title"] === scountry){
              answers2.push(final[x])
            }
          }
          var answers = answers1.concat(answers2)
          table.innerHTML =""
          table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Nowe zakażenia dzienne</th>
    <th>Łączna liczba zakażonych</th>
    <th>Łączna liczba zgonów</th>
    </tr>`
          answers.forEach(el => {
            table.innerHTML += `
            <tr>
            <td>${el["title"]}</td>
    <td>${el["total_new_cases_today"]}</td>
    <td>${el["total_cases"]}</td>
    <td>${el["total_deaths"]}</td>
    </tr>`
          })
          }
})
  }

})
}
})