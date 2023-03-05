module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortuneCookie: (req, res) => {
        const fortuneCookie = ["All your hard work will soon pay off.", "Allow compassion to guide your decisions.", "An inch of time is an inch of gold.", "Believe it can be done.", "Carve your name on your heart and not on marble."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortuneCookie.length);
        let randomFortuneCookie = fortuneCookie[randomIndex];
      
        res.status(200).send(randomFortuneCookie);
    }

}