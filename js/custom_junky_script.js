$(document).on('click', 'li[data-category=picture]', function (event) {
    $(this).find('a[rel=example_group]').click();
});