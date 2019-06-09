
// レスポンシブデザイン ドロワーがタップされたらメニューを表示する
const menuOpen = document.getElementById('resp-menu-open');
const menuClose = document.getElementById('resp-menu-close');

menuOpen.addEventListener('click', function(){
  document.getElementById('resp-menu-close').classList.add('resp-menu-slide');
  document.getElementById('resp-nav').classList.add('resp-menu-slide');
})

menuClose.addEventListener('click', function(){
  document.getElementById('resp-menu-close').classList.remove('resp-menu-slide');
  document.getElementById('resp-nav').classList.remove('resp-menu-slide');
})


// フォームで指定の文字・数値が入力されているか判断する。
const contactSubmit = document.getElementById('contact-submit');

contactSubmit.addEventListener('click', function(submitStop){
  let flag = 0;
  const name = document.getElementById('contact-name').value;
  const kananame = document.getElementById('contact-kananame').value;
  const mail = document.getElementById('contact-mail').value;
  const item = document.getElementById('contact-item').value;
  const cont = document.getElementById('contact-cont').value;

  // 名前が入力されているか確認する。
  if(!name) {
    flag = 1;
    document.getElementById('none-name').style.display = 'block';
  } else {
    document.getElementById('none-name').style.display = 'none';
  }

  // フリガナが入力されているか確認する。
  if(!kananame){
    flag = 1;
    document.getElementById('notin-kana').style.display = 'block';
  } else if(!(kananame.match(/^[ァ-ヶー　]*$/))) {
    flag = 1;
    document.getElementById('none-kana').style.display = 'block';
  } else {
    document.getElementById('none-kana').style.display = 'none';
    document.getElementById('notin-kana').style.display = 'none';
  }

  // メールアドレスが入力されている確認する。
  if(!mail.match(/.+@.+\..+/)) {
    flag = 1;
    document.getElementById('none-email').style.display = 'block';
  } else {
    document.getElementById('none-email').style.display = 'none';
  }

  // お問合せ項目が選択されているか確認する。
  if(item === 'contact0') {
    flag = 1;
    document.getElementById('none-item').style.display = 'block';
  } else {
    document.getElementById('none-item').style.display = 'none';
  }

  // お問合せ内容が正しく入力されているか確認する。
  if(!cont) {
    flag = 1;
    document.getElementById('none-contact').style.display = 'block';
  } else if(cont.length <= 5) {
    flag = 1;
    document.getElementById('contact-length').style.display = 'block';
  } else {
    document.getElementById('none-contact').style.display = 'none';
    document.getElementById('contact-length').style.display = 'none';
  }

  // flagの値が1なら送信を実行しない。
  if (flag === 1) {
    submitStop.preventDefault();
  } else {
    return true;
  }

})

// お問合せフォームのリセットボタンが押下されたら、入力必須部分の警告文も非表示する。
const contactReset = document.getElementById('contact-reset');
contactReset.addEventListener('click', function(){
  document.getElementById('none-name').style.display = 'none';
  document.getElementById('notin-kana').style.display = 'none';
  document.getElementById('none-kana').style.display = 'none';
  document.getElementById('none-email').style.display = 'none';
  document.getElementById('none-item').style.display = 'none';
  document.getElementById('none-contact').style.display = 'none';
  document.getElementById('contact-length').style.display = 'none';
})

