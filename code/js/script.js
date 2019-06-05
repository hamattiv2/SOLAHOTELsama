
// スライドショー
const slideshow = [
  "./img/slide1.jpg",
  "./img/slide2.jpg",
  "./img/slide3.jpg",
  "./img/slide4.jpg",
  "./img/slide5.jpg"
];

let fade = 2;
let slideNo = 0;
let test = 0;

function slider(){
  if (fade === 0) {
    document.getElementById('slide2').src = slideshow[slideNo];
    document.getElementById('slide2').className = 'fadein';
    document.getElementById('slide1').className = 'fadeout';
  } else {
    document.getElementById('slide1').src = slideshow[slideNo];
    document.getElementById('slide1').className = 'fadein';
    document.getElementById('slide2').className = 'fadeout';
  }

  if (fade === 0) {
    fade = 1;
  } else {
    fade = 0;
  }

  if (slideNo < 4) {
    slideNo++;
  } else {
    slideNo = 0;
  }

  test = setTimeout(slider,4000); 
  console.log(slideNo);
}

slider()


// フォームで指定の文字・数値が入力されているか判断する。
// flagは送信判定に利用します。
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
    flag = 1;
    document.getElementById('none-contact').style.display = "block";
  } else if(cont.length <= 5) {
    flag = 1;
    document.getElementById('contact-length').style.display = "block";
  } else {
    document.getElementById('none-contact').style.display = "none";
    document.getElementById('contact-length').style.display = "none";
  }



})