/*********************************************
 * natestrap js config
 */
var natestrap_speed = 100;

/*********************************************
 * natestrap modals
 */
jQuery.fn.modal = function()
{
    var modal = $(this);
    modal.show();

    var dialog = modal.find('.modal-dialog');
    var dialog_height = dialog.outerHeight();
    var left_px = dialog.offset().left;

    dialog.css({
        'position': 'absolute',
        'top': (dialog_height * -1)+'px',
    });

    dialog.animate({
        'top': '+='+dialog_height,
    }, natestrap_speed);

    dialog.focus();
}
$(document).ready(function()
{
    $('[data-dismiss="modal"]').click(function()
    {
        $(this).parents('.modal').hide();
    });
});
$(document).on('keydown', function(e)
{
    if (e.which == 27 && $('.modal:visible').length > 0)
    {
        $('.modal:visible').hide();
    }
});

/*********************************************
 * natestrap panels/cards
 */
$(document).ready(function()
{
    $('.panel.toggle').find('.panel-heading:first').click(function()
    {
        $(this).parents('.panel:first').find('.panel-body:first').slideToggle(natestrap_speed);
    });
    $('.card.toggle').find('.card-header:first').click(function()
    {
        $(this).parents('.card:first').find('.card-body:first').slideToggle(natestrap_speed);
    });
});
