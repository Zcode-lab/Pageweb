/* ==========================================
   CodeWithMech
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       FAQ Accordion
    ========================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(i => {

                if(i !== item){
                    i.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    });

    /* ==========================
       Counter Animation
    ========================== */

    const counters = document.querySelectorAll(".stat-card h3");

    counters.forEach(counter=>{

        const target=parseInt(counter.innerText);

        if(isNaN(target)) return;

        let count=0;

        const speed=target/80;

        function update(){

            count+=speed;

            if(count<target){

                counter.innerText=Math.floor(count)+"+";

                requestAnimationFrame(update);

            }else{

                counter.innerText=target+"+";

            }

        }

        update();

    });

    /* ==========================
       Scroll Reveal
    ========================== */

    const reveals=document.querySelectorAll(
        ".card,.project,.testimonial,.stat-card"
    );

    function revealOnScroll(){

        const trigger=window.innerHeight*0.85;

        reveals.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            if(top<trigger){

                el.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",revealOnScroll);

    revealOnScroll();

});
