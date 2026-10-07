/* পেমেন্ট নম্বর ও Google Form link এখানে সেট করা আছে। পরিবর্তন করলে সাইটে প্রকাশ করুন। */
const CONFIG = {
  PAYMENT_NUMBERS: { bkash: '01615709639', nagad: '01408754249' },
  GOOGLE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSdSuhImUJuiqV2WYe8zsodkMd4BSLtP0-vg7g2LYR7n94LscQ/viewform?usp=publish-editor'
};

const courses = [
  {id:'web',title:'ওয়েব ডিজাইন বেসিক',category:'ওয়েব ডিজাইন',level:'শুরু থেকে',duration:'৪ সপ্তাহ',price:1200,symbol:'</>',theme:'web',image:'assets/web-course.jpg',description:'HTML, CSS দিয়ে নিজের প্রথম রেসপনসিভ ওয়েবসাইট বানান।',lessons:['ওয়েব ও HTML-এর পরিচিতি','HTML দিয়ে পেজের কাঠামো','CSS দিয়ে রং ও টাইপোগ্রাফি','Flexbox ও CSS Grid','মোবাইল রেসপনসিভ ডিজাইন','নিজের পোর্টফোলিও ওয়েবসাইট'],learn:['পরিষ্কার HTML ও CSS লেখা','মোবাইল-ফ্রেন্ডলি লেআউট তৈরি','নিজের লাইভ প্রজেক্ট প্রকাশ']},
  {id:'design',title:'গ্রাফিক ডিজাইন',category:'ক্রিয়েটিভ ডিজাইন',level:'শুরু থেকে',duration:'৩ সপ্তাহ',price:1500,symbol:'✳',theme:'design',image:'assets/design-course.jpg',description:'ডিজাইনের বেসিক, রং ও লেআউট দিয়ে সুন্দর ভিজ্যুয়াল তৈরি করুন।',lessons:['ডিজাইনের মৌলিক ধারণা','রং ও টাইপোগ্রাফির ব্যবহার','লেআউট ও ভিজ্যুয়াল হায়ারার্কি','সোশ্যাল মিডিয়া পোস্ট ডিজাইন','ব্র্যান্ডিংয়ের প্রাথমিক ধারণা','পোর্টফোলিও প্রজেক্ট'],learn:['ডিজাইনের বেসিক প্রয়োগ','সোশ্যাল পোস্ট ও ব্যানার তৈরি','ডিজাইন পোর্টফোলিও সাজানো']},
  {id:'marketing',title:'ডিজিটাল মার্কেটিং',category:'অনলাইন মার্কেটিং',level:'শুরু থেকে',duration:'৪ সপ্তাহ',price:1800,symbol:'↗',theme:'marketing',image:'assets/marketing-course.jpg',description:'সোশ্যাল মিডিয়া, কনটেন্ট ও বিজ্ঞাপনের ব্যবহারিক কৌশল শিখুন।',lessons:['ডিজিটাল মার্কেটিংয়ের ভিত্তি','কনটেন্ট প্ল্যান তৈরি','সোশ্যাল মিডিয়া প্রোফাইল অপটিমাইজ','Meta Ads-এর পরিচিতি','অডিয়েন্স ও ক্যাম্পেইন','ফলাফল মাপা ও রিপোর্ট তৈরি'],learn:['কনটেন্ট ক্যালেন্ডার তৈরি','বেসিক বিজ্ঞাপন ক্যাম্পেইন সাজানো','মার্কেটিং রিপোর্ট বোঝা']},
  {id:'video',title:'ভিডিও এডিটিং',category:'ভিডিও ক্রিয়েশন',level:'শুরু থেকে',duration:'৩ সপ্তাহ',price:1600,symbol:'▶',theme:'video',image:'assets/video-course.jpg',description:'ভিডিও কাটিং, অডিও, কালার ও সোশ্যাল কনটেন্ট বানানো শিখুন।',lessons:['এডিটিং সফটওয়্যারের পরিচিতি','ক্লিপ কাটিং ও টাইমলাইন','ট্রানজিশন ও টেক্সট','অডিও ও ব্যাকগ্রাউন্ড মিউজিক','কালার কারেকশন','একটি সম্পূর্ণ সোশ্যাল ভিডিও'],learn:['পরিষ্কার ভিডিও এডিট করা','সাউন্ড ও কালার ঠিক করা','সোশ্যাল মিডিয়ার জন্য এক্সপোর্ট করা']}
];

const grid=document.querySelector('#course-grid');
const select=document.querySelector('#course-select');
const dialog=document.querySelector('#course-dialog');
const dialogContent=document.querySelector('#dialog-content');
const toast=document.querySelector('#toast');
let toastTimer;
const money=n=>`৳${n.toLocaleString('en-US')}`;

