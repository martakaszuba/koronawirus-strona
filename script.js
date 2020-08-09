var tabledata = document.querySelector("#data")
var alpha = document.querySelector("#a")
var deaths = document.querySelector("#d")
var inf = document.querySelector("#inf")
var day = document.querySelector("#day")
deaths.addEventListener("click", function(){
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
            final = JSON.parse(feedback)
            final.sort(function(a, b){
              return b["total_deaths"] - a["total_deaths"]
            });
            tabledata.innerHTML =""
            tabledata.innerHTML +=`<tr>
      <th>Kraj</th>
      <th>Nowe zakażenia dzienne</th>
      <th>Łączna liczba zakażonych</th>
      <th>Łączna liczba zgonów</th>
      </tr>`
      var count =1
            for (var j=0; j<=181; j++){
              tabledata.innerHTML +=`<tr>
      <td><b>${count}.</b> ${final[j]["title"]}</td>
      <td>${final[j]["total_new_cases_today"]}</td>
      <td>${final[j]["total_cases"]}</td>
      <td>${final[j]["total_deaths"]}</td>
      </tr>`
      count++
    }        
    }
      })
    }
      })
})

inf.addEventListener("click", function(){
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
            final = JSON.parse(feedback)
            final.sort(function(a, b){
              return b["total_cases"] - a["total_cases"]
            });
            tabledata.innerHTML =""
            tabledata.innerHTML +=`<tr>
      <th>Kraj</th>
      <th>Nowe zakażenia dzienne</th>
      <th>Łączna liczba zakażonych</th>
      <th>Łączna liczba zgonów</th>
      </tr>`
      var count1 = 1
            for (var j=0; j<=181; j++){
              tabledata.innerHTML +=`<tr>
              <td><b>${count1}.</b> ${final[j]["title"]}</td>
      <td>${final[j]["total_new_cases_today"]}</td>
      <td>${final[j]["total_cases"]}</td>
      <td>${final[j]["total_deaths"]}</td>
      </tr>`
      count1++
    }        
    }
      })
    }
      })
})

day.addEventListener("click", function(){
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
            final = JSON.parse(feedback)
            final.sort(function(a, b){
              return b["total_new_cases_today"] - a["total_new_cases_today"]
            });
            tabledata.innerHTML =""
            tabledata.innerHTML +=`<tr>
      <th>Kraj</th>
      <th>Nowe zakażenia dzienne</th>
      <th>Łączna liczba zakażonych</th>
      <th>Łączna liczba zgonów</th>
      </tr>`
      var count2 = 1
            for (var j=0; j<=181; j++){
              tabledata.innerHTML +=`<tr>
              <td><b>${count2}.</b> ${final[j]["title"]}</td>
      <td>${final[j]["total_new_cases_today"]}</td>
      <td>${final[j]["total_cases"]}</td>
      <td>${final[j]["total_deaths"]}</td>
      </tr>`
      count2++
    }        
    }
      })
    }
      })
})

alpha.addEventListener("click", function(){
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
            final = JSON.parse(feedback)
            final.sort(function(a, b){
              return a.title == b.title ? 0 : +(a.title > b.title) || -1;
            });
            tabledata.innerHTML =""
            tabledata.innerHTML +=`<tr>
      <th>Kraj</th>
      <th>Nowe zakażenia dzienne</th>
      <th>Łączna liczba zakażonych</th>
      <th>Łączna liczba zgonów</th>
      </tr>`
            for (var j=0; j<=181; j++){
              tabledata.innerHTML +=`<tr>
      <td>${final[j]["title"]}</td>
      <td>${final[j]["total_new_cases_today"]}</td>
      <td>${final[j]["total_cases"]}</td>
      <td>${final[j]["total_deaths"]}</td>
    </tr>`
  }        
  }
      })
  }
      })
})

function getapi(){
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
          final = JSON.parse(feedback)
          final.sort(function(a, b){
            return a.title == b.title ? 0 : +(a.title > b.title) || -1;
          });
          tabledata.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Nowe zakażenia dzienne</th>
    <th>Łączna liczba zakażonych</th>
    <th>Łączna liczba zgonów</th>
    </tr>`
          for (var j=0; j<=181; j++){
            tabledata.innerHTML +=`<tr>
    <td>${final[j]["title"]}</td>
    <td>${final[j]["total_new_cases_today"]}</td>
    <td>${final[j]["total_cases"]}</td>
    <td>${final[j]["total_deaths"]}</td>
  </tr>`
}        
}
    })
}
    })
}

 $(document).ready(function(){
     getapi()
 })