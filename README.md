# শিখি — অনলাইন কোর্স ওয়েবসাইট

বাংলায় তৈরি, মোবাইল-ফ্রেন্ডলি static course site (HTML, CSS, Vanilla JavaScript)। কোনো build step লাগে না।

## লাইভ ঠিকানা

- Vercel: https://shikhi-course-site.vercel.app/
- GitHub Pages: https://jahidul520.github.io/shikhi-course-site/

## বর্তমান সেটআপ

- বিকাশ/নগদ নম্বর, Google Form URL ও course data script.js-এর CONFIG/courses অংশে আছে।
- এনরোলমেন্ট Google Form-এ নাম, মোবাইল, কোর্স, Transaction ID, payment method ও screenshot যায়। Screenshot দিতে Google account-এ sign in করতে হয়; Google account-এর নাম, email ও ছবি রেকর্ড হতে পারে। Prefill করা তথ্য URL/history-তে থাকতে পারে। শিক্ষার্থীকে Google Form-এ নিজে Submit করতে হবে।
- Form response Shikhi Enrollment (Responses) spreadsheet-এ সংরক্ষিত হয়। Transaction ID মিলিয়ে payment ম্যানুয়ালি যাচাই করে তারপর course access পাঠান। সাইট নিজে payment যাচাই বা course access দেয় না।
- Spreadsheet ও Drive-এর payment proof private রাখুন; public sharing চালু করবেন না।
- Course access link পাঠানোর দিন থেকে ৬ মাস। পেমেন্ট manually verify হওয়ার পর WhatsApp-এ সাধারণত ১ কর্মদিবসে link পাঠানো হবে; ৩ কর্মদিবসে না এলে যোগাযোগ করুন। পেমেন্টের ৭ দিনের মধ্যে duplicate/excess payment, verification-এর পর ৩ কর্মদিবসেও course না পাওয়া, বা course cancellation/non-delivery হলে প্রমাণসহ refund চাইতে পারবেন; অনুমোদিত refund একই মাধ্যম দিয়ে সর্বোচ্চ ৭ কর্মদিবসে পাঠানোর লক্ষ্য। Link/material পাঠানোর পর মত পরিবর্তন, ভুল নির্বাচন, course অসমাপ্ত বা ব্যক্তিগত device/internet সমস্যায় সাধারণত refund নেই; আইনগত অধিকার অক্ষুণ্ণ। শিক্ষক/প্রতিষ্ঠানের যাচাইযোগ্য পরিচিতি প্রকাশিত নয়; support প্রতিদিন সকাল ১০টা–রাত ৮টা, বাংলাদেশ সময়। অনুমতি ছাড়া testimonial বা income claim যোগ করবেন না।

## লোকালি চালানো

index.html ব্রাউজারে খুলুন, অথবা VS Code-এ folder খুলে Live Server-এর Go Live চাপুন। index.html, style.css, script.js, favicon.svg, assets folder ও course-*.svg একই site folder-এ থাকতে হবে।

## Vercel-এ প্রকাশ

Vercel project এখন GitHub repository Jahidul520/shikhi-course-site-এর সঙ্গে connected। main branch-এ commit/push করলে Vercel স্বয়ংক্রিয়ভাবে deployment তৈরি করে। নতুন deployment সফল হলে shikhi-course-site.vercel.app ঠিকানায় প্রকাশিত হবে। Framework Preset Other; Build Command ও Output Directory ফাঁকা রাখুন।

## GitHub Pages

Repository Settings → Pages-এ Deploy from a branch নির্বাচন করে main ও /(root) সেট করুন। প্রকাশিত ঠিকানা: https://jahidul520.github.io/shikhi-course-site/ ।

## অতিরিক্ত তথ্য

কোর্সের সারাংশ index.html-এ এবং কোর্সের নাম, মূল্য, ক্লাস ও বিবরণ script.js-এর courses তালিকায় সম্পাদনা করুন। YouTube নমুনা ভিডিওগুলো স্বতন্ত্র নির্মাতাদের; এগুলো শিখি প্ল্যাটফর্মের নিজস্ব ক্লাস নয়। কোর্স কার্ডের ছবির উৎস ও নির্মাতার credit সাইটে দেওয়া আছে।
