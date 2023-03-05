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