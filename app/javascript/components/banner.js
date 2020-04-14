import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-name', {
    strings: ["Hi there!^600\nI'm Brandon Olin,^600\nRuby on Rails Developer"],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };
