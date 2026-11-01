/* ===== Edit these before publishing ===== */
const CONFIG={
  linkedin:"https://www.linkedin.com/in/vaishnavivaishna/",
  github:"https://github.com/vaishnavi-vaishna",
  repos:["https://github.com/vaishnavi-vaishna/cisco-packet-tracer-projects/tree/main/company-network-design","https://github.com/vaishnavi-vaishna/cisco-packet-tracer-projects/tree/main/college-campus-network","https://github.com/vaishnavi-vaishna/cisco-packet-tracer-projects/tree/main/coffee-shop-network"],
  email:"vaishnavaishnavi578@gmail.com"
};
/* ======================================== */
const $=s=>document.querySelector(s);
const ICON={
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
 terminal:'<path d="m4 17 6-6-6-6M12 19h8"/>',
 cloud:'<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 5 14.5 4.5 4.5 0 0 0 6.5 19z"/>',
 net:'<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
 li:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
 gh:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
};
const svg=(k,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

/* topology builder: nodes {id:[x,y,label,type]}; type r=router (circle), s=switch, p=pc/segment, c=cloud/server */
function topo(W,H,N,E,cls=""){
 let o=`<svg class="topo ${cls}" viewBox="0 0 ${W} ${H}" aria-hidden="true">`;
 E.forEach(([a,b])=>{o+=`<line x1="${N[a][0]}" y1="${N[a][1]}" x2="${N[b][0]}" y2="${N[b][1]}"/>`});
 const sz=cls?[46,26]:[34,18];
 for(const k in N){const [x,y,l,t]=N[k];const [w,h]=sz;
  o+=t==="r"?`<circle class="nd" cx="${x}" cy="${y}" r="${h*.62}"/>`:`<rect class="nd ${t==="c"?"t":""}" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="${t==="c"?h/2:3}"/>`;
  o+=`<text x="${x}" y="${y+(cls?3.5:2.8)}">${l}</text>`}
 return o+"</svg>";
}

const CERTS=[
 ["shield","Cisco Certified Network Associate (CCNA 200-301)","Cisco","f86377678f4e4728872ccd2146bbb5d4","Networking fundamentals, IP connectivity, routing and switching, network access, security fundamentals, and IP services."],
 ["terminal","Red Hat Certified System Administrator (RHCSA)","Red Hat","ac8553eb02d74c82b2890d483cc5f95b","Linux system administration, user and group management, file permissions, storage, services, and system operations."],
 ["cloud","AWS Certified Solutions Architect – Associate","Amazon Web Services","68432b86eff041e092243763bb3fdab1","Cloud architecture concepts, AWS infrastructure, networking, access management, and storage services."]
];
$("#certgrid").innerHTML=CERTS.map(c=>`<article class="card"><div class="ic">${svg(c[0])}</div><h3>${c[1]}</h3><p class="meta">Issuer: <b>${c[2]}</b></p><p class="meta">Credential ID: <b>${c[3]}</b></p><p>${c[4]}</p></article>`).join("");

const PROJ=[
{t:"Company Network Design & Implementation",l:"Advanced",o:"Designed a redundant enterprise network using a hierarchical Core, Distribution, and Access architecture across multiple business departments.",
 d:["Designed network segments for Sales & Marketing, HR & Logistics, Finance & Accounts, Admin & PR, ICT, and a dedicated Server Room.","Deployed OSPF as the primary routing protocol.","Configured a dedicated DHCP server for dynamic IP allocation.","Implemented sticky MAC-based port security for the Finance department.","Configured SSH for secure remote device management.","Implemented NAT Overload/PAT for multi-ISP connectivity."],
 g:["Cisco Packet Tracer","OSPF","DHCP","NAT/PAT","SSH","Port Security","Enterprise Networking"],
 v:topo(300,150,{c1:[110,18,"CORE1","r"],c2:[190,18,"CORE2","r"],d1:[70,66,"DIST1","s"],d2:[230,66,"DIST2","s"],
  a:[25,125,"SALES","p"],b:[70,125,"HR","p"],c:[115,125,"FIN","p"],d:[185,125,"ADMIN","p"],e:[230,125,"ICT","p"],f:[275,125,"SRV","c"]},
  [["c1","c2"],["c1","d1"],["c1","d2"],["c2","d1"],["c2","d2"],["d1","a"],["d1","b"],["d1","c"],["d2","d"],["d2","e"],["d2","f"]])},
{t:"Campus Network Design & Implementation",l:"Intermediate",o:"Built a multi-site campus network connecting a Main Campus and Branch Campus through a hierarchical network architecture.",
 d:["Designed Core, Distribution, and Access layers using multilayer switches.","Configured department-based VLANs for Admin, HR, Finance, Business, Engineering, Arts & Design, and IT.","Implemented router-on-a-stick inter-VLAN routing.","Configured router-based DHCP pools for faculty and student labs.","Deployed RIPv2 for routing between campuses.","Integrated a cloud-based email server using static routing.","Validated end-to-end connectivity."],
 g:["Cisco Packet Tracer","VLANs","Inter-VLAN Routing","RIPv2","DHCP","Static Routing"],
 v:topo(300,150,{m:[45,75,"MAIN SW","s"],r1:[115,75,"R1","r"],r2:[185,75,"R2","r"],b:[255,75,"BRANCH SW","s"],e:[150,22,"EMAIL","c"],
  v1:[25,128,"VLAN A","p"],v2:[75,128,"VLAN B","p"],v3:[225,128,"VLAN C","p"],v4:[275,128,"VLAN D","p"]},
  [["m","r1"],["r1","r2"],["r2","b"],["e","r2"],["m","v1"],["m","v2"],["b","v3"],["b","v4"]])},
{t:"Coffee Shop Network Design & Implementation",l:"Beginner / Intermediate",o:"Designed a secure small-business network based on the networking requirements of a retail environment.",
 d:["Designed a network topology for a small business.","Configured router-on-a-stick inter-VLAN routing.","Implemented router-based DHCP pools and static reservations.","Configured SSH remote management.","Applied console port protection.","Implemented standard Access Control Lists (ACLs)."],
 g:["Cisco Packet Tracer","Small Business Networking","VLANs","DHCP","ACLs","SSH","Network Security"],
 v:topo(300,150,{r:[150,22,"ROUTER","r"],s:[150,70,"SWITCH","s"],a:[40,125,"VLAN A","p"],b:[115,125,"VLAN A","p"],c:[185,125,"VLAN B","p"],d:[260,125,"VLAN B","p"]},
  [["r","s"],["s","a"],["s","b"],["s","c"],["s","d"]])}
];
$("#projgrid").innerHTML=PROJ.map((p,i)=>`<article class="card proj"><div class="viz" role="img" aria-label="Illustrative topology for ${p.t}">${p.v}</div><div class="top"><h3>${p.t}</h3><span class="lvl">${p.l}</span></div><p>${p.o}</p><ul class="tags" aria-label="Technologies">${p.g.map(x=>`<li>${x}</li>`).join("")}</ul>${(u=>u?`<a class="btn o" href="${u}" target="_blank" rel="noopener noreferrer">${svg("gh",18)}View on GitHub</a>`:`<a class="btn o" role="link" aria-disabled="true" title="GitHub URL not configured yet">${svg("gh",18)}View on GitHub</a>`)(CONFIG.repos[i]||CONFIG.github)}</article>`).join("");

const dlg=$("#dlg");let opener=null;
$("#projgrid").addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(!b)return;
 const p=PROJ[b.dataset.i];opener=b;
 $("#dt").textContent=p.t;$("#dm").textContent="Difficulty: "+p.l+" · Platform: Cisco Packet Tracer";
 $("#dbody").innerHTML=`<p>${p.o}</p><ul class="d">${p.d.map(x=>`<li>${x}</li>`).join("")}</ul><ul class="tags">${p.g.map(x=>`<li>${x}</li>`).join("")}</ul>`;
 dlg.showModal();});
