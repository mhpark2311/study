async function getWeather(city) {
  try {
    // API는 [YOUR_API_KEY]로 마스킹
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR_API_KEY]&units=metric`);
    if (!res.ok) throw new Error('도시를 찾을 수 없습니다');
    const data = await res.json();
    //  console.log(data);
    console.log(`도시명 : ${data.name}`);
    console.log(`현재기온 : ${data.main.temp}도`);
    console.log(`습도 : ${data.main.humidity}%`);
    console.log(`날씨 : ${data.weather[0].description}`);
    console.log(`바람 : ${data.wind.speed} m/s`);
  } catch (e) {
    console.error('에러가 발생했습니다');
  }
}

getWeather('Busan');
