import { AboutView } from './styled';

export default function About() {

  function GetAll() {
    fetch('https://localhost:5001/api/weatherforecasts')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  function testThing() {
    fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.03309/lat/57.44384/data.json')
      .then(response => response.json())
      .then(data => console.log(data.timeSeries));
  }

  function testThing2() {
    fetch('https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/geotype/point/lon/11.977885/lat/57.684989/data.json')
          //  https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <p>Om Klätterväder</p>
      <AboutView>
        <button onClick={() => GetAll()}>Get all</button>

        <form action="https://localhost:5001/api/weatherforecasts" method="POST">
          <input name="name" type="text" placeholder="area name"/>
          <input name="coordinates" type="text" placeholder="area coordinates" />
          <button>Post the stuff!</button>
        </form>

        <button onClick={() => testThing()}>test backend API now</button>
        <button onClick={() => testThing2()}>test smih again </button>
      </AboutView>
    </>
  );
}