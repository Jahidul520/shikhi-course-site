/* ভর্তি সাময়িকভাবে বন্ধ; পেমেন্ট ও Google Form সংযোগ UI থেকে সরানো হয়েছে। */
const courses = [
  {id:'web',demoId:'demo-web',title:'ওয়েব ডিজাইন বেসিক',category:'ওয়েব ডিজাইন',level:'শুরু থেকে',duration:'৪ সপ্তাহ',price:1200,symbol:'</>',theme:'web',image:'assets/web-course.jpg?v=compressed-1',imageWidth:800,imageHeight:533,description:'HTML, CSS দিয়ে নিজের প্রথম রেসপনসিভ ওয়েবসাইট বানান।',lessons:['ওয়েব ও HTML-এর পরিচিতি','HTML দিয়ে পেজের কাঠামো','CSS দিয়ে রং ও টাইপোগ্রাফি','Flexbox ও CSS Grid','মোবাইল রেসপনসিভ ডিজাইন','নিজের পোর্টফোলিও ওয়েবসাইট'],learn:['পরিষ্কার HTML ও CSS লেখা','মোবাইল-ফ্রেন্ডলি লেআউট তৈরি','নিজের লাইভ প্রজেক্ট প্রকাশ']},
  {id:'design',demoId:'demo-design',title:'গ্রাফিক ডিজাইন',category:'ক্রিয়েটিভ ডিজাইন',level:'শুরু থেকে',duration:'৩ সপ্তাহ',price:1500,symbol:'✳',theme:'design',image:'assets/design-course.jpg?v=compressed-1',imageWidth:800,imageHeight:1200,description:'ডিজাইনের বেসিক, রং ও লেআউট দিয়ে সুন্দর ভিজ্যুয়াল তৈরি করুন।',lessons:['ডিজাইনের মৌলিক ধারণা','রং ও টাইপোগ্রাফির ব্যবহার','লেআউট ও ভিজ্যুয়াল হায়ারার্কি','সোশ্যাল মিডিয়া পোস্ট ডিজাইন','ব্র্যান্ডিংয়ের প্রাথমিক ধারণা','পোর্টফোলিও প্রজেক্ট'],learn:['ডিজাইনের বেসিক প্রয়োগ','সোশ্যাল পোস্ট ও ব্যানার তৈরি','ডিজাইন পোর্টফোলিও সাজানো']},
  {id:'marketing',demoId:'demo-marketing',title:'ডিজিটাল মার্কেটিং',category:'অনলাইন মার্কেটিং',level:'শুরু থেকে',duration:'৪ সপ্তাহ',price:1800,symbol:'↗',theme:'marketing',image:'assets/marketing-course.jpg?v=compressed-1',imageWidth:800,imageHeight:1200,description:'সোশ্যাল মিডিয়া, কনটেন্ট ও বিজ্ঞাপনের ব্যবহারিক কৌশল শিখুন।',lessons:['ডিজিটাল মার্কেটিংয়ের ভিত্তি','কনটেন্ট প্ল্যান তৈরি','সোশ্যাল মিডিয়া প্রোফাইল অপটিমাইজ','Meta Ads-এর পরিচিতি','অডিয়েন্স ও ক্যাম্পেইন','ফলাফল মাপা ও রিপোর্ট তৈরি'],learn:['কনটেন্ট ক্যালেন্ডার তৈরি','বেসিক বিজ্ঞাপন ক্যাম্পেইন সাজানো','মার্কেটিং রিপোর্ট বোঝা']},
  {id:'video',demoId:'demo-video',title:'ভিডিও এডিটিং',category:'ভিডিও ক্রিয়েশন',level:'শুরু থেকে',duration:'৩ সপ্তাহ',price:1600,symbol:'▶',theme:'video',image:'assets/video-course.jpg?v=compressed-1',imageWidth:800,imageHeight:533,description:'ভিডিও কাটিং, অডিও, কালার ও সোশ্যাল কনটেন্ট বানানো শিখুন।',lessons:['এডিটিং সফটওয়্যারের পরিচিতি','ক্লিপ কাটিং ও টাইমলাইন','ট্রানজিশন ও টেক্সট','অডিও ও ব্যাকগ্রাউন্ড মিউজিক','কালার কারেকশন','একটি সম্পূর্ণ সোশ্যাল ভিডিও'],learn:['পরিষ্কার ভিডিও এডিট করা','সাউন্ড ও কালার ঠিক করা','সোশ্যাল মিডিয়ার জন্য এক্সপোর্ট করা']}
];

const grid=document.querySelector('#course-grid');
const select=document.querySelector('#course-select');
const phoneInput=document.querySelector('#student-phone');
const dialog=document.querySelector('#course-dialog');
const dialogContent=document.querySelector('#dialog-content');
const toast=document.querySelector('#toast');
let toastTimer;
const money=n=>`৳${n.toLocaleString('en-US')}`;
const scrollToSection=element=>element?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});

