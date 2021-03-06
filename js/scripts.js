$(function () {
    /*Tooltip*/
    $('[data-toggle="tooltip"]').tooltip()
  })
    /*Tech Stack Show */
  $('#techBtn').on('click', function(){
    $('#tech').toggleClass('techShow');
});
    /*Client Login Hide on Expanded Navbar*/
    $('#clientBtn').on('click', function(){
        $('#clientLogin').toggleClass('clientHide');
    });
    $('#clientBtn1').on('click', function(){
        $('#clientLogin1').toggleClass('clientHide');
    });
    $('#clientBtn2').on('click', function(){
        $('#clientLogin2').toggleClass('clientHide');
    });

/*Back to Top Button*/
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
    mybutton.addEventListener("click", backToTop);
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}