function fetch_data()
{
    var cityname = document.getElementById('city').value
    if(cityname === "")
    {
        alert('enter city name')
    }
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=5f2b3e37e849eba6b03bd16af2bcb9c0&units=metric'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var resp_code = data['cod']
        if(resp_code === '404')
        {
            alert('city not found')
        }
        else
        {
            var cityTemp = data['main']['temp']
            console.log(cityTemp)
            var icon = data['weather']['0']['icon']
            console.log(icon)
            var icon_url = 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
            document.getElementById('result').innerHTML =
            `<img src=`+icon_url+`>`+`<br>`+`<h3>Temperature is:`+cityTemp+`&deg;C</h3>`
            
        }
    })
}