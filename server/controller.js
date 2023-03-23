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
      
        // choose random fortune cookie
        let randomIndex = Math.floor(Math.random() * fortuneCookie.length);
        let randomFortuneCookie = fortuneCookie[randomIndex];
      
        res.status(200).send(randomFortuneCookie);
    },
    getLuckyCat: (req, res) => {
        const luckyCat = ["The Lucky Cat, or welcoming cat, also known as maneki-neko, is a symbol that originated in Japan.", "The idea is that the cat is welcoming and greeting you.", "This lucky cat symbol is considered good luck to place in your home, office, or business."];
      
        // get random lucky cat message
        let randomIndex = Math.floor(Math.random() * luckyCat.length);
        let randomLuckyCat = luckyCat[randomIndex];
      
        res.status(200).send(randomLuckyCat);
    },
    getImageButton: (req, res) => {
        const images = ["https://i.pinimg.com/736x/a4/ee/4b/a4ee4b8193f2584d4ead72321ee34660.jpg", "https://www.boredpanda.com/blog/wp-content/uploads/2022/05/cute-pictures-dog-spotting-cover_800.png", "https://paradepets.com/.image/t_share/MTkxMzY1Nzg4MTQzNzg5NjY2/sugar-glider.jpg", "https://i.pinimg.com/736x/2c/fd/61/2cfd61e322b534a1fc29d79bc423315b.jpg", "https://i.pinimg.com/736x/7a/69/47/7a6947aeefa55690922db12b71199000.jpg", "https://i.etsystatic.com/27637004/r/il/edbc79/4201903473/il_1080xN.4201903473_qge5.jpg" ];
  
        // get random image source
        let randomIndex = Math.floor(Math.random() * images.length);
        let randomImage = images[randomIndex];
          
        res.status(200).send(randomImage);
    }

}