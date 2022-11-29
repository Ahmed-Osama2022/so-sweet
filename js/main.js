// 

const section1 = document.getElementById('section1');
const allSections = document.querySelectorAll("section");

// 

// window.addEventListener('scroll', (e) => {
//     console.log("scroll");
//     section1.style.animation = ('moveBanner 1s 0.8s forwards');
        
// });

// window.onscroll = function() {
//     allSections.forEach(function (active) {
//         if (
//             active.getBoundingClientRect().top >= -400 &&
//             active.getBoundingClientRect().top <= 150
//         ) {
//             console.log('scroll Now !');
//             active.classList.add("your-active-class");
//         } else {
//             active.classList.remove("your-active-class");
//         }
//     });
// };

window.onscroll = function() {
    if (
        document.body.getBoundingClientRect().top <= -200 
        && document.body.getBoundingClientRect().top != 0 

    ) {
        console.log('scroll!');
        document.getElementsByClassName('nav-bar')[0].style.opacity = '0.85';
    } else if (
        document.body.getBoundingClientRect().top == 0 
        //&& document.body.getBoundingClientRect().top == -200 

    ){
    document.getElementsByClassName('nav-bar')[0].style.opacity = '1';
    
    };


};

