$('.SliderInner').slick({
arrows: true,
infinite: true,
speed: 500,
fade: true,
cssEase: 'linear',
responsive: [
{
breakpoint: 700,
settings: {
    arrows: false,
    dots: true,
}
}
]
});