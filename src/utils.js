const data = [
  {
    letter: 'D',
    people: [{
      name: 'Danilo Rocha',
      office: 'Desenvolvedor',
      image: './assets/images/people/d01.jpg',
      email: 'danilo.rocha@mundiale.com'
    }]
  },
  {
    letter: 'E',
    people: [{
      name: 'Eduardo Viana',
      office: 'UX Designer',
      image: './assets/images/people/e01.jpg',
      email: 'eduardo.viana@mundiale.com'
    }]
  },
  {
    letter: 'G',
    people: [{
      name: 'Grabriela Duarte',
      office: 'UX Writer',
      image: './assets/images/people/g01.jpg',
      email: 'gabriela.duarte@mundiale.com'
    }]
  },
  {
    letter: 'J',
    people: [{
      name: 'Jorge Manuel',
      office: 'Fotógrafo',
      image: './assets/images/people/j01.jpg',
      email: 'jorge.manuel@mundiale.com'
    },
    {
      name: 'Janaína Andrade',
      office: 'Desenvolvedora',
      image: './assets/images/people/j02.jpg',
      email: 'jana.andrade@mundiale.com'
    }]
  },
  {
    letter: 'L',
    people: [{
      name: 'Lucas Carmo',
      office: 'Líder técnico',
      image: './assets/images/people/l01.jpg',
      email: 'lucas.carmo@mundiale.com'
    }]
  },
  {
    letter: 'P',
    people: [{
      name: 'Pâmela Carmen Lima',
      office: 'Auxiliar administrativo',
      image: './assets/images/people/p01.jpg',
      email: 'pamela.lima@mundiale.com'
    },
    {
      name: 'Pedro Souza Gomes',
      office: 'Auxiliar de qualidae',
      image: './assets/images/people/p02.jpg',
      email: 'pedro.souza@mundiale.com'
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