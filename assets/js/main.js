$('.materialboxed').materialbox();

$('.parallax').parallax();

//para que funcione el sidenav con el navbar fixed

$('.button-collapse').sideNav();
$('.button-collapse').click(removeOverlay);

function removeOverlay() {
    $('div[id^=sidenav-overlay]').remove();
}