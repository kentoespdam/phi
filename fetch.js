const API_URL = "http://localhost/phi/itung.php"
const frm = document.getElementById("frm")
const a = document.getElementById("a")
const b = document.getElementById("b")
const bulat = document.getElementById("bulat")
const pecahan = document.getElementById("pecahan")
const iterasiKe = document.getElementById("iterasiKe")
const nol = document.getElementById("iterasiKe")
const satu = document.getElementById("iterasiKe")
const dua = document.getElementById("iterasiKe")
const tiga = document.getElementById("iterasiKe")
const empat = document.getElementById("iterasiKe")
const lima = document.getElementById("iterasiKe")
const enam = document.getElementById("iterasiKe")
const tujuh = document.getElementById("iterasiKe")
const delapan = document.getElementById("iterasiKe")
const sembilan = document.getElementById("iterasiKe")

frm.addEventListener("submit", async (e) => {
    e.preventDefault()
    await fetchHitung(a.value, b.value)
})

async function fetchHitung(a, b) {
    let iterasi = iterasiKe.innerText
    iterasiKe.innerText = iterasi++
    console.log("fetch data...")
    const search = new URLSearchParams()
    search.append("a", a)
    search.append("b", b)
    const request = await fetch(`${API_URL}?${search.toString()}`)
    const json = await request.json();
    bulat.innerText = json.bagi
    pecahan.innerText = json.sisa
    console.log(json);
}