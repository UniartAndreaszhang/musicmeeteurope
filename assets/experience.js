(function () {
  'use strict';
  const languages = [['en','English'],['zh-CN','简体中文'],['zh-TW','繁體中文'],['de','Deutsch'],['fr','Français'],['it','Italiano'],['es','Español'],['pt','Português'],['nl','Nederlands'],['pl','Polski'],['cs','Čeština'],['hu','Magyar'],['el','Ελληνικά'],['ru','Русский'],['ja','日本語'],['ko','한국어'],['id','Bahasa Indonesia'],['ms','Bahasa Melayu'],['tr','Türkçe']];
  const tools = document.querySelector('[data-language-tools]');
  if (tools) {
    tools.classList.add('language-tools','notranslate');
    tools.setAttribute('translate','no');
    const select = document.createElement('select');
    select.setAttribute('aria-label','Language / translate this page');
    languages.forEach(([value,label])=>select.add(new Option(label,value)));
    tools.append(select);
    const panel=document.createElement('div'); panel.className='translation-panel'; panel.hidden=true;
    panel.innerHTML='<div id="mme-google-translate"></div><p role="status" id="translation-status"></p><a id="translation-fallback" target="_blank" rel="noopener" hidden>Open translated page</a><br><button type="button">Close</button>';
    tools.append(panel);
    panel.querySelector('button').onclick=()=>{panel.hidden=true;};
    let loading=false, pending='en', timer;
    function apply() {
      const combo=panel.querySelector('.goog-te-combo');
      if (!combo || !Array.from(combo.options).some(option=>option.value===pending)) return false;
      combo.value=pending; combo.dispatchEvent(new Event('change',{bubbles:true}));
      panel.querySelector('#translation-status').textContent='Automatic translation by Google. English is the original version.';
      clearTimeout(timer); return true;
    }
    window.mmeTranslateReady=function(){
      new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:languages.filter(x=>x[0]!=='en').map(x=>x[0]).join(','),autoDisplay:false},'mme-google-translate');
      let tries=0; const poll=setInterval(()=>{if(apply()||++tries>50) clearInterval(poll);},100);
    };
    select.addEventListener('change',()=>{
      pending=select.value;
      if (pending==='en') {
        // Reload the original document after removing this site's translation preference.
        ['',';domain='+location.hostname].forEach(scope=>{document.cookie='googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'+scope;});
        location.reload(); return;
      }
      panel.hidden=false;
      const fallback=panel.querySelector('#translation-fallback');
      const publicPage='https://uniartandreaszhang.github.io/musicmeeteurope/'+(document.body.dataset.page==='registration'?'register.html':'');
      fallback.href='https://translate.google.com/translate?sl=en&tl='+encodeURIComponent(pending)+'&u='+encodeURIComponent(publicPage);
      if(apply()) return;
      panel.querySelector('#translation-status').textContent='Loading translation…';
      timer=setTimeout(()=>{panel.querySelector('#translation-status').textContent='Translation could not load here. You can open a translated version in a new tab.';fallback.hidden=false;},12000);
      if(!loading){loading=true; const script=document.createElement('script'); script.src='https://translate.google.com/translate_a/element.js?cb=mmeTranslateReady'; script.async=true; document.head.append(script);}
    });
  }
  if(document.body.dataset.page!=='home'||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let seen=false; try{seen=sessionStorage.getItem('mme-intro-seen')==='1';}catch(_){}
  if(seen) return;
  const overlay=document.createElement('div'); overlay.className='mme-intro notranslate'; overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-modal','true'); overlay.setAttribute('aria-label','Welcome to Music Meets Europe');
  overlay.innerHTML='<div class="mme-intro-center"><img src="images/mme-logo.svg" alt="Music Meets Europe"><p>A bond of friendship and exchange</p></div><button class="mme-intro-skip" type="button">Skip intro</button>';
  const siblings=[...document.body.children].filter(el=>!['SCRIPT','STYLE'].includes(el.tagName)&&!el.inert);
  siblings.forEach(el=>el.inert=true); document.body.append(overlay);
  const previous=document.activeElement; overlay.querySelector('button').focus({preventScroll:true});
  let done=false;
  function finish(immediate){if(done)return;done=true;try{sessionStorage.setItem('mme-intro-seen','1');}catch(_){} overlay.classList.add('opening');setTimeout(()=>{overlay.remove();siblings.forEach(el=>el.inert=false);if(previous&&previous.focus)previous.focus({preventScroll:true});},immediate?0:1450);document.removeEventListener('keydown',key);}
  function key(e){if(e.key==='Escape')finish(true);if(e.key==='Tab'){e.preventDefault();overlay.querySelector('button').focus();}}
  document.addEventListener('keydown',key);overlay.querySelector('button').onclick=()=>finish(true);setTimeout(()=>finish(false),1600);
})();
