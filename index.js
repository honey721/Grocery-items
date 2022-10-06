
function deleteitem(id) {

    x = confirm("DELETE this element!");
    if (x === false) {

    }
    else {


        n_array = JSON.parse(localStorage.getItem("name"))
        a_array = JSON.parse(localStorage.getItem("amount"))
        p_array = JSON.parse(localStorage.getItem("price"))

        n_array.splice(id, 1)
        a_array.splice(id, 1)
        p_array.splice(id, 1)

        localStorage.setItem("name", JSON.stringify(n_array));
        localStorage.setItem("amount", JSON.stringify(a_array));
        localStorage.setItem("price", JSON.stringify(p_array));

        foo();
    }
}



function foo() {
    html_content = ''
    sum = 0;
    
    if ((localStorage.getItem("name") == null && localStorage.getItem("price") ==
        null && localStorage.getItem("amount") == null) || localStorage.getItem("name") == '[]' && localStorage.getItem("price") == '[]' && localStorage.getItem("amount") == '[]') {
        $('#itemlist').html(`<div class="alert alert-primary" role="alert">
            Just Add your Grocery items!
          </div>`);

        // s_array = []
        n_array = []
        a_array = []
        p_array = []
    }
    else {
   
        // s_array = JSON.parse(localStorage.getItem("sno"))
        n_array = JSON.parse(localStorage.getItem("name"))
        a_array = JSON.parse(localStorage.getItem("amount"))
        p_array = JSON.parse(localStorage.getItem("price"))
        v = 1;
        for (const index in n_array) {

            html_content += `<div  id = "${index}" onclick="deleteitem(this.id)" class="item">

            <div class="s">${v}</div>
            <div class="n">${n_array[index]}</div>
            <div class="a">${a_array[index]}</div>
            <div class="p">${p_array[index]}</div>
        </div>`
            sum += p_array[index];
            v += 1;

        }
        $('#itemlist').html(html_content);



    }
    $('#total').html(sum);


}


$('#add').click(function (e) {

    Name = $('#name').val();
    amount = $('#amount').val();
    price = parseInt($('#price').val());


    // 

    // sno = localStorage.getItem("sno")
    names = localStorage.getItem("name")
    amounts = localStorage.getItem("amount")
    prices = localStorage.getItem("price")

    if (Name != '' && amount != '' && price != '' && typeof price != "string") {

        if (names == null && amounts == null && prices == null) {
            // sno_array = []
            name_array = []
            amount_array = []
            price_array = []

        }
        else if (names != null && amounts != null && prices != null) {
            // sno_array = JSON.parse(sno);
            name_array = JSON.parse(names);
            amount_array = JSON.parse(amounts);
            price_array = JSON.parse(prices);

        }


        name_array.push(Name);
        amount_array.push(amount);
        price_array.push(price);

        // localStorage.setItem("sno", JSON.stringify(sno_array));
        localStorage.setItem("name", JSON.stringify(name_array));
        localStorage.setItem("amount", JSON.stringify(amount_array));
        localStorage.setItem("price", JSON.stringify(price_array));
        foo();
    }


    else {
        alert("Oops! input is not given")
    }

    $('#name').val('');
    $('#amount').val('');
    $('#price').val('');
})