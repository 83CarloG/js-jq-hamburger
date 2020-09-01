// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS

var hamburgerYes = $('.header-right > a');
var hamburgerNo = $('.close')

// hamburgerYes.click(function () {
// 	$('.hamburger-menu').css('display', 'block');
// }
// );
//
// hamburgerNo.click(function () {
// 	$('.hamburger-menu').css('display', 'none');
// }
// );

hamburgerYes.click(function () {
	/* Act on the event */
	$('.hamburger-menu').show(500);
}
);

hamburgerNo.click(function () {
	/* Act on the event */
	$('.hamburger-menu').hide(500);
}
);
