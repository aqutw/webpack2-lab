import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

export default () => {
const image = document.createElement('img');
const r = Math.random();
image.src = r>0.5 ? big : small;
console.log(r, big, small);

document.body.appendChild(image);
};