function renderCourses(){
  grid.innerHTML=courses.map(course=>`<article class="course-card" tabindex="0" role="button" data-course="${course.id}" aria-label="${course.title} কোর্সের বিস্তারিত দেখুন"><div class="course-visual ${course.theme} has-art"><img class="course-artwork" src="${course.image}" alt="" loading="lazy" decoding="async" /><span class="course-tag">${course.category}</span></div><div class="course-body"><div class="course-meta"><span>${course.level}</span><span>${course.duration}</span></div><h3>${course.title}</h3><p>${course.description}</p><div class="course-bottom"><span class="price">${money(course.price)} <small>মোট</small></span><span class="card-open" aria-hidden="true">↗</span></div></div></article>`).join('');
  select.innerHTML='<option value="">একটি কোর্স নির্বাচন করুন</option>'+courses.map(c=>`<option value="${c.id}">${c.title} · ${money(c.price)}</option>`).join('');
}
function openCourse(id){
  const c=courses.find(item=>item.id===id);if(!c)return;
  dialogContent.innerHTML=`<div class="dialog-hero course-visual ${c.theme}"><img class="dialog-artwork" src="${c.image}" alt="" loading="lazy" decoding="async" /><span class="course-symbol">${c.symbol}</span></div><h2 id="dialog-title">${c.title}</h2><p>${c.description}</p><div class="dialog-details"><span>◷ ${c.duration}</span><span>● ${c.level}</span><strong>${money(c.price)}</strong></div><h3>কোর্সে যা যা শিখবেন</h3><ul class="learn-list">${c.learn.map(item=>`<li>${item}</li>`).join('')}</ul><h3>ক্লাসের তালিকা</h3><ol class="lesson-list">${c.lessons.map((item,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${item}</li>`).join('')}</ol><a class="button button-dark dialog-cta" href="#payment" data-enroll="${c.id}">এই কোর্সে এনরোল করুন <span>↗</span></a>`;
  dialog.showModal();
}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300)}
function setPaymentNumbers(){document.querySelectorAll('[data-payment-number]').forEach(el=>{const method=el.closest('.payment-method').classList.contains('bkash')?'bkash':'nagad';el.textContent=CONFIG.PAYMENT_NUMBERS[method]||'নম্বর যোগ করুন'})}
grid.addEventListener('click',event=>{const card=event.target.closest('[data-course]');if(card)openCourse(card.dataset.course)});
grid.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-course]')){event.preventDefault();openCourse(event.target.dataset.course)}});
document.addEventListener('click',event=>{
  const close=event.target.closest('[data-close]');if(close){dialog.close();return}
  const enroll=event.target.closest('[data-enroll]');if(enroll){select.value=enroll.dataset.enroll;dialog.close();setTimeout(()=>document.querySelector('#payment').scrollIntoView({behavior:'smooth'}),100);return}
  const copy=event.target.closest('[data-copy]');if(copy){const value=copy.closest('.payment-method').querySelector('[data-payment-number]').textContent;if(value==='নম্বর যোগ করুন'){showToast('প্রকাশের আগে script.js-এ নিজের নম্বর যোগ করুন');return}navigator.clipboard?.writeText(value).then(()=>showToast('পেমেন্ট নম্বর কপি হয়েছে')).catch(()=>showToast(value));return}
});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
document.querySelector('#enroll-form').addEventListener('submit',async event=>{
  event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
  const data=new FormData(form);const course=courses.find(c=>c.id===data.get('course'));
  const summary=`নাম: ${data.get('name')}\nমোবাইল: ${data.get('phone')}\nকোর্স: ${course?.title??''}\nমূল্য: ${money(course?.price??0)}\nট্রানজ্যাকশন আইডি: ${data.get('transactionId')}\nপেমেন্ট মাধ্যম: ${data.get('paymentMethod')}`;
  const feedback=document.querySelector('#form-feedback');
  if(!CONFIG.GOOGLE_FORM_URL){feedback.textContent='এনরোলমেন্ট নিতে আগে script.js-এ আপনার প্রকাশযোগ্য Google Form URL যোগ করুন। এই সাইট ফর্মের তথ্য কোথাও জমা দেয় না।';feedback.classList.add('visible');return;}
  try{await navigator.clipboard.writeText(summary);feedback.textContent='আপনার তথ্য কপি হয়েছে। Google Form-এ প্রতিটি ঘরে সংশ্লিষ্ট তথ্য বসিয়ে স্ক্রিনশট আপলোড করে সাবমিট করুন।';}
  catch{feedback.textContent='Google Form-এ প্রতিটি ঘরে সংশ্লিষ্ট তথ্য লিখুন, স্ক্রিনশট আপলোড করে Submit করুন।';}
  feedback.classList.add('visible');window.open(CONFIG.GOOGLE_FORM_URL,'_blank','noopener,noreferrer');
});
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const links=document.querySelector('.nav-links');const isOpen=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen))});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.nav-links').classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
const demoToggle=document.querySelector('#demo-toggle');
demoToggle?.addEventListener('click',()=>{const card=document.querySelector('#demo-card');const active=card.classList.toggle('alt-color');demoToggle.setAttribute('aria-pressed',String(active));demoToggle.textContent=active?'আবার আগের রং দেখুন ↗':'রং বদলে দেখুন ↗'});
renderCourses();setPaymentNumbers();
