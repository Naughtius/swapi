export default class SwapiService {
   _apiBase = "https://swapi.dev/api";

   getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      return await res.json();
   };

   getAllPerson = async () => {
      const res = await this.getResource("/people/");
      return res.results.map(this._transformPerson);
   };

   getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
   };

   getAllPlanets = async () => {
      const res = await this.getResource("/planets/");
      return res.results.map(this._transformPlanet);
   };

   getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
   };

   getAllStarships = async () => {
      const res = await this.getResource("/starships/");
      return res.results.map(this._transformStarship);
   };

   getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
   };

   _extrackId = (item) => {
      const idRegEx = /\/([0-9]*)\/$/;
      return item.url.match(idRegEx)[1];
   };

   _transformPlanet = (planet) => {
      return {
         id: this._extrackId(planet),
         name: planet.name,
         population: planet.population,
         rotationPeriod: planet.rotation_period,
         diameter: planet.diameter,
         climate: planet.climate,
         link: "planets",
      };
   };

   _transformStarship = (starship) => {
      return {
         id: this._extrackId(starship),
         name: starship.name,
         model: starship.model,
         manufacturer: starship.manufacturer,
         length: starship.length,
         crew: starship.crew,
         passengers: starship.passengers,
         cargoCapicity: starship.cargoCapicity,
         link: "starships",
      };
   };

   _transformPerson = (person) => {
      return {
         id: this._extrackId(person),
         name: person.name,
         gender: person.gender,
         birthYear: person.birth_year,
         eyeColor: person.eye_color,
         height: person.height,
         mass: person.mass,
         hairColor: person.hair_color,
         link: "peoples",
      };
   };

   getAllItems = async () => {
      const starships = await this.getResource("/starships/");
      const planets = await this.getResource("/planets/");
      const peoples = await this.getResource("/people/");

      const newStarships = starships.results.map(this._transformStarship);
      const newPlanets = planets.results.map(this._transformPlanet);
      const newPeoples = peoples.results.map(this._transformPerson);

      return newStarships.concat(newPlanets, newPeoples);
   };
}
