exports.get = (req, res) => {
  res.render('article', {
    headerFound: true, footerFound: true, style: ['article', 'header', 'footer', 'public'], title: 'Article', javascript: ['hamburger'],
  });
};