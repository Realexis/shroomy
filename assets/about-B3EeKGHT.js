import{a as e,i as t,l as n,m as r,o as i,p as a,r as o,u as s,y as c}from"./count-4MMfhYvo.js";e(i()),c([...document.querySelectorAll(`[data-emergency]`)]),t(),o(`/about`),document.getElementById(`counting`).hidden=!1,fetch(new URL(`data/meta.json`,document.baseURI),{cache:`no-cache`}).then(e=>e.json()).then(e=>{document.getElementById(`run`).textContent=s(e.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=e.credits.map(e=>`
      <div class="card">
        <p><b>${n(e.name)}</b></p>
        <p>${n(e.credit)}</p>
        <p class="tag">${n(e.licence)}${e.status===`verified`?``:` · licence being checked`}</p>
        ${e.use?`<p class="tag">${n(e.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>Protomaps basemap</b></p><p>Map tiles from the Protomaps build of OpenStreetMap. © OpenStreetMap contributors (ODbL).</p></div>`});var l=[...r.map(e=>({name:e.latin,photos:e.photos})),...a.map(e=>({name:e.latin,photos:e.photos}))];document.getElementById(`photo-credits`).innerHTML=l.map(e=>e.photos.map(t=>`
  <li><i>${n(t.taxon??e.name)}</i>: <a href="${n(t.page)}" target="_blank" rel="noopener">${n(t.attribution)}</a></li>`).join(``)).join(``);