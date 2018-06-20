var mail = require('./')
  // private
var gulp = require('gulp')

var mail = require('gulp-mail');

var smtpInfo = {
  auth: {
    user: 'ryan@hotcoffey.com',
    pass: 'Swingline'
  },
  host: 'server.hotcoffeydesign.com',
  secureConnection: true,
  port: 465
};

gulp.task('mail', function () {
  return gulp.src('./test/drip.html')
    .pipe(mail({
      subject: 'Surprise!?',
      to: [
        'ryan@hotcoffeydesign.com'
      ],
      from: 'ryan@hotcoffey.com',
      smtp: smtpInfo
    }));
});


gulp.task('test', function(){
  // send mail
  return gulp.src([
      './test/drip.html',
      './test/1.html',
      './test/2.html'
    ])
    .pipe(mail({
      to: mailInfo.to,
      from: mailInfo.from,
      smtp: mailInfo.smtp
    }))
  // blocked after sending
  // becase transporter remained working
})
