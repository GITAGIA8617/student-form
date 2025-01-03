let submitBtn = document.getElementById("submit");
submitBtn.addEventListener(('click'), () => {
    setData();
});


const getData = () => {
    let cardContainer = document.getElementById("cardContainer");
    let cards = '';
    let getItems = localStorage.getItem("infoSection");

    if (getItems === null) {
        return;
    }
    else {
       let cardDivArr = JSON.parse(getItems);
        cardDivArr.forEach((item, index) => {
            cards += `<div class="card">
            <img src=${item.url} alt="Profile Picture">
            <div class="info">
                <p><strong>Name</strong> : ${item.student_name}</p>
                <p><strong>Email</strong> : ${item.email}</p>
                <p><strong>Website</strong> : <a href="${item.website}">Click here</a></p>
                <p><strong>Gender</strong> : ${item.gender}</p>
                <p><strong>Skills</strong> : ${item.skillArr.join(", ")}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    cardContainer.innerHTML = cards;
}

getData();

const info = {
    student_name: '',
    email: '',
    url: '',
    website: '',
    gender: '',
    skillArr: [],
}

const setData = () => {
    info.student_name = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.url = document.getElementById('url').value;
    info.website = document.getElementById('website').value;
    info.gender = document.querySelector('input[name="male-female"]:checked').value;
    let skills = document.querySelectorAll('.checkbox:checked');

    info.skillArr = [];
    skills.forEach((item) => {
        info.skillArr.push(item.value);
    })

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    }
    else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}


const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}
