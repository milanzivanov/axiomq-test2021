jQuery((function(){"use strict";$(".mobile-nav--btn, .submenu-box__close--btn").on("click",(function(s){$(".submenu-box, .submenu-overlay").toggleClass("active")})),$(".submenu-box__close--btn").on("click",(function(s){$(".submenu-box__item ul li, .feat-show, .auto-show").removeClass("active-state, show")})),$(".feat-show--btn").on("click",(function(s){$("ul.feat-show").toggleClass("show")})),$(".auto-show--btn").on("click",(function(s){$("ul.auto-show").toggleClass("show")})),$("nav.submenu-box__item ul li").on("click",(function(){$(this).addClass("active-state").siblings().removeClass("active-state")})),$(".slick-slider").slick({centerMode:!0,dots:!1,arrows:!1,focusOnSelect:!0,autoplaySpeed:1e4,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,mobileFirst:!0,responsive:[{breakpoint:360,settings:{centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}},{breakpoint:768,settings:{centerMode:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}},{breakpoint:1024,settings:{centerMode:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1,arrows:!1}}]}),$(".left-nav-custom").on("click",(function(){$(".slick-slider").slick("slickPrev")})),$(".right-nav-custom").on("click",(function(){$(".slick-slider").slick("slickNext")}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsIm9uIiwiZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0aGlzIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWNrIiwiY2VudGVyTW9kZSIsImRvdHMiLCJhcnJvd3MiLCJmb2N1c09uU2VsZWN0IiwiYXV0b3BsYXlTcGVlZCIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQU8sV0FDSCxhQUdBQyxFQUFFLDhDQUE4Q0MsR0FBRyxTQUFTLFNBQVNDLEdBQ2pFRixFQUFFLGtDQUFrQ0csWUFBWSxhQUdwREgsRUFBRSw0QkFBNEJDLEdBQUcsU0FBUyxTQUFTQyxHQUMvQ0YsRUFBRSxvREFBb0RJLFlBQVkseUJBSXRFSixFQUFFLG1CQUFtQkMsR0FBRyxTQUFTLFNBQVNDLEdBQ3RDRixFQUFFLGdCQUFnQkcsWUFBWSxXQUVsQ0gsRUFBRSxtQkFBbUJDLEdBQUcsU0FBUyxTQUFTQyxHQUN0Q0YsRUFBRSxnQkFBZ0JHLFlBQVksV0FHbENILEVBQUUsK0JBQStCQyxHQUFHLFNBQVMsV0FDekNELEVBQUVLLE1BQU1DLFNBQVMsZ0JBQWdCQyxXQUFXSCxZQUFZLG1CQUs1REosRUFBRSxpQkFBaUJRLE1BQU0sQ0FDckJDLFlBQVksRUFDWkMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLGVBQWUsRUFDZkMsY0FBZSxJQUNmQyxVQUFVLEVBQ1ZDLE1BQU8sSUFDUEMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkMsYUFBYSxFQUNiQyxXQUFZLENBQ1YsQ0FDRUMsV0FBWSxJQUNaQyxTQUFVLENBQ05aLFlBQVksRUFDWk8sYUFBYyxFQUNkQyxlQUFnQixFQUNoQkgsVUFBVSxFQUNWSixNQUFNLEVBQ05DLFFBQVEsSUFHZCxDQUNFUyxXQUFZLElBQ1pDLFNBQVUsQ0FDTlosWUFBWSxFQUNaTyxhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCSCxVQUFVLEVBQ1ZKLE1BQU0sRUFDTkMsUUFBUSxJQUdkLENBQ0VTLFdBQVksS0FDWkMsU0FBVSxDQUNOWixZQUFZLEVBQ1pPLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJILFVBQVUsRUFDVkosTUFBTSxFQUNOQyxRQUFRLE9BT3BCWCxFQUFFLG9CQUFvQkMsR0FBRyxTQUFTLFdBQzlCRCxFQUFFLGlCQUFpQlEsTUFBTSxnQkFHN0JSLEVBQUUscUJBQXFCQyxHQUFHLFNBQVMsV0FDL0JELEVBQUUsaUJBQWlCUSxNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gb3BlbiBtb2JpbGUgbWVudSBhbmQgaGFtYnVyZ2VyIGJ0blxyXG4gICAgJChcIi5tb2JpbGUtbmF2LS1idG4sIC5zdWJtZW51LWJveF9fY2xvc2UtLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKFwiLnN1Ym1lbnUtYm94LCAuc3VibWVudS1vdmVybGF5XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zdWJtZW51LWJveF9fY2xvc2UtLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKFwiLnN1Ym1lbnUtYm94X19pdGVtIHVsIGxpLCAuZmVhdC1zaG93LCAuYXV0by1zaG93XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLXN0YXRlLCBzaG93XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gb3BlbiBzdWJtZW51IGZyb20gbW9iaWxlIG1lbnVcclxuICAgICQoJy5mZWF0LXNob3ctLWJ0bicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJ3VsLmZlYXQtc2hvdycpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmF1dG8tc2hvdy0tYnRuJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCgndWwuYXV0by1zaG93JykudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnbmF2LnN1Ym1lbnUtYm94X19pdGVtIHVsIGxpJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmUtc3RhdGVcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1zdGF0ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBzbGljayBzbGlkZXIgXHJcbiAgICAkKCcuc2xpY2stc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDM2MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjdXN0b20gc2xpY2sgYXJyb3dzXHJcbiAgICAkKCcubGVmdC1uYXYtY3VzdG9tJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc2xpY2stc2xpZGVyJykuc2xpY2soJ3NsaWNrUHJldicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnJpZ2h0LW5hdi1jdXN0b20nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5zbGljay1zbGlkZXInKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=
