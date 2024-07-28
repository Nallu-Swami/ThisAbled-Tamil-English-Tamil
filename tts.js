const say = require('say');


say.speak('என்ன ஒரு நல்ல நாள்', 'Alex', 1.0, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Text has been spoken.');
});
