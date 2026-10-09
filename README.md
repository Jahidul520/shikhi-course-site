# শিখি — অনলাইন কোর্স ওয়েবসাইট

বাংলায় তৈরি, মোবাইল-ফ্রেন্ডলি static course site (HTML, CSS, Vanilla JavaScript)। কোনো build step লাগে না।

## লাইভ ঠিকানা

- Vercel: https://shikhi-course-site.vercel.app/
- GitHub Pages: https://jahidul520.github.io/shikhi-course-site/

## ভর্তি ও ম্যানুয়াল পেমেন্ট

- সাইটে ভর্তি ফর্ম চালু আছে। কোর্সের বর্তমান ক্লাস-অ্যাক্সেস ও শুরুর তারিখ WhatsApp বা Telegram-এ নিশ্চিত না করে টাকা পাঠাবেন না। ডেমোটি পূর্ণ কোর্স নয়।
- bKash Personal: 01615709639 · Nagad Personal: 01408754249। Send Money করুন; কোনো automated payment gateway নেই, লেনদেন হাতে যাচাই করতে হবে।
- Google Form-এ নাম, মোবাইল, কোর্স, Transaction ID, পেমেন্ট মাধ্যম ও স্ক্রিনশট জমা দিন। Screenshot upload করতে Google sign-in লাগে; Google account-এর নাম, ইমেইল ও ছবি Google সংরক্ষণ করতে পারে। Prefilled তথ্য URL বা browser history-তে দেখা যেতে পারে।
- Form responses Shikhi Enrollment (Responses) spreadsheet-এ যায়। Spreadsheet ও payment proofs private রাখুন; public sharing চালু করবেন না।
- পেমেন্ট ম্যানুয়ালি যাচাই হলে সাধারণত ১ কর্মদিবসে ব্যক্তিগত Google Drive access পাঠানো হবে। Drive access link পাওয়ার দিন থেকে ৬ মাস থাকে। Google Form-এ screenshot upload করতে ব্যবহৃত Google account-এ access দিতে হবে।
- ৭ দিনের মধ্যে duplicate/excess payment, verification-এর ৩ কর্মদিবসেও course না পাওয়া, বা course cancellation/non-delivery হলে proof-সহ refund চাইতে পারবেন। অনুমোদিত refund একই মাধ্যমে সর্বোচ্চ ৭ কর্মদিবসে পাঠানোর লক্ষ্য। Link/material পাঠানোর পর শুধু মত বদল, ভুল course, course অসমাপ্ত, বা ব্যক্তিগত device/internet সমস্যায় সাধারণত refund নেই; আইনগত অধিকার অক্ষুণ্ণ।
- Support: প্রতিদিন সকাল ১০টা–রাত ৮টা, বাংলাদেশ সময়; সাধারণত ১ কর্মদিবসে উত্তর। WhatsApp 01615709639 / 01408754249 অথবা Telegram @Joy42s। শিক্ষক/প্রতিষ্ঠানের যাচাইযোগ্য পরিচিতি এখনো প্রকাশিত নয়; testimonial বা আয়-সংক্রান্ত দাবি বানিয়ে যোগ করবেন না।

## লোকালি চালানো

index.html ব্রাউজারে খুলুন, অথবা VS Code-এ folder খুলে Live Server-এর Go Live চাপুন। index.html, style.css, script.js, favicon.svg, assets folder ও course-*.svg একই site folder-এ থাকতে হবে।

## Vercel-এ প্রকাশ

Vercel project এখন GitHub repository Jahidul520/shikhi-course-site-এর সঙ্গে connected। main branch-এ commit/push করলে Vercel স্বয়ংক্রিয়ভাবে deployment তৈরি করে। নতুন deployment সফল হলে shikhi-course-site.vercel.app ঠিকানায় প্রকাশিত হবে। Framework Preset Other; Build Command ও Output Directory ফাঁকা রাখুন।

## GitHub Pages

Repository Settings → Pages-এ Deploy from a branch নির্বাচন করে main ও /(root) সেট করুন। প্রকাশিত ঠিকানা: https://jahidul520.github.io/shikhi-course-site/ ।

## অতিরিক্ত তথ্য

কোর্সের সারাংশ index.html-এ এবং কোর্সের নাম, মূল্য, ক্লাস ও বিবরণ script.js-এর courses তালিকায় সম্পাদনা করুন। ৪:৪৮ মিনিটের HTML অনুশীলনী ভিডিওতে AI-উৎপন্ন Microsoft Zira ইংরেজি কণ্ঠ এবং বাংলা স্লাইড আছে; এটি পূর্ণ paid class নয়। English captions ভিডিওতে চালু, ইংরেজি caption file ও বাংলা transcript দুটিই ডাউনলোড করা যায়। বাকি তিনটি নমুনা স্বতন্ত্র YouTube নির্মাতাদের; তাদের credit ও মূল লিংক কার্ডে আছে। পেমেন্ট নম্বর ও Google Form connection script.js-এর CONFIG-এ আছে।
