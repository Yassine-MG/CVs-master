let app = document.getElementById('app');
let progress = document.querySelector(".progress-bar")
let typewriter = new Typewriter(app, {
    loop: true
});
// import './node_modules/animejs/lib/anime.js'
typewriter.typeString('<strong>Web</strong>')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('<strong>Mobile</strong>')
    .pauseFor(2500)
    .deleteAll()
    .start();


     anime({
        targets: '.progress-bar',
        width: `100%`, // -> from '28px' to '100%',
        easing: 'easeInQuad',
        direction: 'alternate',
        loop: false
    });
    