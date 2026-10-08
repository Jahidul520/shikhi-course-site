# শিখি — অনলাইন কোর্স ওয়েবসাইট

বাংলায় তৈরি, মোবাইল-ফ্রেন্ডলি static course site (HTML, CSS, Vanilla JavaScript)। কোনো build step লাগে না।

## লাইভ ঠিকানা

- Vercel: https://shikhi-course-site.vercel.app/
- GitHub Pages: https://jahidul520.github.io/shikhi-course-site/

## বর্তমান ভর্তি অবস্থা

- নতুন ভর্তি আপাতত সাময়িকভাবে বন্ধ। পূর্ণ কোর্সের ক্লাস ও শিক্ষার্থী উপকরণ প্রস্তুত না হওয়া পর্যন্ত বিকাশ/নগদে টাকা পাঠাবেন না। সাইটে পেমেন্ট নম্বর, এনরোলমেন্ট ফর্ম বা Google Form জমা দেওয়ার ব্যবস্থা নেই।
- কোর্স কার্ড, সিলেবাস ও বিনামূল্যের ডেমো দেখে প্রশ্ন করতে WhatsApp 01615709639 / 01408754249 অথবা Telegram @Joy42s-এ যোগাযোগ করুন।
- প্রস্তুত হলে ভর্তি চালু করার আগে কোর্সে আসলে কী দেওয়া হবে, অ্যাক্সেস কতদিন থাকবে, সাপোর্ট ও রিফান্ডের নিয়ম নতুন করে প্রকাশ করতে হবে।
- শিক্ষক/প্রতিষ্ঠানের যাচাইযোগ্য পরিচিতি এখনো প্রকাশিত নয়। অনুমতি ছাড়া testimonial বা আয়-সংক্রান্ত দাবি যোগ করবেন না।

## লোকালি চালানো

index.html ব্রাউজারে খুলুন, অথবা VS Code-এ folder খুলে Live Server-এর Go Live চাপুন। index.html, style.css, script.js, favicon.svg, assets folder ও course-*.svg একই site folder-এ থাকতে হবে।

## Vercel-এ প্রকাশ

Vercel project এখন GitHub repository Jahidul520/shikhi-course-site-এর সঙ্গে connected। main branch-এ commit/push করলে Vercel স্বয়ংক্রিয়ভাবে deployment তৈরি করে। নতুন deployment সফল হলে shikhi-course-site.vercel.app ঠিকানায় প্রকাশিত হবে। Framework Preset Other; Build Command ও Output Directory ফাঁকা রাখুন।

## GitHub Pages

Repository Settings → Pages-এ Deploy from a branch নির্বাচন করে main ও /(root) সেট করুন। প্রকাশিত ঠিকানা: https://jahidul520.github.io/shikhi-course-site/ ।

## অতিরিক্ত তথ্য

কোর্সের সারাংশ index.html-এ এবং কোর্সের নাম, মূল্য, ক্লাস ও বিবরণ script.js-এর courses তালিকায় সম্পাদনা করুন। YouTube নমুনা ভিডিওগুলো স্বতন্ত্র নির্মাতাদের; এগুলো শিখি প্ল্যাটফর্মের নিজস্ব ক্লাস নয়। কোর্স কার্ডের ছবির উৎস ও নির্মাতার credit সাইটে দেওয়া আছে।
