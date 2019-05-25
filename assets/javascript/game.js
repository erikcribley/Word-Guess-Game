var words = [
    "bard", 
    "barbarian",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "wizard",
    "warlock",]

function randomWord () {
    return words[Math.floor(Math.random() * words.length)];
}


