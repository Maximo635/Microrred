// AOS
document.addEventListener('DOMContentLoaded',()=>{AOS.init({once:true,duration:700,easing:'ease-out',offset:80});});

// Swiper
let microrredSwiper;document.addEventListener('DOMContentLoaded',()=>{const el=document.querySelector('.swiper-container');if(el){microrredSwiper=new Swiper('.swiper-container',{loop:true,autoplay:{delay:3500,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},keyboard:{enabled:true}});}});

// Chart.js
document.addEventListener('DOMContentLoaded',()=>{const canvas=document.getElementById('grafico');if(!canvas) return;const ctx=canvas.getContext('2d');function fixDPI(){const r=window.devicePixelRatio||1;const rect=canvas.getBoundingClientRect();canvas.width=rect.width*r;canvas.height=rect.height*r;ctx.setTransform(r,0,0,r,0,0);}fixDPI();window.addEventListener('resize',fixDPI);new Chart(ctx,{type:'bar',data:{labels:['Paneles solares','Baterías'],datasets:[{label:'Capacidad (kW)',data:[50,100],backgroundColor:['#1FAA59','#FFC107'],borderColor:['#148a3d','#d49b00'],borderWidth:1,borderRadius:10}]},options:{maintainAspectRatio:true,plugins:{legend:{display:true,labels:{color:'#1E2A38',font:{family:'Inter, system-ui, sans-serif'}}},tooltip:{enabled:true}},scales:{x:{ticks:{color:'#1E2A38'},grid:{display:false}},y:{beginAtZero:true,ticks:{color:'#1E2A38'},grid:{color:'rgba(30,42,56,0.08)'}}}}});});

// Scroll suave
document.addEventListener('DOMContentLoaded',()=>{const btn=document.querySelector('.hero .btn');const target=document.querySelector('#microrred');if(btn&&target){btn.addEventListener('click',e=>{e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});});}});

// Accesibilidad básica
document.addEventListener('keyup',e=>{if(e.key==='Escape'&&microrredSwiper){microrredSwiper.autoplay.stop();}});

// Lazy loading imágenes
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('img').forEach(img=>{if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');if(!img.getAttribute('alt')||img.getAttribute('alt').trim()===''){img.setAttribute('alt','Imagen ilustrativa del proyecto');}});});