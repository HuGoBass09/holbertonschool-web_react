import $ from 'jquery';
import _ from 'lodash';
import './body.css';


$(() => {
  $('body').append(`
    <button>Click here to get started</button>
    <p id='count'></p>
  `);

  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  $('button').click(debouncedUpdateCounter);
})