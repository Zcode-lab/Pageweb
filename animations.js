/* ==========================================
   CodeWithMech GSAP Animations
========================================== */

gsap.registerPlugin(ScrollTrigger);

/* Hero Animation */

gsap.from(".hero h1",{
    y:80,
    opacity:0,
    duration:1.2,
    ease:"power4.out"
});

gsap.from(".hero p",{
    y:50,
    opacity:0,
    duration:1,
    delay:.4,
    ease:"power3.out"
});

gsap.from(".hero-buttons .btn",{
    y:40,
    opacity:0,
    duration:1,
    stagger:.15,
    delay:.8,
    ease:"power3.out"
});

/* Navbar */

gsap.from(".navbar",{
    y:-80,
    opacity:0,
    duration:1
});

/* Cards */

gsap.utils.toArray(".card").forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:60,
        opacity:0,
        duration:.8,
        ease:"power3.out"

    });

});

/* Projects */

gsap.utils.toArray(".project").forEach(project=>{

    gsap.from(project,{

        scrollTrigger:{
            trigger:project,
            start:"top 85%"
        },

        scale:.9,
        opacity:0,
        duration:.8

    });

});

/* Testimonials */

gsap.utils.toArray(".testimonial").forEach(item=>{

    gsap.from(item,{

        scrollTrigger:{
            trigger:item,
            start:"top 85%"
        },

        y:50,
        opacity:0,
        duration:.8

    });

});

/* Stats */

gsap.utils.toArray(".stat-card").forEach(stat=>{

    gsap.from(stat,{

        scrollTrigger:{
            trigger:stat,
            start:"top 90%"
        },

        y:40,
        opacity:0,
        duration:.7

    });

});

/* Contact */

gsap.from("#contact form",{

    scrollTrigger:{
        trigger:"#contact",
        start:"top 80%"
    },

    y:60,
    opacity:0,
    duration:1

});

/* Footer */

gsap.from("footer",{

    scrollTrigger:{
        trigger:"footer",
        start:"top bottom"
    },

    opacity:0,
    duration:1

});
