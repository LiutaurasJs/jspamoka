
function greetings() {
    document.querySelector('.screen').style = ""
    document.querySelector('.screen').style.display = 'flex'
    document.querySelector('.screen').style.backgroundColor = 'red';
    document.querySelector('.screen').style.alignItems = 'center';
    document.querySelector('.screen').style.justifyContent = 'center';
    document.querySelector('.screen').innerHTML = `<span class="greets">Labas</span>`;
}

function video() {
    document.querySelector('.screen').style = ""
    document.querySelector('.screen').innerHTML = `<span><iframe width="100%" height="100%" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>`;
}

const games = [
    {
        nuotrauka: `<img src="/img/Forza5.jpg">`,
        pavadinimas: "Forza Horizon 5",
        kaina: "59.99€"
    },
    {
        nuotrauka: `<img src="/img/nba.jpg">`,
        pavadinimas: "NBA2k23",
        kaina: "17.99€"
    },
    {
        nuotrauka: `<img src="/img/rust.png">`,
        pavadinimas: "Rust",
        kaina: "39.99€"
    },
    {
        nuotrauka: `<img src="/img/terraria.jpg">`,
        pavadinimas: "Terraria",
        kaina: "9.99€"
    },
]

const rodytiProduktus = () => {
    document.querySelector('.screen').style = ""
    
    document.querySelector('.screen').innerHTML = `
    <span>
    <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Pavadinimas</th>
                            <th>Kaina</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
    </span>`
    document.querySelector('tbody').innerHTML = '';

    games.forEach((produktas) => {
        document.querySelector('tbody').innerHTML += `
            <tr>
                <td>${produktas.nuotrauka}</td>
                <td>${produktas.pavadinimas}</td>
                <td>${produktas.kiekis}</td>
            </tr>
        `;
    });
}