function renderCourses(){
  if(!select)return;
  select.innerHTML='<option value="">একটি কোর্স নির্বাচন করুন</option>'+courses.map(c=>`<option value="${c.id}">${c.title} · ${money(c.price)}</option>`).join('');
}
function updateCourseTotal(){if(!select)return;const course=courses.find(item=>item.id===select.value);document.querySelector('#course-total').textContent=course?money(course.price):'কোর্স বেছে নিন'}
select?.addEventListener('change',updateCourseTotal);
const toEnglishDigits=value=>value.replace(/[০-৯٠-٩۰-۹]/g,d=>String(d.charCodeAt(0)-(d>='০'&&d<='৯'?0x09e6:d>='٠'&&d<='٩'?0x0660:0x06f0)));
phoneInput?.addEventListener('input',()=>{const cursor=phoneInput.selectionStart;const normalized=toEnglishDigits(phoneInput.value);if(normalized!==phoneInput.value){phoneInput.value=normalized;phoneInput.setSelectionRange(cursor,cursor)}});
function openCourse(id){
  const c=courses.find(item=>item.id===id);if(!c)return;
  dialogContent.innerHTML=`<div class="dialog-hero course-visual ${c.theme}"><img class="dialog-artwork" src="${c.image}" width="${c.imageWidth}" height="${c.imageHeight}" alt="" loading="lazy" decoding="async" /><span class="course-symbol">${c.symbol}</span></div><h2 id="dialog-title">${c.title}</h2><p id="dialog-description">${c.description}</p><div class="dialog-details"><span>◷ ${c.duration}</span><span>● ${c.level}</span><strong>${money(c.price)}</strong></div><h3>কোর্সে যা যা শিখবেন</h3><ul class="learn-list">${c.learn.map(item=>`<li>${item}</li>`).join('')}</ul><h3>ক্লাসের তালিকা</h3><ol class="lesson-list">${c.lessons.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${item}</li>`).join('')}</ol><button class="dialog-print-link" type="button" data-print-course>সিলেবাস প্রিন্ট / PDF সেভ করুন ↗</button><button class="dialog-share-link" type="button" data-share-course="${c.id}">এই কোর্সের লিংক শেয়ার করুন ↗</button><a class="dialog-demo-link" href="#video-samples" data-demo-target="${c.demoId}">এই কোর্সের ফ্রি ডেমো দেখুন ↗</a><a class="button button-dark dialog-cta" href="#payment" data-enroll="${c.id}">ভর্তি সাময়িক বন্ধ <span>↗</span></a>`;
  dialog.showModal();
}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300)}
async function shareCourse(id){
  const course=courses.find(item=>item.id===id);if(!course)return;
  const shareUrl=new URL(window.location.href);shareUrl.search='';shareUrl.searchParams.set('course',id);shareUrl.hash='courses';
  try{
    if(navigator.share){await navigator.share({title:course.title,text:`${course.title} কোর্সের সিলেবাস ও মূল্য দেখুন`,url:shareUrl.href});return}
    await navigator.clipboard.writeText(shareUrl.href);showToast('কোর্সের লিংক কপি হয়েছে');
  }catch(error){if(error.name==='AbortError')return;window.prompt('কোর্সের লিংক কপি করুন',shareUrl.href)}
}
grid.addEventListener('click',event=>{const enroll=event.target.closest('[data-quick-enroll]');if(enroll){event.preventDefault();scrollToSection(document.querySelector('#payment'));showToast('ভর্তি সাময়িকভাবে বন্ধ—এখন পেমেন্ট পাঠাবেন না');return}const card=event.target.closest('[data-course]');if(card){event.preventDefault();openCourse(card.dataset.course)}});
document.addEventListener('click',event=>{
  const print=event.target.closest('[data-print-course]');if(print){window.print();return}
  const share=event.target.closest('[data-share-course]');if(share){shareCourse(share.dataset.shareCourse);return}
  const close=event.target.closest('[data-close]');if(close){dialog.close();return}
  const enroll=event.target.closest('[data-enroll]');if(enroll){event.preventDefault();dialog.close();setTimeout(()=>scrollToSection(document.querySelector('#payment')),100);showToast('ভর্তি সাময়িকভাবে বন্ধ—এখন পেমেন্ট পাঠাবেন না');return}
  const demo=event.target.closest('[data-demo-target]');if(demo){event.preventDefault();const target=document.getElementById(demo.dataset.demoTarget);dialog.close();setTimeout(()=>scrollToSection(target),100);return}
});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const menu=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
function setMenuOpen(isOpen){navLinks.classList.toggle('open',isOpen);menu.setAttribute('aria-expanded',String(isOpen));menu.setAttribute('aria-label',isOpen?'মেনু বন্ধ করুন':'মেনু খুলুন')}
menu.addEventListener('click',()=>setMenuOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navLinks.classList.contains('open'))setMenuOpen(false)});
document.querySelector('#year').textContent=new Date().getFullYear();
const demoToggle=document.querySelector('#demo-toggle');
demoToggle?.addEventListener('click',()=>{const card=document.querySelector('#demo-card');const active=card.classList.toggle('alt-color');demoToggle.setAttribute('aria-pressed',String(active));demoToggle.textContent=active?'আবার আগের রং দেখুন ↗':'রং বদলে দেখুন ↗'});
document.querySelectorAll('.video-preview').forEach(button=>button.addEventListener('click',()=>{const frame=button.closest('.video-frame');const video=document.createElement('iframe');video.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.videoId)}?autoplay=1`;video.title=button.dataset.videoTitle;video.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';video.referrerPolicy='strict-origin-when-cross-origin';video.allowFullscreen=true;video.loading='lazy';frame.replaceChildren(video)}));
renderCourses();
const sharedCourseId=new URLSearchParams(window.location.search).get('course');if(courses.some(course=>course.id===sharedCourseId))openCourse(sharedCourseId);
