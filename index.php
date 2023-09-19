<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <form method="GET" action="/itung.php" id="frm">
        <input type="text" id="a" value="22"/>
        <input type="text" id="b" value="7"/>
        <button type="submit">HITUNG</button>
    </form>

    <div class="result">
        <div> Bulat : <span id="bulat">0</span></div>
        <div> Sisa : <span id="pecahan">0</span></div>
        <div> iterasi ke- : <span id="iterasiKe">0</span></div>
        <div> 0 : <span id="nol">0</span></div>
        <div> 1 : <span id="satu">0</span></div>
        <div> 2 : <span id="dua">0</span></div>
        <div> 3 : <span id="tiga">0</span></div>
        <div> 4 : <span id="empat">0</span></div>
        <div> 5 : <span id="lima">0</span></div>
        <div> 6 : <span id="enam">0</span></div>
        <div> 7 : <span id="tujuh">0</span></div>
        <div> 8 : <span id="delapan">0</span></div>
        <div> 9 : <span id="sembilan">0</span></div>
    </div>

    <script src="fetch.js"></script>
</body>
</html>