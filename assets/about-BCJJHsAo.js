import{M as e,N as t,a as n,b as r,d as i,h as a,i as o,m as s,o as c,s as l,t as u,u as d,x as f}from"./lang-Bu5yqur3.js";var p=e.about;c(l()),f([...document.querySelectorAll(`[data-emergency]`)]),u(`about.html`),r(),n(),o(`/about`),document.getElementById(`counting`).hidden=!1,fetch(t(`data/meta.json`),{cache:`no-cache`}).then(e=>e.json()).then(e=>{document.getElementById(`run`).textContent=i(e.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=e.credits.map(e=>`
      <div class="card">
        <p><b>${d(e.name)}</b></p>
        <p>${d(p.credit[e.credit]??e.credit)}</p>
        <p class="tag">${d(p.licence[e.licence]??e.licence)}${e.status===`verified`?``:p.beingChecked}</p>
        ${e.use?`<p class="tag">${d(p.use[e.use]??e.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>${p.protomapsName}</b></p><p>${p.protomapsCredit}</p></div>`});var m=[...a.map(e=>({name:e.latin,photos:e.photos})),...s.map(e=>({name:e.latin,photos:e.photos}))];document.getElementById(`photo-credits`).innerHTML=m.map(e=>e.photos.map(t=>`
  <li><i>${d(t.taxon??e.name)}</i>: <a href="${d(t.page)}" target="_blank" rel="noopener">${d(t.attribution)}</a></li>`).join(``)).join(``);