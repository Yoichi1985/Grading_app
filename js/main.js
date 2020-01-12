'use strict'
{
  window.onload = () => {
    const video = document.querySelector("#camera");
    const canvas = document.querySelector("#picture");
    const se = document.querySelector('#se');

    const constraints = {
      audio: false,
      video: {
        width: 300,
        height: 200,
        facingMode: "user"
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
          video.play();
        };
      })
      .catch((err) => {
        console.log(err.name + ": " + err.message);
      });

    document.querySelector("#shutter").addEventListener("click", () => {
      const ctx = canvas.getContext("2d");
      video.pause();
      se.play();
    });
  };

  var huga = 10;
  var num = Math.floor(Math.random() * 100);

  $('#shutter').on('click', function () {
    $('#shutter').prop('disabled', true);
    var hoge = setInterval(function () {
      $('#load').html("診断結果まで、あと...." + "<br>" + huga + "秒");
      huga--;
      if (huga == -1) {
        clearInterval(hoge);
        $('#load').html("あなたの顔は");
        $('#result').html(num + "点");
      }
    }, 500);
  });
}