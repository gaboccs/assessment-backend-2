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



document.getElementById("getImageButton").addEventListener("click", getImageButton);
function getImageButton() {
    let randomImage
        axios.get("http://localhost:4000/api/randomImage")
        .then(res => {
            document.getElementById("randomImageDisplay").setAttribute("src", res.data);
        });
    
        // set src attribute of img tag to random image source
    }

  function handleSubmit(event) {
    const value = document.getElementById('emoSelect').value
    if(value === 'Happy') getCompliment()
    if(value === 'Motivated') getFortuneCookie()
    if(value === 'Overwhelmed') getImageButton()
    if(value === 'Sad') Sad()
    console.log(value)

    event.preventDefault();
  }
  
  document.getElementById("emoForm").addEventListener("submit", handleSubmit)