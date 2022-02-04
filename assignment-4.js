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


