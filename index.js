import{a as c,S as f,i as l}from"./assets/vendor-U_JCc_sE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const m="48965067-3962fe69a0505f7cd9cc5ea86",p=c.create({baseURL:"https://pixabay.com/",params:{key:m,image_type:"photo",orientation:"horizontal",safeSearch:!0}});function u(r){const o={q:encodeURIComponent(r)};return p.get("/api",{params:o}).then(e=>e.data.hits)}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function d(r){return r.map(e=>`<li class="gallery-item">
                <a class="gallery-link" href="${e.webformatURL}">
                  <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                  />
                  <ul class="image-info-list">
                    <li class=image-info-item>
                        <p class="info-title info-text">Likes</p>
                        <p class="info-text">${e.likes}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Views</p>
                        <p class="info-text">${e.views}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Comments</p>
                        <p class="info-text">${e.comments}</p>
                    </li>
                    <li class=image-info-item>
                        <p class="info-title info-text">Downloads</p>
                        <p class="info-text">${e.downloads}</p>
                    </li>
                  </ul>
                </a>
              </li>`).join("")}function y(r,o){o.innerHTML="",o.insertAdjacentHTML("beforeend",d(r)),g.refresh()}const s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loadingMessage:document.querySelector(".loading-message")};s.searchForm.addEventListener("submit",h);function h(r){r.preventDefault(),s.gallery.innerHTML="";const o=r.target.elements.searchQuery.value.trim();if(o===""){l.error({title:"Error",message:"Your query can not be empty!",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else{debugger;s.loadingMessage.innerHTML='<span class="loader"></span>',u(o).then(e=>{if(e.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",maxWidth:500,titleColor:"#fff",messageColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageSize:"16px",messageLineHeight:"1.5",icon:"fa fa-exclamation-circle",iconColor:"#fff",position:"topRight"});return}else y(e,s.gallery);s.loadingMessage.textContent=""}).catch(e=>console.log(e))}r.target.reset()}
//# sourceMappingURL=index.js.map
