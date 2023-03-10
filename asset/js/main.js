//새로고침시 상단으로 
window.onload = function(){

    setTimeout (function (){
        scrollTo(0,0);
    },100)
}


//마우스 효과
$('body').mousemove(function(e){
    const w = $('.cursor, .cursor-zoom').width()/2
    const h = $('.cursor, .cursor-zoom').height()/2

    const xVal = e.clientX
    const yVal = e.clientY

    gsap.to('.cursor, .cursor-zoom', {
        x:xVal - w,
        y:yVal - h,
        scrub:0,
    })
});

$('body a').mouseover(function(){
    $('.cursor').addClass('hover')
})

$('body a').mouseleave(function(){
    $('.cursor').removeClass('hover')
})

//intro
ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        gsap.set('.sc-intro .top .wrap',{opacity:0, y:150, rotate:-7})
        gsap.set('.sc-intro .bottom .wrap',{opacity:0, y:150, rotate:7})
        
        const tl1 = gsap.timeline({})
        
        tl1
        .to('.sc-intro .title .wrap',{y:0, duration: 0.5})
        .to('.sc-intro .title .wrap',{scale: 0.1, y: -110, delay: 0.3, color: '#f3ed5d'})
        .addLabel('a')
        .to('.sc-intro',{background:"#000"},'a')
        .to('.sc-intro .top .wrap',{opacity:1, y:0, rotate:0},'a')
        .to('.sc-intro .bottom .wrap',{opacity:1, y:0, rotate:0})
    },
      // medium
  "(min-width: 768px) and (max-width: 1024px)": function() {
    gsap.set('.header',{opacity:0})
    gsap.set('.sc-intro .top .wrap',{opacity:0, y:150, rotate:-7})
    gsap.set('.sc-intro .bottom .wrap',{opacity:0, y:150, rotate:7})
    
    const tl1 = gsap.timeline({})
    
    tl1
    .to('.sc-intro .title .wrap',{y:0, duration: 0.5})
    .to('.sc-intro .title .wrap',{scale: 0.1, y: -50, delay: 0.3, color: "#f3ed5d"})
    .addLabel('a')
    .to('.sc-intro',{background:"#000"},'a')
    .to('.sc-intro .top .wrap',{opacity:1, y:0, rotate:0},'a')
    .to('.sc-intro .bottom .wrap',{opacity:1, y:0, rotate:0})
    .to('.header',{opacity:1})
  },
  "(max-width: 767px)": function() {
    gsap.set('.header',{opacity:0})
    gsap.set('.sc-intro .top .wrap',{opacity:0, y:150, rotate:-7})
    gsap.set('.sc-intro .bottom .wrap',{opacity:0, y:150, rotate:7})
    
    const tl1 = gsap.timeline({})
    
    tl1
    .to('.sc-intro .title .wrap',{y:0, duration: 0.5})
    .to('.sc-intro .title .wrap',{scale: 0.2, y: -25, delay: 0.3, color:'#f3ed5d'})
    .addLabel('a')
    .to('.sc-intro',{background:"#000"},'a')
    .to('.sc-intro .top .wrap',{opacity:1, y:0, rotate:0},'a')
    .to('.sc-intro .bottom .wrap',{opacity:1, y:0, rotate:0})
    .to('.header',{opacity:1})
    },
})


const headertl = gsap.timeline({
    scrollTrigger:{
    trigger:".sc-intro",
    start: "0% 0%",
    end: "80% 10%",
    scrub: 3,
    },
})

headertl
.addLabel('a')
.to('.sc-intro .text-wrap.title',{y:-300, scale: 1.5})
.to('.sc-intro .text-wrap.top',{x:-1000, scale: 1.8},'a')
.to('.sc-intro .text-wrap.bottom',{x:1000,  scale: 1.8},'a')



//btn 이동
$('.btn-projects').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.sc-projects'})
})

$('.btn-contact').click(function(e){
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo:'.footer'})
})

//about-me
gsap.set('.sc-aboutme .text-area',{y:100, opacity:0})
gsap.to('.sc-aboutme .text-area', ({
    scrollTrigger:{
        trigger: '.sc-aboutme',
        start:"0% 60%",
        end:"100% 100%",
        scrub: 3,
    },
    opacity:1,
    y:0,
}))

//projects 슬라이드 
ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        $('[data-right]').each(function(i,el){
            gsap.to(el, ({
                scrollTrigger:{
                    trigger:el,
                    start:"0% 50%",
                    end:"100% 60%",
                    scrub: 3,
                },
                x: - 350,
            }))
        })

        $('[data-left]').each(function(i,el){
            gsap.to(el, ({
                scrollTrigger:{
                    trigger:el,
                    start:"0% 50%",
                    end:"100% 60%",
                    scrub: 3,
                },
                x: 350,
            }))
        })
    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function() {
        $('[data-right]').each(function(i,el){
            gsap.to(el, ({
                scrollTrigger:{
                    trigger:el,
                    start:"0% 50%",
                    end:"100% 60%",
                    scrub: 3,
                },
                x: - 310,
            }))
        })

        $('[data-left]').each(function(i,el){
            gsap.to(el, ({
                scrollTrigger:{
                    trigger:el,
                    start:"0% 50%",
                    end:"100% 60%",
                    scrub: 3,
                },
                x: 300,
            }))
        })
    },
  });


//모바일 슬라이드 
gsap.set('[data-mobileleft]',{x:-500})
$('[data-mobileleft]').each(function(i,el){

    gsap.to(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 70%",
            end:"100% 60%",
            scrub: 3,
        },
        x: 0,
    }))
})

gsap.set('[data-mobileright]',{x:500})
$('[data-mobileright]').each(function(i,el){

    gsap.to(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 90%",
            end:"100% 60%",
            scrub: 0,
        },
        x: 0,
    }))
})

//footer

ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.footer',
                start:"0% 60%",
                end:"100% 100%",
                scrub: 2,
            },
    })
    
    tl1
    .addLabel('a')
    .from('.footer .group-flex',{opacity: 0},'a')
    .from('.footer .group-flex .bottom-line',{width: 0, delay:0.6},'a')
    },
    "(min-width: 768px) and (max-width: 1024px)": function() {
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.footer',
                start:"0% 60%",
                end:"100% 100%",
                scrub: 2,
            },
    })
    
    tl1
    .addLabel('a')
    .from('.footer .group-flex',{opacity: 0},'a')
    .from('.footer .group-flex .bottom-line',{width: 0, delay:0.6},'a')
    },
    "(max-width: 767px)": function() {
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.footer',
                start:"0% 40%",
                end:"100% 100%",
                scrub: 2,
            },
    })
    
    tl1
    .addLabel('a')
    .from('.footer .group-flex',{opacity: 0},'a')
    .from('.footer .group-flex .bottom-line',{width: 0, delay:0.6},'a')
    }
})

