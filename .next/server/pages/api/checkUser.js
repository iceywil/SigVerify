"use strict";(()=>{var e={};e.id=787,e.ids=[787],e.modules={3872:e=>{e.exports=require("@clerk/nextjs/server")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},8126:(e,r,t)=>{t.r(r),t.d(r,{config:()=>c,default:()=>l,routeModule:()=>f});var n={};t.r(n),t.d(n,{default:()=>d});var s=t(1802),o=t(7153),a=t(6249),i=t(3872),u=t(8254);let d=async(e,r)=>{let{userId:t}=(0,i.getAuth)(e);if(!t)return r.status(401).json({error:"Unauthorized"});if("POST"!==e.method)return r.status(405).json({error:"Method Not Allowed"});let n=e.body;if(!n)return r.status(400).json({error:"Missing user data in request body"});try{let e=(await u.Z).db("test").collection("users");if(!await e.findOne({userId:t})){let r={userId:t,firstName:n.firstName,lastName:n.lastName,email:n.primaryEmailAddress.emailAddress,createdAt:new Date};await e.insertOne(r)}return r.status(200).json({message:"User checked/created successfully"})}catch(e){return console.error("Failed to connect to the database:",e),r.status(500).json({error:"Internal Server Error"})}},l=(0,a.l)(n,"default"),c=(0,a.l)(n,"config"),f=new s.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/checkUser",pathname:"/api/checkUser",bundlePath:"",filename:""},userland:n})},8254:(e,r,t)=>{t.d(r,{Z:()=>o});let n=require("mongodb"),s=process.env.MONGODB_URI||"";if(!s)throw Error("Please add your Mongo URI to .env.local");let o=new n.MongoClient(s,{}).connect()},7153:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=8126);module.exports=t})();