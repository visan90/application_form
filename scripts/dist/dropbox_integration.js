// Integrate Dropbox
options = {
    success: function (files) {
      alert("Here's the file link: " + files[0].link)
    },
    linkType: "preview", // "preview" or "direct"
    multiselect: true, // true or false
    extensions: ['.txt', '.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'],
  };
  
  var dropboxButtons = document.querySelectorAll(".Form__button--button-dropbox");
  [...dropboxButtons].map(button => {
    button.addEventListener("click", () => {
      Dropbox.choose(options);
    })
  })