const et=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};et();const nt=document.getElementById("button-yellow"),ot=document.getElementById("button-orange"),dt=document.getElementById("button-red"),st=document.getElementById("button-fuchsia"),ct=document.getElementById("button-hotpink"),it=document.getElementById("button-blueviolet"),lt=document.getElementById("button-blue"),at=document.getElementById("button-cornflowerblue"),rt=document.getElementById("button-lightblue"),ut=document.getElementById("button-aquamarine"),mt=document.getElementById("button-green"),gt=document.getElementById("button-olive"),ht=document.getElementById("hair"),bt=document.getElementById("button-head"),Et=document.getElementById("button-ears"),yt=document.getElementById("mouth"),vt=document.getElementById("chest"),ft=document.getElementById("arms"),Bt=document.getElementById("hands"),It=document.getElementById("content-buttons"),pt=document.getElementById("hips"),_t=document.getElementById("legs"),Lt=document.getElementById("foot"),x=document.querySelector(".hair"),z=document.getElementById("head"),J=document.querySelectorAll(".ear"),Q=document.querySelectorAll(".mouth"),T=document.querySelectorAll(".chest"),U=document.querySelectorAll(".arms"),V=document.querySelectorAll(".hands"),W=document.querySelectorAll(".content-buttons"),X=document.querySelectorAll(".hips"),Z=document.querySelectorAll(".legs"),$=document.querySelectorAll(".foot"),r=document.getElementById("div-hair"),u=document.getElementById("div-bar-hair"),m=document.getElementById("span-hair"),g=document.getElementById("div-head"),h=document.getElementById("div-bar-head"),b=document.getElementById("span-head"),E=document.getElementById("div-ears"),y=document.getElementById("div-bar-ears"),v=document.getElementById("span-ears"),f=document.getElementById("div-mouth"),B=document.getElementById("div-bar-mouth"),I=document.getElementById("span-mouth"),p=document.getElementById("div-chest"),_=document.getElementById("div-bar-chest"),L=document.getElementById("span-chest"),k=document.getElementById("div-arms"),q=document.getElementById("div-bar-arms"),A=document.getElementById("span-arms"),w=document.getElementById("div-hands"),S=document.getElementById("div-bar-hands"),C=document.getElementById("span-hands"),O=document.getElementById("div-content-buttons"),H=document.getElementById("div-bar-content-buttons"),F=document.getElementById("span-content-buttons"),N=document.getElementById("div-hips"),R=document.getElementById("div-bar-hips"),D=document.getElementById("span-hips"),M=document.getElementById("div-legs"),P=document.getElementById("div-bar-legs"),Y=document.getElementById("span-legs"),G=document.getElementById("div-foot"),K=document.getElementById("div-bar-foot"),j=document.getElementById("span-foot");let t="";function e(s,c,i,l="lala",n="lala-bar",o="lala-btm-span"){[r,u,m,g,h,b,E,y,v,f,B,I,p,_,L,k,q,A,w,S,C,O,H,F,N,R,D,M,P,Y,G,K,j].forEach(tt=>{tt.classList.remove("lala","lala-bar","lala-btm-span","nothing")}),s.classList.add(l),c.classList.add(n),i.classList.add(o)}ht.addEventListener("click",()=>{t===x?(e(r,u,m,"nothing","nothing","nothing"),t=""):(t=x,e(r,u,m))});bt.addEventListener("click",()=>{t===z?(e(g,h,b,"nothing","nothing","nothing"),t=""):(t=z,e(g,h,b),console.log(t))});Et.addEventListener("click",()=>{t===J?(e(E,y,v,"nothing","nothing","nothing"),t=""):(t=J,e(E,y,v))});yt.addEventListener("click",()=>{t===Q?(e(f,B,I,"nothing","nothing","nothing"),t=""):(t=Q,e(f,B,I))});vt.addEventListener("click",()=>{t===T?(e(p,_,L,"nothing","nothing","nothing"),t=""):(t=T,e(p,_,L))});ft.addEventListener("click",()=>{t===U?(e(k,q,A,"nothing","nothing","nothing"),t=""):(t=U,e(k,q,A))});Bt.addEventListener("click",()=>{t===V?(e(w,S,C,"nothing","nothing","nothing"),t=""):(t=V,e(w,S,C))});It.addEventListener("click",()=>{t===W?(e(O,H,F,"nothing","nothing","nothing"),t=""):(t=W,e(O,H,F))});pt.addEventListener("click",()=>{t===X?(e(N,R,D,"nothing","nothing","nothing"),t=""):(t=X,e(N,R,D))});_t.addEventListener("click",()=>{t===Z?(e(M,P,Y,"nothing","nothing","nothing"),t=""):(t=Z,e(M,P,Y))});Lt.addEventListener("click",()=>{t===$?(e(G,K,j,"nothing","nothing","nothing"),t=""):(t=$,e(G,K,j))});let d=function(s,c){s.length>=1?s.forEach(i=>d(i,c)):(s.classList.value===""||s.classList.remove("yellow","orange","red","fuchsia","hotpink","blueviolet","blue","cornflowerblue","lightblue","aquamarine","green","olive"),s.classList.add(c))};nt.addEventListener("click",()=>d(t,"yellow"));ot.addEventListener("click",()=>d(t,"orange"));dt.addEventListener("click",()=>d(t,"red"));st.addEventListener("click",()=>d(t,"fuchsia"));ct.addEventListener("click",()=>d(t,"hotpink"));it.addEventListener("click",()=>d(t,"blueviolet"));lt.addEventListener("click",()=>d(t,"blue"));at.addEventListener("click",()=>d(t,"cornflowerblue"));rt.addEventListener("click",()=>d(t,"lightblue"));ut.addEventListener("click",()=>d(t,"aquamarine"));mt.addEventListener("click",()=>d(t,"green"));gt.addEventListener("click",()=>d(t,"olive"));const kt=document.getElementById("arm-left-button"),qt=document.getElementById("arm-right-button"),At=document.querySelector(".container-arm-left"),wt=document.querySelector(".container-arm-right");kt.addEventListener("click",()=>{At.classList.toggle("animation-left")});qt.addEventListener("click",()=>{wt.classList.toggle("animation-right")});