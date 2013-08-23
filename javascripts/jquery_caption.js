$(document).ready(function() {
  // Every image referenced from a Markdown document
  $(".recipe-content img").parent().each(function() {
    // If the first element of an within an element is an img tag...
    if($(this).contents().first().is('img')) {
      // detach the image's html from the DOM
      var detachedImgHtml = $(this).contents().first().detach()[0].outerHTML;
      var captionHtml = this.innerHTML;

      // check if caption exists
      if ($.trim(captionHtml).length == 0) {
        // replace the current with the previously detached imgHtml
        $(this).replaceWith(detachedImgHtml);
        return;
      }

      $(this).replaceWith(
        '<div class="figure">' +
          '<div class="image">' +
            detachedImgHtml +
          '</div>' +
          '<div class="caption">' +
            captionHtml +
          '</div>' +
        '</div>'
      );
    }
  });
});
