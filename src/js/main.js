import $ from 'jquery';
import _ from 'lodash';

// Created a url to post data
const url = 'https://secret-forest-21470.herokuapp.com/collections/jaqueer';


// Created a variable to focus on the element form using the DOM
let form = $('.addForm');


// Created a function so that whenever the button is submitted, an event would occur
form.on('submit', function (event) {
  event.preventDefault();

  // Created variables to focus on the value of each input element
  let name      = form.find('.name').val();
  let age       = form.find('.age').val();
  let location  = form.find('.location').val();

  // Created a variable to store the inputs into an object
  let person = {
    name: name,
    age: age,
    location: location
  };

  // Send the data to our server using two params
  // 1. what source you are posting to
  // 2. what values you are posting with
  $.post(url, person).then(function (response) {
  });

  // Whenever the form is submitted,
  // $.post() will grab the url and push the data object
  // which is the variable = person
});


  function getAllMyPeeps() {
    let peopleArea = $('.people')
    $.getJSON(url).then(function (response) {
      response.forEach(function (person){
        let personHTML = personTemplate(person);
        peopleArea.append(personHTML);
      });
    });
  }

  function personTemplate(person) {
    return `
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="http://placehold.it/128x128" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>${person.name}</strong>
                <small>${person.age}</small>
                <br>is from - ${person.location}</br>
               </p>
            </div>
          </div>
        </article>
      </div>
    `;
}

getAllMyPeeps();
