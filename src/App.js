import { useEffect, useState } from 'react';
import './App.css';
import CovidDetails from './component/CovidDetails';
import CovidForm from './component/CovidForm';
import Header from './component/Header';
import Source from './component/Source';
import Spinner from './component/Spinner';

const App = () => {
  const [covidImg, setCovidImg] = useState('');
  const [country, setCountry] = useState('global');
  const [confirmed, setConfirmed] = useState(0);
  const [death, setDeath] = useState(0);
  const [source, setSource] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCovidData = async () => {
      const request = await fetch('https://covid19.mathdro.id/api');
      const data = await request.json();
      setCovidImg(data.image);
      setConfirmed(data.confirmed.value);
      setDeath(data.deaths.value);
      setSource(data.source);
    };
    fetchCovidData();
  }, []);

  useEffect(() => {
    const fetchCountryData = async () => {
      const request = await fetch('https://covid19.mathdro.id/api/countries');
      const data = await request.json();

      const countriesMap = data.countries.map((country) => {
        return {
          value: country.iso2,
          label: country.name,
        };
      });
      setCountryList(countriesMap);
      console.log(data);
      setLoading(false);
    };
    fetchCountryData();
  }, []);

  const onSelect = async (option) => {
    console.log(option);
    setLoading(true);
    const request = await fetch(
      'https://covid19.mathdro.id/api/countries/' + option.value
    );
    const data = await request.json();
    setCountry(option.label);
    setConfirmed(data.confirmed.value);
    setDeath(data.deaths.value);
    setLoading(false);
  };

  return (
    <div className='container text-center mt-5'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header covidImg={covidImg} />
          <CovidForm
            country={country}
            onSelect={onSelect}
            countryList={countryList}
          />
          <CovidDetails country={country} confirmed={confirmed} death={death} />
          <Source source={source} />
        </>
      )}
    </div>
  );
};

export default App;
