


$('.slider').slick({
  autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
    fade: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });


// フォームで指定の文字・数値が入力されているか判断する。
const contactSubmit = document.getElementById('contact-submit');

contactSubmit.addEventListener('click', function(){
  let flag = 0;
  const name = document.getElementById('contact-name').value;
  const kananame = document.getElementById('contact-kananame').value;
  const mail = document.getElementById('contact-mail').value;
  const confmail = document.getElementById('confir-mail').value;
  const item = document.getElementById('contact-item').value;
  const cont = document.getElementById('contact-cont').value;

  // 名前が入力されているか確認する。
  if(!name) {
    flag = 1;
    document.getElementById('none-name').style.display = "block";
  } else {
    document.getElementById('none-name').style.display = "none";
  }

  // フリガナが入力されているか確認する。
  if(!kananame){
    flag = 1;
    document.getElementById('notin-kana').style.display = "block";
  } else if(!(kananame.match(/^[ァ-ヶー ]*$/))) {
    flag = 1;
    document.getElementById('none-kana').style.display = "block";
  } else {
    document.getElementById('none-kana').style.display = "none";
  }

  // メールアドレスが入力されている確認する。
  if(!mail.match(/.+@.+\..+/)) {
    flag = 1;
    document.getElementById('none-email').style.display = "block";
  } else {
    document.getElementById('none-email').style.display = "none";
  }

  // 確認用メールアドレスが入力されているか確認する。
  if(!confmail.match(/.+@.+\..+/)) {
    flag = 1;
    document.getElementById('none-confir').style.display = "block";
  } else if (confmail === mail) {
    flag = 1;
    document.getElementById('match-email').style.display = "block";
  } else {
    document.getElementById('none-confi').style.display = "none";
    document.getElementById('match-email').style.display = "none";
  }

  // お問合せ項目が選択されているか確認する。
  if(item === 'contact0') {
    flag = 1;
    document.getElementById('none-item').style.display = "block";
  } else {
    document.getElementById('none-item').style.display = "none";
  }

  // お問合せ内容が正しく入力されているか確認する。
  if(!cont) {
    document.getElementById('none-contact').style.display = "block";
  } else if(cont.length <= 5) {
    document.getElementById('contact-length').style.display = "block";
  } else {
    document.getElementById('none-contact').style.display = "none";
    document.getElementById('contact-length').style.display = "none";
  }



})