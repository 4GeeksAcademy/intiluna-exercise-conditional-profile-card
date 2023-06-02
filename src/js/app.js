import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  if (variables.backgroundImage === null) {
    variables.background = variables.background;
  } else {
    variables.background = variables.backgroundImage;
  }

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // if (variables.name !== null) {
  //   variables.lastname = "";
  // } else if (variables.lastname === null) {
  //   variables.lastname = "Boilett";
  // }

  if (variables.lastname === null) variables.lastname = "Boilett";
  if (variables.name === null) variables.name = "Lucy";
  if (variables.role === null) variables.role = "Please select your role";
  if (variables.city === null) variables.city = "Select your city";
  if (variables.country === null) variables.country = "Select your country";

  let githubColor;
  let linkedinColor;
  let twitterColor;
  let instagramColor;
  let backGroundColor;

  if (
    variables.github === null ||
    variables.github === "alesanchezr" ||
    variables.github === "https://github.com/4GeeksAcademy"
  ) {
    githubColor = "icon-red";
    variables.github = "https://github.com/4GeeksAcademy";
  } else {
    githubColor = "icon-green";
  }

  if (
    variables.linkedin === null ||
    variables.linkedin === "https://linkedin.com/4GeeksAcademy"
  ) {
    linkedinColor = "icon-red";
    variables.linkedin = "https://linkedin.com/4GeeksAcademy";
  } else {
    linkedinColor = "icon-green";
  }

  if (
    variables.instagram === null ||
    variables.instagram === "https://instagram.com/4geeksacademy"
  ) {
    instagramColor = "icon-red";
    variables.instagram = "https://instagram.com/4geeksacademy";
  } else {
    instagramColor = "icon-green";
  }

  if (
    variables.twitter === null ||
    variables.twitter === "https://twitter.com/4geeksacademy"
  ) {
    twitterColor = "icon-red";
    variables.twitter = "https://twitter.com/4geeksacademy";
  } else {
    twitterColor = "icon-green";
  }

  //images for background
  //https://images.unsplash.com/photo-1685689238460-fdd76e602962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

  //test links https://www.linkedin.com/in/inti-luna-aviles-8a55998/
  // https://github.com/intiluna/
  //https://twitter.com/AEK_eus
  //https://www.instagram.com/mango/

  // reset the website body with the new html output
  // default Lucy Boilett
  document.querySelector(
    "#widget_content"
  ).innerHTML = `<div class="widget ${variables.coverBackground}">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href=${variables.twitter}><i class="fab fa-twitter ${twitterColor}"></i></a></li>
            <li><a href=${variables.github}><i class="fab fa-github ${githubColor}"></i></a></li>
            <li><a href=${variables.linkedin}><i class="fab fa-linkedin ${linkedinColor}"></i></a></li>
            <li><a href=${variables.instagram}><i class="fab fa-instagram ${instagramColor}"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    //background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    backgroundImage: null,
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
