// API 키 ([YOUR_API_KEY]로 마스킹)
const API_KEY = '[YOUR_API_KEY]';

// 최근 검색 기록 리스트
const ul = document.getElementById('searchHistory');

// 화면 표시 관련
const citySpan = document.getElementById('city');
const tempSpan = document.getElementById('temp');
const humiditySpan = document.getElementById('humidity');
const descriptionSpan = document.getElementById('description');
const windSpan = document.getElementById('wind');
const weatherIcon = document.getElementById('weatherIcon');

// 검색 관련
const citySearch = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');

// 로딩화면 관련
const loading = document.getElementById('loading');
const display = document.getElementById('display');

// localStorage 관련
const LAST_CITY_KEY = 'lastCity';
const HISTORY_KEY = 'searchHistory';

function saveHistory(historyArray) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(historyArray));
}

function loadHistory() {
  const data = localStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
}

function renderHistory() {
  let historyArray = loadHistory();
  ul.innerHTML = '';
  historyArray.forEach((city, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = city;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      citySearch.value = city;
      handleSearch();
    });

    li.appendChild(a);
    ul.appendChild(li);
  });
}

function saveLastCity(city) {
  localStorage.setItem(LAST_CITY_KEY, city);
}

function loadLastCity() {
  return localStorage.getItem(LAST_CITY_KEY);
}

async function getWeather(city) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    alert('도시를 찾을 수 없습니다.');
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

async function getAndRender(city) {
  loading.classList.remove('hidden');
  display.classList.add('hidden');
  weatherIcon.classList.add('hidden');
  const data = await getWeather(city);
  loading.classList.add('hidden');
  display.classList.remove('hidden');
  weatherIcon.classList.remove('hidden');
  if (data) {
    renderWeather(data);
  }
  return data;
}

(async () => {
  const lastCity = loadLastCity();
  await getAndRender(lastCity || 'Busan');
  renderHistory();
})();

async function handleSearch() {
  let historyArray = loadHistory();
  const city = citySearch.value.trim();
  const data = await getAndRender(city);
  if (data) {
    saveLastCity(city);
  }
  citySearch.value = '';
  const existingIndex = historyArray.indexOf(city);
  if (existingIndex !== -1) {
    historyArray.splice(existingIndex, 1);
  }
  historyArray.unshift(city);
  if (historyArray.length > 5) {
    historyArray = historyArray.slice(0, 5);
  }
  saveHistory(historyArray);
  renderHistory();
}

citySearch.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

searchBtn.addEventListener('click', handleSearch);
