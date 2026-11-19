import{a as e,b as t,i as n,l as r,m as i,o as a,p as o,r as s,u as c,y as l}from"./count-Cv5vCcrV.js";e(a()),t([...document.querySelectorAll(`[data-emergency]`)]),l(),n(),s(`/about`),document.getElementById(`counting`).hidden=!1,fetch(new URL(`data/meta.json`,document.baseURI),{cache:`no-cache`}).then(e=>e.json()).then(e=>{document.getElementById(`run`).textContent=c(e.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=e.credits.map(e=>`
      <div class="card">
        <p><b>${r(e.name)}</b></p>
        <p>${r(e.credit)}</p>
        <p class="tag">${r(e.licence)}${e.status===`verified`?``:` · licence being checked`}</p>
        ${e.use?`<p class="tag">${r(e.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>Protomaps basemap</b></p><p>Map tiles from the Protomaps build of OpenStreetMap. © OpenStreetMap contributors (ODbL).</p></div>`});var u=[...i.map(e=>({name:e.latin,photos:e.photos})),...o.map(e=>({name:e.latin,photos:e.photos}))];document.getElementById(`photo-credits`).innerHTML=u.map(e=>e.photos.map(t=>`
  <li><i>${r(t.taxon??e.name)}</i>: <a href="${r(t.page)}" target="_blank" rel="noopener">${r(t.attribution)}</a></li>`).join(``)).join(``);