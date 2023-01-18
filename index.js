initPlayer({
  target: '.my-player',
  slides: [
    {
      url: 'img/chunk1.jpg',
      alt: 'Happy Dog1',
      overlays: [
        {
          type: 'text',
          value: 'Привет',
          styles: {
            color: 'orange',
            'font-size': '60px',
            'text-shadow': '1px 1px #000',
            top: '60%',
            left: '30%',
            transform: 'rotate(-30deg)',
            animation: 'scale 2s infinite ease-in-out'
          }
        },
        {
          type: 'text',
          value: 'мир',
          styles: {
            color: 'orange',
            'font-size': '30px',
            'text-shadow': '1px 1px #000',
            bottom: '10%',
            right: '30%',
            transform: 'rotate(90deg)',
            animation: 'scale 6s infinite ease-in-out'
          }
        }
      ]

    },
    {
      url: 'img/chunk2.jpg',
      alt: 'Happy Dog2',
      filter: ['contrast(150%)', 'blur(5px)'],
      overlays: [
        {
          type: 'text',
          value: 'Собака - лучший друг человека!',
          classes: ['watercolor'],
          styles: {
            'font-size': '40px',
            top: '60%',
            left: '10%',
          }
        },
        {
          type: 'question',
          question: 'Вы со мной согласны?',
          variants: ['Да', 'Нет'],
          styles: {
            top: '80%',
            left: '25%',
          }
        }
      ]
    },
    {
      url: 'img/chunk3.jpg',
      alt: 'Happy Dog3'
    },
    {
      url: 'img/chunk4.jpg',
      alt: 'Happy Dog4'
    }
  ],
  delayPerSlide: 5
})
