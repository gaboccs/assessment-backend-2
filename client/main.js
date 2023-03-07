const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneCookieBtn = document.getElementById("fortuneCookieBtn")

const getFortuneCookie = () => {
    axios.get("http://localhost:4000/api/fortuneCookie/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneCookieBtn.addEventListener('click', getFortuneCookie)

const luckyCatBtn = document.getElementById("luckyCatBtn")

const getLuckyCat = () => {
    axios.get("http://localhost:4000/api/luckyCat/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

luckyCatBtn.addEventListener('click', getLuckyCat)







document.getElementById("getImageButton").addEventListener("click", function() {
    const images = ["https://i.pinimg.com/736x/a4/ee/4b/a4ee4b8193f2584d4ead72321ee34660.jpg", "https://www.boredpanda.com/blog/wp-content/uploads/2022/05/cute-pictures-dog-spotting-cover_800.png", "https://paradepets.com/.image/t_share/MTkxMzY1Nzg4MTQzNzg5NjY2/sugar-glider.jpg", "https://i.pinimg.com/736x/2c/fd/61/2cfd61e322b534a1fc29d79bc423315b.jpg", "https://i.pinimg.com/736x/7a/69/47/7a6947aeefa55690922db12b71199000.jpg", "https://i.etsystatic.com/27637004/r/il/edbc79/4201903473/il_1080xN.4201903473_qge5.jpg" ];
  
    // get random image source
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
  
    // set src attribute of img tag to random image source
    document.getElementById("randomImageDisplay").setAttribute("src", randomImage);
  });
  