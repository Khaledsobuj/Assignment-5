const allBtn = document.getElementsByClassName('button');
for (const bUtn of allBtn) {
    bUtn.addEventListener("click", function (event) {

        const setNo = event.target.innerText;
        const setClass = 'Economy'
        const setPrice = 550;

        const seltectedAppentContainer = document.getElementById('appentAmount');


        event.target.setAttribute("disabled", false);

        event.target.style.backgroundColor = "green";
        event.target.style.color = "#fff";
        // =====================
        const firstSetCount = getConvertedValue('seatSlect');
        if (firstSetCount + 1 > 4) {
            alert("limit close")
            return;
        }

        const setcountLeft = getConvertedValue('seatsNumber');
        if (setcountLeft - 1 < 0) {
            alert("limit close")
            return;
        }




        // update Seats left

        const setCoutn = getConvertedValue('seatSlect');
        document.getElementById('seatSlect').innerText =
            setCoutn + 1;

        const seatscountLeft = getConvertedValue('seatsNumber');
        document.getElementById('seatsNumber').innerText =
            seatscountLeft - 1;

        // update Seats left






        const div = document.createElement("div");
        div.classList.add('flex')
        div.classList.add('justify-around')

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = setNo;
        p2.innerText = setClass;
        p3.innerText = setPrice;
        // appendChild in div 
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seltectedAppentContainer.appendChild(div);
        updateTotalCost(setPrice);
        updateGrandTotal();


    })
}



function updateTotalCost(value) {

    const totalCost = getConvertedValue("totalPrice");
    const sum = totalCost + value;
    document.getElementById('totalPrice').innerText = sum;


}



function updateGrandTotal(status) {
    const totalCost = getConvertedValue("totalPrice");
    if (status == undefined) {

        document.getElementById('grandTotal').innerText = totalCost
    }
    else {
        const couponCode = document.getElementById('copuopnCode').value;


        if (couponCode == "NEW15") {
            const discountPrice = totalCost * 0.15;
            document.getElementById('grandTotal').innerText = totalCost - discountPrice;
        }
        else if (couponCode == "Couple") {
            const discountPrice = totalCost * 0.20;
            document.getElementById('grandTotal').innerText = totalCost - discountPrice;
        }
        else {
            alert('Please enter valid coupon code');
        }
    }

    // applyBtn

}




function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}