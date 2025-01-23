const pianoKeys=document.querySelectorAll('piano-keys .key'); //دسترسی به کلیدهای پیانو

function playSound(key){ //تابع پخش صدای کلید
    const keySound=key.dataset.key; //کلید مشخص
    const audio=new Audio(`notes/${keySound}.mp3`) //  فایل صوتی کلید مشخص شده
    audio.play(); //پخش صدا
    key.classList.add('active'); //اضافه کردن کلاس
    setTimeout(function(){
        key.classList.remove('active') //حذف کلاس پس از 0.5 ثانیه
    },500)
}
