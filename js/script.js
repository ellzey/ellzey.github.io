// build time:Wed Feb 26 2020 23:27:27 GMT+0800 (China Standard Time)
(function(t){var a=t("#search-form-wrap"),e=false,n=200;var i=function(){e=true};var o=function(t){setTimeout(function(){e=false;t&&t()},n)};t("#nav-search-btn").on("click",function(){if(e)return;i();a.addClass("on");o(function(){t(".search-form-input").focus()})});t(".search-form-input").on("blur",function(){i();a.removeClass("on");o()});t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var e=t(this),n=e.attr("data-url"),i=encodeURIComponent(n),o="article-share-box-"+e.attr("data-id"),r=e.offset();if(t("#"+o).length){var s=t("#"+o);if(s.hasClass("on")){s.removeClass("on");return}}else{var c=['<div id="'+o+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+i+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+i+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+i+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join("");var s=t(c);t("body").append(s)}t(".article-share-box.on").hide();s.css({top:r.top+25,left:r.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});t(".article-entry").each(function(a){t(this).find("img").each(function(){if(t(this).parent().hasClass("fancybox"))return;var a=this.alt;if(a)t(this).after('<span class="caption">'+a+"</span>");t(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')});t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})});if(t.fancybox){t(".fancybox").fancybox()}var r=t("#container"),s=false,c=200;var l=function(){s=true};var f=function(){setTimeout(function(){s=false},c)};t("#main-nav-toggle").on("click",function(){if(s)return;l();r.toggleClass("mobile-nav-on");f()});t("#wrap").on("click",function(){if(s||!r.hasClass("mobile-nav-on"))return;r.removeClass("mobile-nav-on")})})(jQuery);
//rebuild by neat 