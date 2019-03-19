module.exports = {
  run: function () {
    console.log('site by https://elwyn.co');
    // Disable console
    console.log = function () {};
  }
}