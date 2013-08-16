$(document).ready(function() {
	// Every image referenced from a Markdown document
	$(".recipe-content img").parent().each(function() {
		// If the first element of an within an element is an img tag...
		if($(this).contents().first().is('img')) {
          // take the images html
          var imgHtml = $(this).contents().first().detach()[0].outerHTML;
          var captionHtml = this.innerHTML;
          // skip captioning in case of no available caption
          if (captionHtml.trim.length == 0)
            return;
          $(this).replaceWith(
              '<div class="figure">' +
                '<div class="image">' +
                  imgHtml +
                '</div>' +
                '<div class="caption">' +
                  captionHtml +
                '</div>' +
              '</div>'
            );
          }
		});
});
