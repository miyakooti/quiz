const url = location.href;
if (url.endsWith('index.html') ) {//別に意味はないけど。これで分岐できるよって話







  const quiz = [
    {
      question: "世界で一番長い川は？",
      answers: ["ナイル川", "ライン川", "ドナウ川", "アマゾン川"],
      correct: "ナイル川"
    },
    {
      question: "ファイナルファンタジーⅦの主人公の名前は？",
      answers: [
        "クラウド"
        , "セシル"
        , "ライトニング"
        , "ティーダ"
      ],
      correct: "クラウド",
    },
    {
      question: "通常国会の会期は次のうちどれ？",
      answers: [
        "100日"
        , "120日"
        , "150日"
        , "200日"
      ],
      correct: "150日"
    }
  ];


  // 変数定義↓
  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;
  const $button = document.getElementsByTagName('button');//https://prnt.sc/tw9lhi 外に出さないとだめぽ
  const $quiz = document.getElementById('js-question');
  //このgetElementしたこれがもうプロパティの一種。
  //これがまんまhtmlと対応していると考えていい。くそ便利。
  //htmlのオブジェクトが入っているときは、ドルマークをつける！
  const buttonLength = $button.length;
  //変数定義↑

  const setupQuiz = () => {
    $button.textContent = quiz[quizIndex].question;//ボタンタグのプロパティをhtmlからとってきて、、、
    $quiz.textContent = quiz[quizIndex].question;
    for (var i = 0; i < quiz[quizIndex].answers.length; i++) {
      $button[i].textContent = quiz[quizIndex].answers[i];//その中に選択肢を代入していく
    }
  }

  //選択肢をクリックしたときの動作
  const clickHandler = (e) => {
    if (e.target.textContent === quiz[quizIndex].correct) {
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解');
    }
    quizIndex++;

    if (quizIndex < quizLength) {
      setupQuiz();
    } else {
      alert('終了しました！あなたの点数は、'+score+"/"+quizLength+"です！");
      location.href = "start.html"
    }
  }

  //ここからは、実際の実行

  //初回のクイズセットアップ
  setupQuiz();

  //eはeventのオブジェクト、、へぇー
  for (var i = 0; i < quiz[quizIndex].answers.length; i++) {
    $button[i].addEventListener('click', (e) => {
      clickHandler(e);//ボタンをクリックしたときの動作！
    });
  }
}
if (url.endsWith('end.html') ) {
  document.getElementById('result').textContent = score+"/"+quizLength;
}
