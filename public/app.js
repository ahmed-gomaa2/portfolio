// let last_known_scroll_position = 0;
// let ticking = false;
//
// function doSomething(scroll_pos) {
//     const elements = document.querySelectorAll('.projects__item');
//     for(let i=0; i<elements.length; i++) {
//         const bounding = elements[i].getBoundingClientRect();
//         if (
//             bounding.top >=0 &&
//             bounding.left >=0
//         ){
//             elements[i].classList.add('animation')
//         }else {
//             console.log('not in the viewport')
//         }
//     }
// }
//
// // const isInViewport = function (elem) {
// //     const bounding = elem.getBoundingClientRect();
// //     return (
// //         bounding.top >= 0 &&
// //         bounding.left >= 0 &&
// //         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// //         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
// //     );
// // };
//
// window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;
//
//     if (!ticking) {
//         window.requestAnimationFrame(function() {
//             doSomething(last_known_scroll_position);
//             ticking = false;
//         });
//
//         ticking = true;
//     }
// });