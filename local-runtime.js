window.Shopify={shop:'localhost',locale:'en',country:'US',currency:{active:'USD',rate:'1.0'},routes:{root:'/secrets-showcase/'},designMode:false,PaymentButton:{init(){}},loadFeatures(a,cb){if(cb)cb(null)},customerPrivacy:{analyticsProcessingAllowed:()=>false,marketingAllowed:()=>false}};
window.ShopifyAnalytics={meta:{},lib:{track(){}}};
window.__localStore=true;
// All mutations are handled on this origin. No live store checkout or forms.
document.addEventListener('submit',e=>{
 const f=e.target;if(!(f instanceof HTMLFormElement))return;
 const action=new URL(f.action,location.href);
 if(action.pathname==='/secrets-showcase/cart/add'){
  e.preventDefault();e.stopImmediatePropagation();window.localStore?.add(f);
 }else if(!action.pathname.includes('/secrets-showcase/search')&&!action.pathname.startsWith('/secrets-showcase/cart')){
  e.preventDefault();e.stopImmediatePropagation();
  if(f.reportValidity())window.localStore?.notice('Thank you! This form has been received in the local demo.');
 }
},true);
