var LOGOS = [
  { id:0, program:"Scholarship Program",  level:"High School",  url:"images/aci - color.png"},
  { id:1, program:"Scholarship Program",  level:"Kindergarten", url:"images/darla.png"},
  { id:2, program:"Loan Program",         level:"Kindergarten", url:"images/acm - color.png"},
  { id:3, program:"Scholarship Program",  level:"High School",  url:"images/aci - color.png"},
  { id:4, program:"Loan Program",         level:"High School",  url:"images/AFE color.png"},
  { id:5, program:"Loan Program",         level:"Kindergarten", url:"images/acm - color.png"},
  { id:6, program:"Scholarship Program",  level:"Kindergarten", url:"images/darla.png"},
  { id:7, program:"Loan Program",         level:"High School",  url:"images/AFE color.png"},
  { id:8, program:"Loan Program",         level:"High School",  url:"images/AFE color.png"},
  { id:9, program:"Scholarship Program",  level:"High School",  url:"images/aci - color.png"},
  { id:10, program:"Scholarship Program",  level:"Kindergarten", url:"images/darla.png"},
  { id:11, program:"Loan Program",         level:"Kindergarten", url:"images/acm - color.png"},

]

$(document).ready(function(){

  LOGOS.forEach(initLogo);

  $(".logo").on("click",removeGrayscale);

  $(".search").submit(searchLogos);

});

//displays logo on the page, inits style to b&w
function initLogo(logo){
  var logoElement = $(".templates .logo").clone();
  logoElement.attr("id",logo.id);
  logoElement.attr("src",logo.url);

  addGrayscale(logoElement);

  $(".results").append(logoElement);

};

//checks if the logo matches the criteria
function searchLogos(event){
  event.preventDefault();
  var program = $("#program :selected").text();
  var level = $("#level :selected").text();
  var checkLogo = buildLogoHandler(program,level);
  LOGOS.forEach(checkLogo);

}

function buildLogoHandler(selectedProgram, selectedLevel){
  return function(logo){
    if((selectedProgram == logo.program) || (selectedProgram == "Search All")){
      if((selectedLevel == logo.level) || (selectedLevel == "Search All")){
        removeGrayscale($("#"+logo.id));
      }
    }
  }
}

//set style to grayscale
function addGrayscale(element){
  element.attr("class","logo col-1 inactive");
};

//set style to color (remove grayscale)
function removeGrayscale(element){
  element.attr("class","logo col-1 active");

};