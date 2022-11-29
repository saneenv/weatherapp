fetch(`https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=5b4bee0ba241d092159faf007e166080`).then(d=>d.json().then(res=>displaydata(res)))

function displaydata(details){
    cityname=details.name
    wtype=details.sys.type
    wmain=details.weather[0].main
    whumidity=details.main.humidity
    wspeed=details.wind.speed
    srise=details.sys.sunrise
    sset=details.sys.sunset
    temperature=Math.floor(details.main.temp - 273)
  
     sr=new Date(srise*1000)
     dater=sr.toLocaleTimeString()

     ss=new Date(sset*1000)
     dates=ss.toLocaleTimeString()




    htmldata=`<h1 class="large-font mr-3">${temperature}&#176;</h1>`
    htmlcity=` <h2  class="mt-3 mb-0">${cityname}</h2>`
    htmlmain=`<h4>${wmain}</h4>`
    htmlhumid=` <p  class="ml-auto">${whumidity}%</p>`
    htmlwind=`<p  class="ml-auto">${wspeed}mps</p>`
    htmlsunrise=`<p  class="ml-auto">${dater}</p>`
    htmlsunset=`<p  class="ml-auto">${dates}</p>`
    htmltype=`<p  class="ml-auto">${wmain}</p>`
    temp1.innerHTML=htmldata
    city.innerHTML=htmlcity
    main1.innerHTML=htmlmain
    humid.innerHTML=htmlhumid
    wind.innerHTML=htmlwind
    sunr.innerHTML=htmlsunrise
    suns.innerHTML=htmlsunset
    type1.innerHTML=htmltype
}