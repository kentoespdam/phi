const BASE_URL = window.location.href;
const API_URL = `${BASE_URL}itung.php`;
const frm = document.getElementById("frm");
const a_textfield = document.getElementById("a_textfield");
const b_textfield = document.getElementById("b_textfield");
const bulat_view = document.getElementById("bulat_view");
const sisa_view = document.getElementById("sisa_view");
const iterasiKe_view = document.getElementById("iterasiKe_view");
const nol_view = document.getElementById("nol_view");
const satu_view = document.getElementById("satu_view");
const dua_view = document.getElementById("dua_view");
const tiga_view = document.getElementById("tiga_view");
const empat_view = document.getElementById("empat_view");
const lima_view = document.getElementById("lima_view");
const enam_view = document.getElementById("enam_view");
const tujuh_view = document.getElementById("tujuh_view");
const delapan_view = document.getElementById("delapan_view");
const sembilan_view = document.getElementById("sembilan_view");

frm.addEventListener("submit", async (e) => {
	e.preventDefault();
	// console.log(a_textfield.value);
	doHitung();
	// const result = await fetchHitung(a.value, b.value);
	// if (result.sisa < b) await hitungUlang(result, b);
});

function doHitung() {
	setTimeout(async () => {
		// get data from DB
		const oldData = getData();
		console.log(parseFloat(oldData.bulat), oldData.sisa);
		console.log(parseFloat(oldData.bulat) === 0 && oldData.sisa === 0);

		// check if end of iteration
		if (parseFloat(oldData.bulat) > 0 && parseInt(oldData.sisa) === 0)
			return;

		// resulting data
		let result;
		if (parseFloat(oldData.bulat) === 0 && oldData.sisa === 0)
			result = await fetchHitung(oldData.a_data, oldData.b_data);
		else result = await fetchHitung(oldData.sisa, oldData.b_data);
		doHitung();
	}, 500);
}

async function fetchHitung(a, b) {
	a = a < b ? a * 10 : a;
	console.log("fetch data...");
	const search = new URLSearchParams();
	search.append("a", a);
	search.append("b", b);
	const request = await fetch(`${API_URL}?${search.toString()}`);
	const json = await request.json();
	const oldData = getData();
	setData(oldData, json);

	return { ...json, iterasi: oldData.iterasi };
}

function getData() {
	const a_data = a_textfield.value;
	const b_data = b_textfield.value;
	const iterasi = iterasiKe_view.innerText;
	const bulat = bulat_view.value;
	const sisa = sisa_view.innerText;
	const nol = nol_view.innerText;
	const satu = satu_view.innerText;
	const dua = dua_view.innerText;
	const tiga = tiga_view.innerText;
	const empat = empat_view.innerText;
	const lima = lima_view.innerText;
	const enam = enam_view.innerText;
	const tujuh = tujuh_view.innerText;
	const delapan = delapan_view.innerText;
	const sembilan = sembilan_view.innerText;

	return {
		a_data: parseInt(a_data),
		b_data: parseInt(b_data),
		iterasi: parseInt(iterasi),
		bulat: bulat,
		sisa: parseInt(sisa),
		nol: parseInt(nol),
		satu: parseInt(satu),
		dua: parseInt(dua),
		tiga: parseInt(tiga),
		empat: parseInt(empat),
		lima: parseInt(lima),
		enam: parseInt(enam),
		tujuh: parseInt(tujuh),
		delapan: parseInt(delapan),
		sembilan: parseInt(sembilan),
	};
}

async function setData(oldData, data) {
	console.log(oldData);
	iterasiKe_view.innerText = oldData.iterasi + 1;
	bulat_view.innerText =
		oldData.iterasi === 0
			? `${data.bagi}.${data.sisa}`
			: `${oldData.bulat}${data.sisa}`;
	sisa_view.innerText = data.sisa;

	switch (data.sisa) {
		case 1:
			satu_view.innerText = oldData.satu + 1;
			break;
		case 2:
			dua_view.innerText = oldData.dua + 1;
			break;
		case 3:
			tiga_view.innerText = oldData.tiga + 1;
			break;
		case 4:
			empat_view.innerText = oldData.empat + 1;
			break;
		case 5:
			lima_view.innerText = oldData.lima + 1;
			break;
		case 6:
			enam_view.innerText = oldData.enam + 1;
			break;
		case 7:
			tujuh_view.innerText = oldData.tujuh + 1;
			break;
		case 8:
			delapan_view.innerText = oldData.delapan + 1;
			break;
		case 9:
			sembilan_view.innerText = oldData.sembilan + 1;
			break;
		default:
			nol_view.innerText = oldData.nol + 1;
			break;
	}
}
