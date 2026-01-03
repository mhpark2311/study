const citySpan = document.getElementById('city');
const tempSpan = document.getElementById('temp');
const humiditySpan = document.getElementById('humidity');
const descriptionSpan = document.getElementById('description');
const windSpan = document.getElementById('wind');
const citySearch = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');

async function getWeather(city) {
  try {
    // API는 [YOUR_API_KEY]로 마스킹
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR_API_KEY]&units=metric`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    alert('도시를 찾을 수 없습니다.');
    return null;
  }
}

function renderWeather(data) {
  citySpan.textContent = data.name ?? '정보 없음';
  tempSpan.textContent = (data.main?.temp ?? '정보 없음') + ' ℃';
  humiditySpan.textContent = (data.main?.humidity ?? '정보 없음') + ' %';
  descriptionSpan.textContent = data.weather?.[0]?.description ?? '정보 없음';
  windSpan.textContent = (data.wind?.speed ?? '정보 없음') + ' m/s';
}

async function getAndRender(city) {
  const data = await getWeather(city);
  if (data) {
    renderWeather(data);
  }
}

getAndRender('Busan');

searchBtn.addEventListener('click', function () {
  const city = citySearch.value.trim();
  if (city) {
    getAndRender(city);
  }
  citySearch.value = '';
});

citySearch.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const city = citySearch.value.trim();
    if (city) {
      getAndRender(city);
    }
    citySearch.value = '';
  }
});
