'use strict';
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const raw=process.env.PAGES_BASE_URL;
if(!raw)throw Error('PAGES_BASE_URL is required. Publish using the included GitHub Pages workflow.');
const url=new URL(raw);
if(!['https:','http:'].includes(url.protocol)||url.username||url.password||url.search||url.hash)throw Error('Invalid Pages base URL');
const base=url.href.replace(/\/+$/,'');
const output=path.join(root,'_site');
fs.mkdirSync(output,{recursive:true});
fs.mkdirSync(path.join(output,'ru'),{recursive:true});
for(const item of ['assets','css','js','.nojekyll']){
 const source=path.join(root,item);
 fs.cpSync(source,path.join(output,item),{recursive:true});
}
for(const file of ['index.html','ru/index.html','robots.txt','sitemap.xml']){
 const target=path.join(output,file);
 let text=fs.readFileSync(path.join(root,file),'utf8').replaceAll('__PAGES_BASE_URL__',base);
 if(file.endsWith('.html')){
  const ld=text.match(/<script type="application\/ld\+json">(.*?)<\/script>/);
  if(!ld)throw Error('Missing structured data: '+file);
  JSON.parse(ld[1]);
  const hash=crypto.createHash('sha256').update(ld[1]).digest('base64');
  // GitHub Pages cannot serve Netlify _headers. Preserve the policies supported by HTML.
  const csp="default-src 'self'; script-src 'self' 'sha256-"+hash+"'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://i.ytimg.com data:; frame-src https://www.tiktok.com https://www.instagram.com https://www.youtube-nocookie.com https://www.google.com; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action https://wa.me; upgrade-insecure-requests";
  text=text.replace(/(<meta charset="utf-8">)/,`$1<meta http-equiv="Content-Security-Policy" content="${csp}"><meta name="referrer" content="strict-origin-when-cross-origin">`);
 }
 if(text.includes('__PAGES_BASE_URL__')||text.includes('ahadalifilms.netlify.app'))throw Error('Unresolved site address: '+file);
 for(let attempt=0;;attempt++){
  try{fs.writeFileSync(target,text);break;}
  catch(error){if(!['EBUSY','EPERM'].includes(error.code)||attempt>=15)throw error;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,100);}
 }
}
console.log('Prepared GitHub Pages site for '+base+'/');
