import Player from './player/lib.js';

new Player({
  target: '.my-player',
  delayPerSlide: 5,
  slides: [
    {
      url: 'img/chunk1.jpg',
      alt: 'Happy Dog1',
      overlays: [
        {
          type: 'Text',
          text: 'Привет',
          styles: {
            color: 'orange',
            'font-size': '60px',
            'text-shadow': '1px 1px #000',
            top: '60%',
            left: '30%',
            transform: 'rotate(-30deg)',
            animation: 'scale 2s infinite ease-in-out',
          },
        },
        {
          type: 'Text',
          text: 'мир',
          styles: {
            color: 'orange',
            'font-size': '30px',
            'text-shadow': '1px 1px #000',
            bottom: '10%',
            right: '30%',
            transform: 'rotate(90deg)',
            animation: 'scale 6s infinite ease-in-out',
          },
        },
      ],
    },
    {
      url: 'img/chunk2.jpg',
      alt: 'Happy Dog2',
      filter: ['contrast(150%)', 'blur(5px)'],
      overlays: [
        {
          type: 'Text',
          text: 'Собака - лучший друг человека!',
          classes: ['watercolor'],
          styles: {
            'font-size': '40px',
            top: '60%',
            left: '10%',
          },
        },
        {
          type: 'Question',
          question: 'Вы со мной согласны?',
          variants: ['Да', 'Нет'],
          styles: {
            top: '80%',
            left: '25%',
          },
        },
      ],
    },
    {
      url: 'img/chunk3.jpg',
      alt: 'Happy Dog3',
      overlays: [
        {
          type: 'Text',
          text: 'Миру - мир! Любовь и радуга!',
          classes: ['watercolor'],
          styles: {
            top: '50%',
            left: '10%',
          },
        },
      ],
    },
    {
      url: 'img/chunk4.jpg',
      alt: 'Happy Dog4',
      overlays: [
        {
          type: 'Text',
          text: 'Пейте чистую воду!',
          classes: ['watercolor'],
          styles: {
            'font-size': '20px',
            top: '30%',
            left: '20%',
          },
        },
      ],
    },
  ],
});
