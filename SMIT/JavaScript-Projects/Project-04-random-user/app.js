const userCountry = document.querySelector("#userCountry")
const userEmail = document.querySelector("#userEmail")
const userName = document.querySelector("#userName")
const userImg = document.querySelector("#userImg")
const btn = document.querySelector("#btn")
const statusText = document.querySelector("#statusText")


async function getRandomUser() {
    try {
        statusText.innerText = "Loading user...";
        btn.disabled = true;

        const resp = await fetch("https://randomuser.me/api/")
        if (!resp.ok) {
            throw new Error("Failed to fetch data")
        }

        const data = await resp.json();

        const user = data.results[0]

        userImg.src = user.picture.large;
        userName.innerText = `${user.name.first} ${user.name.last}`;
        userEmail.innerText = user.email;
        userCountry.innerText = user.location.country;

        statusText.innerText = "User loaded successfully!";
        btn.disabled = false;
    }
    catch (error) {
        btn.disabled = false;
        statusText.innerText = "Something Went Wrong"
        console.log(error);
    }
}

btn.addEventListener("click", getRandomUser)

getRandomUser()