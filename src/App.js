import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Mocha',
  //     animal: 'Dog',
  //     breed: 'Point-Setter',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Kona',
  //     animal: 'Dog',
  //     breed: 'Husky',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Charlie',
  //     animal: 'Cat',
  //     breed: 'Kitty',
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!!!</h1>
      <SearchParams />
      {/* <Pet name="luna" animal="dog" breed="shitzu" />
      <Pet name="luna2" animal="dog2" breed="shitzu2" />
      <Pet name="luna3" animal="dog3" breed="shitzu3" /> */}
    </div>
  );
};

render(<App />, document.getElementById('root'));