$("#dx").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
dlg.addEventListener("close",()=>opener&&opener.focus());

const SK=[
 ["net","Networking",["Network topologies and architecture","OSI Model and TCP/IP protocol suite","IP addressing, subnetting, and VLSM","Routing concepts: RIPv1/v2, OSPF, EIGRP","VLAN configuration and inter-VLAN routing","Access Control Lists (ACLs)","NAT and PAT","STP optimization","EtherChannel","HSRP, VRRP, and GLBP","IPv6 routing","Router and switch security fundamentals","Wireless LAN controllers and access point configuration","Network troubleshooting"]],
 ["terminal","Linux System Administration",["RHEL installation and administration","User and group management","File permissions","Linux services and process management","Network management","Package installation and updates","Storage management","Apache","SAMBA","NFS","SSH"]],
 ["cloud","AWS Cloud",["Amazon EC2","Amazon S3","Amazon VPC","Security Groups","Network ACLs","Route Tables","NAT Gateway","IAM","Route 53 DNS","Database creation and management"]]
];
$("#skillgrid").innerHTML=SK.map(s=>`<article class="card"><div class="ic">${svg(s[0])}</div><h3>${s[1]}</h3><ul class="tags">${s[2].map(x=>x[0]==="*"?`<li class="k">${x.slice(1)}</li>`:`<li>${x}</li>`).join("")}</ul></article>`).join("");

/* contact */
const CB=[["li","Connect on LinkedIn",CONFIG.linkedin,"p","LinkedIn"],["gh","View GitHub Profile",CONFIG.github,"o","GitHub"],["mail","Send Me an Email","mailto:"+CONFIG.email,"o",""]];
let missing=[];
$("#contactbtns").innerHTML=CB.map(b=>{
 const ok=!!b[2];if(!ok)missing.push(b[4]);
 const ext=b[4]?' target="_blank" rel="noopener noreferrer"':"";
 return ok?`<a class="btn ${b[3]}" href="${b[2]}"${ext}>${svg(b[0],20)}${b[1]}</a>`
 :`<a class="btn ${b[3]}" role="link" aria-disabled="true" title="${b[4]} URL not configured yet">${svg(b[0],20)}${b[1]}</a>`}).join("");
$("#yr").textContent=new Date().getFullYear();

/* nav */
const burger=$("#burger"),menu=$("#menu");
function setMenu(o){menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu")}
burger.onclick=()=>setMenu(!menu.classList.contains("open"));
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const links=[...menu.querySelectorAll("a")];
const secs=links.map(a=>document.getElementById(a.hash.slice(1)));
const edu=$("#education");
function spy(){const y=scrollY+120;let cur=null;
 secs.forEach((s,i)=>{if(s.offsetTop<=y)cur=i});
 if(edu.offsetTop<=y&&y<$("#contact").offsetTop)cur=3; /* Education sits under Skills; keep nothing extra in navbar */
 if(scrollY+innerHeight>=document.documentElement.scrollHeight-4)cur=secs.length-1;
 links.forEach((a,i)=>{a.classList.toggle("on",i===cur);i===cur?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}
addEventListener("scroll",spy,{passive:true});addEventListener("resize",spy);spy();
