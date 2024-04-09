const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: () => {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену`);
        console.log(`На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal.bind(footballer);
const substitute = footballer.goToSubstitution.bind(footballer);

attack();
score('Сиииии');
substitute('Paulo Dibala');