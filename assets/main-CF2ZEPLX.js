function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c as r}from"./Dashboard-DZXmAt0Y.js";import{_ as s}from"./index-DvLaIhV0.js";const l={id:Symbol(),title:"Tools",layout:{x:0,y:0,w:3,h:12},widget:{link:"https://cdn.skypack.dev/@eox/itemfilter",properties:{config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text",expanded:!0},{key:"themes",title:"Theme",type:"multiselect",featured:!0}],aggregateResults:"themes",enableHighlighting:!0}},onMounted:async function(t,a,i){t.apply(a?.stac.filter(e=>e.rel==="child")),t.config.onSelect=async e=>{await a.loadSelectedSTAC(e.href)}},tagName:"eox-itemfilter"},type:"web-component"},n=({mapInstance:t,currentUrl:a})=>({layout:{x:9,y:0,w:3,h:12},defineWidget:i=>{const e=i?.links.find(o=>o.rel=="wms")??!1;return e?{id:`${e["wms:layers"][0]} Map`,title:"Map",type:"web-component",widget:{link:"https://cdn.skypack.dev/@eox/map",properties:{class:"fill-height fill-width",center:[15,48],layers:[{type:"Tile",source:{type:"TileWMS",url:e.href,params:{LAYERS:e["wms:layers"],TILED:!0},ratio:1,serverType:"geoserver"}}]},tagName:"eox-map"}}:{id:"Information",title:"Information",type:"web-component",widget:{link:()=>s(()=>import("./eox-stacinfo-DQG2MPAj.js"),__vite__mapDeps([])),tagName:"eox-stacinfo",properties:{for:a,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}}}}),m=r(t=>({id:"template-id",stacEndpoint:"https://esa-eodash.github.io/RACE-catalog/RACE/catalog.json",routes:[],brand:{name:"RAPID ACTION FOR CITIZENS WITH EARTH OBSERVATION",shortName:"RACE",font:{link:"style.css",family:"NotesESABold"},logo:"logo.png",theme:{colors:{primary:"#003247",secondary:"#003247",background:"#fff",surface:"#fff"}},meta:{title:"Rapid Action for Citizens with Earth Observation",content:"Dashboard for ESA EO data examples"}},template:{gap:6,background:{id:Symbol(),type:"internal",widget:{name:"EodashMap"}},widgets:[l,{id:Symbol(),type:"internal",title:"datepicker",layout:{x:5,y:11,w:2,h:1},widget:{name:"EodashDatePicker",props:{inline:!0}}},n(t.states)]}}));export{m as default};