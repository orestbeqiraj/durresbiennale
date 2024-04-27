let availableKeywords = [
    {name: 'Alfred Mirashi Milot', url: 'alfred-mirashi-milot'},
    {name: 'Art-Talk', url: 'art-talk'},
    {name: 'Artiol Izri', url: 'artiol-izri'},
    {name: 'Durrës Biennale', url: 'biennale'},
    {name: 'Blerina Zela', url: 'blerina-zela'},
    {name: 'Collection', url: 'collection'},
    {name: 'Contact', url: 'contact'},
    {name: 'Biennale Editions', url: 'editions'},
    {name: 'Fatmir Juka', url: 'fatmir-juka'},
    {name: 'History', url: 'history'},
    {name: 'Massimo Scaringella', url: 'massimo-scaringella'},
    {name: 'Notification', url: 'notification'},
    {name: 'Oltsen Gripshi', url: 'oltsen-gripshi'},
    {name: 'Publishing', url: 'publishing'},
    {name: 'Realda Abdija', url: 'realda-abdija'},
    {name: 'About Us', url: 'rreth-nesh'},
    {name: 'Tatiana Berdnik', url: 'tatiana-berdnik'},
    {name: 'Teuta Dhima', url: 'teuta-dhima'},
    {name: 'Workshop', url: 'workshop'},
    {name: 'Xhenisa Shahini', url: 'xhenisa-shahini'},
    {name: 'Yan Laichao', url: 'yan-laichao'}
]

const inputBox = document.getElementById("input-box");
const clearBtn = document.getElementById("clear-btn");
const searchBtn = document.getElementById("search-btn");
const resultBox = document.querySelector(".result-box");

inputBox.addEventListener("input", function() {
    if (inputBox.value.trim().length > 0) {
        clearBtn.style.display = "block";
        searchBtn.style.display = "none"
    } else {
        clearBtn.style.display = "none";
        searchBtn.style.display = "block";
    }
});

clearBtn.addEventListener("click", function() {
    inputBox.value = "";
    clearBtn.style.display = "none";
    searchBtn.style.display = "block";
    resultBox.innerHTML = "";
});


inputBox.onkeyup = function () {
    let input = inputBox.value.trim().toLowerCase();
    if (input.length === 0) {
        clearResults();
        return;
    }
    let result = availableKeywords.filter((keyword) => {
        return keyword.name.toLowerCase().includes(input);
    });
    display(result);
}

function display(result) {
    if (result.length === 0) {
        resultBox.innerHTML = '<li class="no-results-message">Nuk ka rezultat</li>';
        return;
    }

    const content = result.map((item) => {
        return `<li data-url="${item.url}" onclick="goToPage(this)">${item.name}</li>`;
    });
    resultBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function goToPage(item) {
    let url = item.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
}

function clearResults() {
    resultBox.innerHTML = '';
}
