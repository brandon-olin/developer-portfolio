import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-name', {
    strings: ["Hi there!^450\nI'm Brandon Olin,^450\nJavaScript Developer"],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };
