import './App.css';
import { useState } from 'react';
import logo from './assets/logo.svg'

function App() {

  const listOfProperties = [
    { id: 1, city: 'Warszawa', bedrooms: 2, description: 'Przestronne mieszkanie z panoramicznym widokiem', price: 5000 },
    { id: 2, city: 'Kraków', bedrooms: 3, description: 'Eleganckie i nowoczesne mieszkanie w centrum', price: 4800 },
    { id: 3, city: 'Wrocław', bedrooms: 5, description: 'Luksusowe penthouse z tarasem i jacuzzi', price: 3000 },
    { id: 4, city: 'Wrocław', bedrooms: 7, description: 'Wielopoziomowy apartament z ogrodem', price: 1980 },
    { id: 5, city: 'Gdańsk', bedrooms: 2, description: 'Apartament nad brzegiem morza z widokiem na plażę', price: 4000},
    { id: 6, city: 'Łeba', bedrooms: 6, description: 'Nowoczesna willa z basenem i prywatnym dostępem do jeziora', price: 2000 },
    { id: 7, city: 'Berlin', bedrooms: 3, description: 'Klimatyczne mieszkanie w historycznej dzielnicy', price: 800 },
    { id: 8, city: 'Gdańsk', bedrooms: 3, description: 'Apartament z tarasem i widokiem na Stare Miasto', price: 1123 },
    { id: 9, city: 'Katowice', bedrooms: 2, description: 'Nowoczesne mieszkanie z dostępem do kompleksu rekreacyjnego', price: 5320},
    { id: 10, city: 'Poznań', bedrooms: 1, description: 'Przytulne mieszkanie w bliskiej odległości od centrum handlowego', price: 3200 },
];

  const [propertyList, setPropertyList] = useState(listOfProperties);
  const [searchField, setSearchField] = useState('city'); // domyslnie wyszukujemy po miescie
  const [searchValue, setSearchValue] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true); // nowy stan domyslnie sortujemy rosnaco

  const listOfPropertiesJSX = propertyList
  .filter(it => String(it[searchField]).toLowerCase().includes(searchValue.toLowerCase())) // filtrujemy liste na podstawie wyszukiwania
  .map(it => (  
    <div className="property-tiles grid">
    <div className="property-tile grid" key={it.id}>
      <p>{it.city}</p>
      <p>Liczba sypialni: {it.bedrooms}</p>
      <p>{it.description}</p>
      <p>Cena: {it.price} PLN</p>
    </div>
    </div>
  ));

  const sortByPrice = () => {
    const sortedList = [...propertyList].sort((a, b) => isSortedAsc ? a.price - b.price : b.price - a.price); // sortujemy w zalezności od stanu issortedasc
    setPropertyList(sortedList);
    setIsSortedAsc(!isSortedAsc); // zmieniamy orientacje sortowania na przeciwna
  };

  return (
    <div>
        <nav className="navbar">
          <img className="logo-image-container" src={logo} alt="Evilla"></img>
          <ul className="menu">
              <li>Przeszukaj: <input className="menu-item menu-search" type="text" value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
              </li>
              <li><select className="menu-item menu-search"
               value={searchField}
               onChange={(e) => setSearchField(e.target.value)}>
               <option className="menu-item" value="city">Miasto</option>
               <option className="menu-item" value="bedrooms">Sypialnie</option>
               <option className="menu-item" value="description">Opis</option>
               </select>
              </li>
              <li><button className="menu-button primary-yellow" onClick={sortByPrice}> Sortuj po cenie </button></li>
          </ul>
        </nav>
      <div className="list">
        {listOfPropertiesJSX}
      </div>
    </div>
  );
}

export default App;
