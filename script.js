// Define an array of fortunes
const fortunes = [
    "A dubious friend may be an enemy in camouflage.",
    "A feather in the hand is better than a bird in the air.",
    "A fresh start will put you on your way.",
    "Your future holds… another trip to the fridge.",
    "A gambler not only will lose what he has, but also will lose what he doesn't have.",
    "You should be able to undertake and complete anything.",
    "A routine task will turn into an enchanting adventure.",
    "It does not do to dwell on dreams and forget to live.",
    "Don't hold onto things that require a tight grip.",
    "Every new beginning comes from some other beginning's end.",
    "One person alone is not a full person ; we exist in relation to others.",
    "Only the good die young ; may you have a long life.",
    "The fortune you are now reading is nonsense.",
    "You will be rich and successful in Monopoly.",
    "If you never did believe in miracles, don't you have a feeling it's time to try?",
    "I think it's going to rain.",
    "You will have a good day... unless you make bad choices." ,
    "The best way to predict your future is to nap and hope for the best.",
    "You will find the missing sock in the last place you look, as it always is",
    "This Saturday, you will sleep in until noon, order a delivery pizza, and binge-watch 90's movies all day.",
    "While reading this, the entire universe was replaced by a joke. DO NOT BE DECEIVED!",
    "The truth is not what you think it is and neither is this fortune cookie.",
    "Money is not the root of all evil, the love of money is.",
    "You will attract cultured and artistic people to your home.",
    "You will be hungry again in one hour.",
    "The love of your life is stepping into your planet this summer.",
    "Hard work pays off in the future, laziness pays off now.",
    "Your shoes will make you happy today.",
    "If winter comes, can spring be far behind?",
    "Actions speak louder than fortune cookies.",
    "Everyone agrees. You are the best.",
    "You will soon receive a text from someone unexpected… probably a scammer.",
    "You are one good decision away from a nap." 
  ];
  
  // Function to generate a random fortune
  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
  }
  
  // Display a random fortune when the extension is opened
  document.addEventListener('DOMContentLoaded', function() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.textContent = getRandomFortune();
  });
  