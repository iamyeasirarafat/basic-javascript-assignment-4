//১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।

function anaToVori(ana) {
  if (ana < 0) {
    const warn = "please give a positive value  only";
    return warn;
  } else if (typeof ana != 'number') {
    const warn = "please give a number onlty";
    return warn;
  } else {
    let vori = ana / 16;
    return vori;
  }
}


/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।  */

function pandaCost(shingara, somucha, jilapi) {
  const shingaraPrice = 7;
  const somuchaPrice = 10;
  const jilapiPrice = 15;
  let totalShingaraPrice = 0;
  let totalSomuchaPrice = 0;
  let totalJilapiPrice = 0;
      if (typeof shingara != 'number') {
          const error = 'please input number value only' 
          return error;       
      }else if(shingara<0){
      const error = 'please give positive value only';
      return error;        
      }else{
        totalShingaraPrice = shingara * shingaraPrice;
      }
      if (typeof somucha != 'number') {
          const error = 'please input number value only' 
          return error;       
      }else if(somucha<0){
      const error = 'please give positive value only';
      return error;        
      }else{
         totalSomuchaPrice = somucha * somuchaPrice;
      }
      if (typeof jilapi != 'number') {
          const error = 'please input number value only' 
          return error;       
      }else if(jilapi<0){
      const error = 'please give positive value only';
      return error;        
      }else{
         totalJilapiPrice = jilapi * jilapiPrice;
      }
      let total = totalShingaraPrice+totalSomuchaPrice+totalJilapiPrice;
      return total;
}


/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */

function picnicBudget(numberOfPeoples) {
  if (typeof numberOfPeoples != 'number') {
    const error = 'please input number value only' 
    return error;       
}else if(numberOfPeoples<0){
const error = 'please give positive value only';
return error;        
}else{
  if (numberOfPeoples<=100) {
    let totalBudget = numberOfPeoples * 5000;
    return totalBudget;
  }else if (numberOfPeoples<=200) {
    let extraPeople = numberOfPeoples - 100;
    let extraPeopleBudget = extraPeople *4000;
    let totalBudget = 500000 + extraPeopleBudget;
    return totalBudget;
  }else if (numberOfPeoples > 200) {
    let extraPeople = numberOfPeoples - 200;
    let extraPeopleBudget = extraPeople * 3000;
    let totalBudget = 500000 + 400000 + extraPeopleBudget;
    return totalBudget;
  }
}
}

