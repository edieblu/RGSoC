function getShortMessages(messages){
  return messages
  .filter(stuff => {
    return stuff.message.length < 50
  })
  .map(stuff =>{
    return stuff.message;
  })
}

module.exports = getShortMessages

// var messages = [ { message: 'Dolor consectetur duis eu ea incididunt mollit ullamco occaecat dolor quis nulla veniam.' }, { message: 'Aute duis officia dolore labore laboris pariatur exercitation dolor ullamco voluptate anim cupidatat magna.' }, { message: 'Commodo minim sit velit aliqua aliquip.' }, { message: 'Labore sint nisi veniam aliquip ut Lorem cupidatat enim pariatur aute aliqua non occaecat mollit.' }, { message: 'Labore tempor amet Lorem qui ad aute ea qui ullamco.' }, { message: 'Nostrud cillum et voluptate proident pariatur laboris officia adipisicing reprehenderit ullamco proident dolor.' }, { message: 'Sint culpa laboris dolore esse ipsum eiusmod adipisicing nisi sit fugiat enim est laborum.' }, { message: 'Irure quis aute dolor non ut minim dolor qui ut do incididunt amet.' }, { message: 'Fugiat occaecat nisi nulla sint proident ea cupidatat non labore reprehenderit nisi est labore ex.' }, { message: 'Pariatur minim velit esse aliqua exercitation sint cillum proident deserunt mollit aute sit officia.' }, { message: 'Tempor excepteur tempor excepteur amet ex in proident irure veniam ipsum minim esse.' }, { message: 'Nulla duis non irure ad excepteur officia ipsum sunt mollit.' }, { message: 'Labore irure ad consectetur laborum aliqua irure ea labore pariatur ipsum laboris.' }, { message: 'Lorem commodo laborum ut aliquip eiusmod consectetur laborum.' }, { message: 'Ullamco culpa veniam aliqua elit adipisicing sint ipsum esse reprehenderit enim.' }, { message: 'Aute esse dolor exercitation laboris pariatur Lorem eu.' }, { message: 'Sit ipsum mollit ipsum minim aute commodo aliqua ullamco deserunt eiusmod sit ullamco pariatur.' }, { message: 'Esse adipisicing ex exercitation aliquip qui sint consectetur ut qui eu.' }, { message: 'Duis nulla laborum aliqua ea dolor duis Lorem magna minim veniam qui excepteur.' }, { message: 'Sint duis dolore enim in nulla.' }, { message: 'Fugiat nisi occaecat et voluptate enim ut irure fugiat pariatur mollit minim est reprehenderit.' }, { message: 'Laborum ullamco duis ex ut dolore labore voluptate aliqua.' }, { message: 'Aliqua officia cillum magna anim qui aliquip cupidatat occaecat consectetur esse dolore eu.' }, { message: 'Commodo anim tempor tempor elit aliqua nostrud laborum.' }, { message: 'Laborum anim aute cillum sunt qui quis in sit eu in occaecat minim sint.' } ]
// solution:   [ 'Commodo minim sit velit aliqua aliquip.', 'Sint duis dolore enim in nulla.' ];

// console.log(messages[0].message.length)