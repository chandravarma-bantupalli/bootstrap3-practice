/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function () {
    $('#likeMe').click(function(e) {
        e.preventDefault();

        $('#successLike').slideDown();
    });
});