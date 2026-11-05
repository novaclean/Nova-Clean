var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'',n=h.indexOf('tel:')===0?'phone_click':(h.indexOf('wa.me')>-1?'whatsapp_click':'');if(n){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:n});if(window.gtag)gtag('event',n,{transport_type:'beacon'});}});
document.addEventListener('submit',function(e){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'quote_form_submit'});if(window.gtag)gtag('event','generate_lead',{transport_type:'beacon'});});
