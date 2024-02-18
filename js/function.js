const allBtn = document.getElementsByClassName("set-btn");

let setSlect = 0;



for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        setSlect = setSlect + 1;

        console.log(e.target.parentNode.childNodes[3].innerText)


        setInerText('seatSlect', setSlect);


    }
    );
}

function setInerText(id, value) {


    document.getElementById(id).innerText = value;
}

