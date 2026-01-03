const citySpan = document.getElementById('city');
const tempSpan = document.getElementById('temp');
const humiditySpan = document.getElementById('humidity');
const descriptionSpan = document.getElementById('description');
const windSpan = document.getElementById('wind');
const weatherIcon = document.getElementById('weatherIcon');
const citySearch = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const display = document.getElementById('display');
const LAST_CITY_KEY = 'lastCity';

function saveLastCity(city) {
  localStorage.setItem(LAST_CITY_KEY, city);
}

function loadLastCity() {
  return localStorage.getItem(LAST_CITY_KEY);
}

async function getAndRender(city) {
  loading.classList.remove('hidden');
  display.classList.add('hidden');
  weatherIcon.classList.add('hidden');
  const data = await getWeather(city);
  loading.classList.add('hidden');
  if (data) {
    display.classList.remove('hidden');
    weatherIcon.classList.remove('hidden');
    renderWeather(data);
  }
}

async function getWeather(city) {
  try {
    // API는 [YOUR_API_KEY]로 마스킹
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR_API_KEY]&units=metric`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    alert('도시를 찾을 수 없습니다');
  }
}

function renderWeather(data) {
  citySpan.textContent = data.name ?? '정보 없음';
  tempSpan.textContent = (data.main?.temp ?? '정보 없음') + ' ℃';
  humiditySpan.textContent = (data.main?.humidity ?? '정보 없음') + ' %';
  descriptionSpan.textContent = data.weather?.[0]?.description ?? '정보 없음';
  windSpan.textContent = (data.wind?.speed ?? '정보 없음') + ' m/s';
  if (data.weather?.[0]?.icon) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } else {
    weatherIcon.src = '';
  }
}

const lastCity = loadLastCity();
if (lastCity) {
  getAndRender(lastCity);
} else {
  getAndRender('Busan');
}

searchBtn.addEventListener('click', function () {
  const city = citySearch.value.trim();
  if (city) {
    getAndRender(city);
    saveLastCity(city);
  }
  citySearch.value = '';
});

citySearch.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const city = citySearch.value.trim();
    if (city) {
      getAndRender(city);
      saveLastCity(city);
    }
    citySearch.value = '';
  }
});
