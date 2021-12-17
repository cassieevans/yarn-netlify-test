import gsap from 'gsap';
// import any plugin! Including the Club GreenSock plugins
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

let mySplitText = new SplitText('#split', { type: 'words,chars' }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set('#split', { perspective: 400, opacity: 1 });

gsap.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: '0% 50% -50',
  ease: 'back',
  stagger: 0.02,
  delay: 0.3,
});
