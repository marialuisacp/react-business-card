const data = [
  {
    letter: 'D',
    people: [{
      name: 'Danilo Rocha',
      office: 'Desenvolvedor',
      image: '/images/people/d01.jpg'
    }]
  },
  {
    letter: 'E',
    people: [{
      name: 'Eduardo Viana',
      office: 'UX Designer',
      image: '/images/people/e01.jpg'
    }]
  },
  {
    letter: 'G',
    people: [{
      name: 'Grabriela Duarte',
      office: 'UX Writer',
      image: '/images/people/g01.jpg'
    }]
  },
  {
    letter: 'J',
    people: [{
      name: 'Jorge Manuel',
      office: 'Fotógrafo',
      image: '/images/people/j01.jpg'
    },
    {
      name: 'Janaína Andrade',
      office: 'Desenvolvedora',
      image: '/images/people/j02.jpg'
    }]
  },
  {
    letter: 'L',
    people: [{
      name: 'Lucas Carmo',
      office: 'Líder técnico',
      image: '/images/people/l01.jpg'
    }]
  },
  {
    letter: 'P',
    people: [{
      name: 'Pâmela Carmen Lima',
      office: 'Auxiliar administrativo',
      image: '/images/people/p01.jpg'
    },
    {
      name: 'Pedro Souza Gomes',
      office: 'Auxiliar de qualidae',
      image: '/images/people/p02.jpg'
    }]
  }
];

export const copyObject = (obj) => JSON.parse(JSON.stringify(obj));

export const getNextLetter = (letter, direction) => {
  let result = letter;
  data.forEach((l, k) => {
    if (l.letter === letter) {
      if (direction === 1) {
        result = k !== (data.length - 1) ? data[k + 1].letter : data[0].letter;
      } else if (direction === -1) {
        result = k !== 0 ? data[k - 1].letter : data[(data.length - 1)].letter;
      }
    }
  })
  return result;
};

export const getDataByLetter = (letter) => (
  data.find((l) => l.letter === letter)
);

export const dataPeople = data;