import { animate } from 'framer-motion';
import { animationDelay } from '../config/config';

let largerDimension = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
largerDimension += largerDimension * 0.25;

const preloader = document.createElement('div');
preloader.setAttribute('id', 'preloader');
preloader.style.width = `${largerDimension}px`;
preloader.style.height = `${largerDimension}px`;

const img = document.createElement('img');
img.setAttribute('src', '/images/loaderLogo.svg');

preloader.appendChild(img);

document.body.appendChild(preloader);

animate(preloader, { x: '-50%', y: '-50%' }, { duration: 0 });
animate(img, { scale: [1, 1.2, 1] }, { duration: 1.3, repeat: Infinity, ease: 'easeInOut' });

const fadeOutPreloader = async () => {
  await animate(img, { scale: 0.8, opacity: 0 }, { duration: 0.5 });
  await animate(preloader, { opacity: 0 }, { duration: 0.7 });
  preloader.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    fadeOutPreloader();
  }, animationDelay * 1000);
});
