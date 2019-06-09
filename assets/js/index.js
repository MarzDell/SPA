const app = {
    pages: [],
    another: new Event('another'),
    init:function (){
       app.pages = document.querySelectorAll('.page');
       app.pages.forEach((pg)=>{
           pg.addEventListener('another', app.pageShown);
       })
       
       document.querySelectorAll('.nav-link').forEach((link)=>{
           link.addEventListener('click', app.nav);
       })
       history.replaceState({}, 'Home', '#home');
       window.addEventListener('popstate', app.poppin);
    },
    
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.another);
    },
    pageShown: function(ev){
        let h2 = ev.target.querySelector('h2');
        h2.classList.add('medium')
        setTimeout((h)=>{
            h.classList.remove('medium');
        }, 1000, h2);
        
    },
    poppin: function(ev) {
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(app.another);
    }
    }

document.addEventListener('DOMContentLoaded', app.init);