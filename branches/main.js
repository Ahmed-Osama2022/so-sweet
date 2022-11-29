// 

window.onscroll = function() {
    if (
        document.body.getBoundingClientRect().top <= -200 
        && document.body.getBoundingClientRect().top != 0 

    ) {
        // console.log('scroll!');
        document.getElementsByClassName('header')[0].style.opacity = '0.85';
    } else if (
        document.body.getBoundingClientRect().top == 0 
        //&& document.body.getBoundingClientRect().top == -200 

    ){
    document.getElementsByClassName('header')[0].style.opacity = '1';
    
    };


};

