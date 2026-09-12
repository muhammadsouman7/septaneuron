(function(){
  const items=document.querySelectorAll('.ct-reveal');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||!('IntersectionObserver' in window)){items.forEach(item=>item.classList.add('is-visible'));return}
  const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');obs.unobserve(entry.target)})},{threshold:.13,rootMargin:'0px 0px -45px'});
  items.forEach(item=>observer.observe(item));
})();

