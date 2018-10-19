function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

angular.module("app", [])
    .controller("mainCtrl", mainCtrl)

    function mainCtrl($scope)
    {
        var PokemonList = [];
        PokemonList.push({name: 'Venasaur', HP: 187, Attack: 147, Defense: 148, SpAttack: 167, SpDefense: 167, Speed: 145});
        PokemonList.push({name: 'Charizard', HP: 185, Attack: 149, Defense: 143, SpAttack: 177, SpDefense: 150, Speed: 167});
        PokemonList.push({name: 'Blastoise', HP: 186, Attack: 148, Defense: 167, SpAttack: 150, SpDefense: 172, Speed: 143});
        
        var allMoves = 
        [
            { name: 'Take Down',      power: 90,  accuracy: 0.85, type: 'normal', category: 'physical', recoil: 0.25, heals: 0    },
            { name: 'Tackle',         power: 40,  accuracy: 1,    type: 'normal', category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Razor Leaf',     power: 55,  accuracy: 0.95, type: 'grass',  category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Petal Blizzard', power: 90,  accuracy: 1,    type: 'grass',  category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Round',          power: 60,  accuracy: 1,    type: 'normal', category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Sludge Bomb',    power: 90,  accuracy: 1,    type: 'poison', category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Earthquake',     power: 100, accuracy: 1,    type: 'ground', category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Giga Drain',     power: 75,  accuracy: 1,    type: 'grass',  category: 'special',  recoil: 0,    heals: 0.50 },
            { name: 'Scratch',        power: 40,  accuracy: 1,    type: 'normal', category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Ember',          power: 40,  accuracy: 1,    type: 'fire',   category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Fire Fang',      power: 65,  accuracy: 0.95, type: 'fire',   category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Slash',          power: 70,  accuracy: 1,    type: 'normal', category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Flamethrower',   power: 90,  accuracy: 1,    type: 'fire',   category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Air Cutter',     power: 60,  accuracy: 0.95, type: 'flying', category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Dragon Pulse',   power: 85,  accuracy: 1,    type: 'dragon', category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Iron Tail',      power: 100, accuracy: 0.75, type: 'steel',  category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Water Gun',      power: 40,  accuracy: 1,    type: 'water',  category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Water Pulse',    power: 60,  accuracy: 1,    type: 'water',  category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Bite',           power: 60,  accuracy: 1,    type: 'dark',   category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Aqua Tail',      power: 90,  accuracy: 0.90, type: 'water',  category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Ice Beam',       power: 90,  accuracy: 1,    type: 'ice',    category: 'special',  recoil: 0,    heals: 0    },
            { name: 'Zen Headbutt',   power: 80,  accuracy: 0.90, type: 'psychic',category: 'physical', recoil: 0,    heals: 0    },
            { name: 'Iron Tail',      power: 100, accuracy: 0.75, type: 'steel',  category: 'physical', recoil: 0,    heals: 0    },
            //{ name: '',     power: 0,  accuracy: 1,    type: '',  category: '',  recoil: 0,    heals: 0    },
            
        ];
    $scope.moves = [];
    $scope.setMon = function(selected) {
        $scope.pokemonSelected.move1 = null;
        $scope.pokemonSelected.move2 = null;
        $scope.pokemonSelected.move3 = null;
        $scope.pokemonSelected.move4 = null;
        if (selected == 'Venasaur')
        {
            $scope.moves = ['Tackle', 'Take Down', 'Razor Leaf', 'Petal Blizzard', 'Round', 'Sludge Bomb', 
                            'Earthquake', 'Giga Drain'];
        }
        else if (selected == 'Charizard')
        {
            $scope.moves = ['Scratch', 'Ember', 'Fire Fang', 'Slash', 'Flamethrower', 'Air Cutter', 'Dragon Pulse', 'Iron Tail'];
        }
        else if (selected == 'Blastoise')
        {
            $scope.moves = ['Tackle', 'Water Gun', 'Water Pulse', 'Bite', 'Aqua Tail', 'Ice Beam', 'Zen Headbutt', 'Iron Tail'];
        }
        else { $scope.moves = ['How did you even select this?']; }
    };
    $scope.selectorIsHidden = false;
    $scope.battleIsHidden = true;

    var UsersPokemon;
    var OpposingPokemon;
    $scope.startBattle = function(pokemonSelected) 
    {
        var userMoves = [];
        var movesAreValid = false;
            userMoves.push(pokemonSelected.move1);
            userMoves.push(pokemonSelected.move2);
            userMoves.push(pokemonSelected.move3);
            userMoves.push(pokemonSelected.move4);
            for (var i = 0; i < 4; ++i)
            {
                if (userMoves[i] == null) 
                {
                    alert("You must select all 4 moves!"); 
                    break;
                }
                for (var j = i + 1; j < 4; ++j)
                {
                    if (userMoves[i] == userMoves[j]) 
                    {
                         alert("You cannot select the same move more than once!"); 
                         i = 4;
                         break; 
                    }
                }
                if (i == 3) { movesAreValid = true; }
            }
            if(movesAreValid)
            {
                var l = PokemonList.length;
                
                for(var i = 0; i < PokemonList.length; ++i)
                {
                    if(pokemonSelected.name == PokemonList[i].name) { UsersPokemon = PokemonList[i]; }
                    console.log(PokemonList[i].name);
                }
                $scope.pokemonSelected.userHP = UsersPokemon.HP;
                if (pokemonSelected.name == 'Venasaur') { $scope.userPokemonSprite = 'images/Venasaur_back.png'; }
                else if (pokemonSelected.name == 'Charizard') { $scope.userPokemonSprite = 'images/Charizard_back.png'; }
                else { $scope.userPokemonSprite = 'images/Blastoise_back.png'; }

                var opposingPoke = getRandInt(1, 3);
                if (opposingPoke == 1) 
                {
                    $scope.opponentPokemonSprite = 'images/Venasaur_front.png'; 
                    OpposingPokemon = PokemonList[opposingPoke - 1];
                }
                else if (opposingPoke == 2) 
                {
                    $scope.opponentPokemonSprite = 'images/Charizard_front.png';
                    OpposingPokemon = PokemonList[opposingPoke - 1];
                }
                else 
                {
                    $scope.opponentPokemonSprite = 'images/Blastoise_front.png';
                    OpposingPokemon = PokemonList[2];
                }
                $scope.pokemonSelected.opponentHP = OpposingPokemon.HP;

                $scope.selectorIsHidden = true;
                $scope.battleIsHidden = false;
            }
            
        };
}
