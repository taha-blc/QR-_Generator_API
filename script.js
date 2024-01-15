let resimbox = document.getElementById("resimbox");
let qrResim = document.getElementById("qrResim");
let bilgi = document.getElementById("bilgi");
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('You cannot access the codes of the project this way :)')
});

function qryapici() {
    if (bilgi.value.length > 0) {
        qrResim.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + bilgi.value
        resimbox.style.display = "block"

    }
    else
        alert("Please enter a url !!")

}