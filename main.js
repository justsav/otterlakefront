function showModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function hideModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  clearModalContent();
}

function clearModalContent() {
  let content = document.getElementById("modal-content");
  content.innerHTML = '<span class="close">&times;</span>';
}

function loadForm(url) {
  window.location.href = url;
}

function loadModalContent(campsite) {
  let available = [["./campsites_final/1.jpg", "Campsite #1", "Small shaded site with a 12' by 24' concrete pad to park your camper on, water and 20/30/50 amp electric, close to site #2 would be a great spot if you want a second site close for camping with friends.", "YES", "Back-in", "24ft", "$35/night"],["./campsites_final/2.jpg", "Campsite #2", "Small shaded site with a 12' by 24' concrete pad to park your camper on, water and 20/30/50 amp electric, close to site #1 would be a great spot if you want a second site close for camping with friends.", "YES", "Back-in", "24ft", "$35/night"],["./campsites_final/3.jpg", "Campsite #3", "Small shaded site with level gravel to park your camper on, water and 20/30/50 amp electric. Near restroom (No Showers)", "YES", "Back-in", "24ft", "$35/night"],["./campsites_final/4.jpg", "Campsite #4", "Only pull-through site with level gravel to park your camper will fit up to a 38' camper, water and 20/30/50 amp electric. Near restroom (No Showers)", "YES", "Pull-Through", "38ft", "$35/night"],["./campsites_final/5.jpg", "Campsite #5", "Back in spot with great lake view, will fit up to a 38' camper, water and 20/30/50 amp electric.", "YES", "Back-in", "38ft", "$35/night"],["./campsites_final/6.jpg", "Campsite #6", "Back in spot with great lake view, will fit up to a 38' camper, water and 20/30/50 amp electric.", "YES", "Back-in", "38ft", "$35/night"],["./campsites_final/7.jpg", "Campsite A", "Level shaded primitive site near rest room (no shower)", "NO", "Back-in", "12ft", "$15/night"],["./campsites_final/8.jpg", "Campsite B", "Shaded primitive site, with great views of the lake but not level", "NO", "Back-in", "0ft", "$15/night"],["./campsites_final/9.jpg", "Campsite C", "Shaded primitive site, with great views of the lake but not level", "NO", "Back-in", "0ft", "$15/night"],["./campsites_final/10.jpg", "Campsite D", "Shaded primitive site, with great views of the lake but not level", "NO", "Back-in", "0ft", "$15/night"]];
  campsite--;  // brings argument number in line with slot in array
  let thisCampsite = available[campsite]; 

  let span = document.getElementsByClassName("close")[0];
  let modal = document.getElementById("myModal");

  showModal();

  span.onclick = function() {
    hideModal();
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      clearModalContent();
    }
  }

  let content = document.getElementById("modal-content");

  let campImg = document.createElement("img");
  campImg.setAttribute('src', thisCampsite[0]);
  campImg.setAttribute('alt', 'sample image');
  content.appendChild(campImg);

  let campsiteName = document.createElement("h3");
  campsiteName.innerHTML = thisCampsite[1];
  content.appendChild(campsiteName);
  
  let campsiteDesc = document.createElement("p");
  campsiteDesc.innerHTML = thisCampsite[2];
  content.appendChild(campsiteDesc);

  let campsitePowerWater = document.createElement("p");
  campsitePowerWater.innerHTML = '<b>Power & Water: </b>' + thisCampsite[3];
  content.appendChild(campsitePowerWater);

  let campsiteAccess = document.createElement("p");
  campsiteAccess.innerHTML = '<b>Vehicle Access Type: </b>' + thisCampsite[4];
  content.appendChild(campsiteAccess);

  let campsiteLength = document.createElement("p");
  campsiteLength.innerHTML = '<b>Maximum Camper/RV Length: </b>' + thisCampsite[5];
  content.appendChild(campsiteLength);

  let campsitePrice = document.createElement("p");
  campsitePrice.setAttribute('id', 'price');
  campsitePrice.innerHTML = '<b>Price: </b>' + thisCampsite[6];
  content.appendChild(campsitePrice);

  let buttonSet = document.createElement("div");
  buttonSet.setAttribute('class', 'buttonSet');

  let returnButton = document.createElement("input");
  returnButton.setAttribute('type', 'button');
  returnButton.setAttribute('value', 'Back');
  returnButton.setAttribute('onclick', 'hideModal()');
  returnButton.setAttribute('id', 'returnButton');
  returnButton.setAttribute('class', 'myBtn');
  buttonSet.appendChild(returnButton);

  let bookButton = document.createElement("input");
  bookButton.setAttribute('type', 'button');
  bookButton.setAttribute('value', 'Book Now');
  bookButton.setAttribute('onclick', "loadForm('http://www.otterlakepark.net/documents/787/Overnight_Camping_Information.pdf'); return false;");
  bookButton.setAttribute('id', 'bookButton');
  bookButton.setAttribute('class', 'myBtn');
  buttonSet.appendChild(bookButton);

  content.appendChild(buttonSet);
}