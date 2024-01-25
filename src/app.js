const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];

// Player Class
class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.name = name;
    this.type = type;
    this.strength = this.getRandomStrength();
    this.image = 'images/super-' + (id + 1) + '.png';
  }
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    let divOfPlayer = document.createElement('div');
    divOfPlayer.classList.add('player');
    divOfPlayer.setAttribute('data-id', this.id);

    let image = document.createElement('img');
    image.src = this.image;

    let childDiv = document.createElement('div');
    childDiv.classList.add('name');
    childDiv.innerHTML = this.name;

    let Strengthdiv = document.createElement('div');
    Strengthdiv.classList.add('strength');
    Strengthdiv.innerHTML = this.strength;

    divOfPlayer.append(image, childDiv, Strengthdiv);

    return divOfPlayer;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((element, index) => {
      let type = index % 2 == 0 ? 'hero' : 'villan';
      return new Player(index, element, type);
    });
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}
