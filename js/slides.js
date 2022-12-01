$(function (){
    $(".mosaico .mosaico-wraper").slick({
        centerMode: false,
        slidesToShow: 6,
        arrow: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    arrows:false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings:{
                    arrows:false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 470,
                settings:{
                    arrows:false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.tratamentos .conteiner').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots: true,
                    infenite:false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint:480,
                settings:{
                    arrows:false,
                    dots: true,
                    infenite:false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
        ]
    });

    $(".depoimentos .conteiner").slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
    })
})