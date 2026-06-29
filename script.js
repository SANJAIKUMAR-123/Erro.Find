let currentError = null;
let currentLanguage = null;

let searches =
parseInt(localStorage.getItem("searches")) || 0;

document.addEventListener("DOMContentLoaded", function ()
{
    document.getElementById("searchCount").textContent = searches;
    loadHistory();
});

function normalize(text)
{
    return text
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function copyFix(text)
{
    navigator.clipboard.writeText(text);
    alert("Fix copied successfully!");
}

function saveHistory(search)
{
    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    history.unshift(search);

    history = [...new Set(history)];

    if(history.length > 5)
    {
        history = history.slice(0, 5);
    }

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    loadHistory();
}

function loadHistory()
{
    let history =
    JSON.parse(localStorage.getItem("history")) || [];

    let historyBox =
    document.getElementById("history-box");

    if(!historyBox)
    {
        return;
    }

    if(history.length === 0)
    {
        historyBox.innerHTML = "No searches yet";
        return;
    }

    historyBox.innerHTML =
    history.map(item =>
`
        <div
        class="history-item"
        onclick="reuseSearch('${item}')"
        >
        ${item}
        </div>
        `
        ).join("");
}


function extractError(text)
{
    const commonErrors = [
        "nullpointerexception",
        "arithmeticexception",
        "arrayindexoutofboundsexception",
        "classnotfoundexception",
        "numberformatexception",
        "illegalargumentexception",
        "filenotfoundexception",
        "inputmismatchexception",
        "typeerror",
        "referenceerror",
        "syntaxerror",
        "rangeerror",
        "urierror",
        "evalerror",
        "indexerror",
        "keyerror",
        "valueerror",
        "zerodivisionerror",
        "nameerror",
        "indentationerror",
        "attributeerror",
        "importerror",
        "modulenotfounderror",
        "segmentationfault",
        "stackoverflow",
        "badalloc",
        "outofrange"
    ];

    let normalized = normalize(text);

    for(let error of commonErrors)
    {
        if(normalized.includes(error))
        {
            return error;
        }
    }

    return normalized;
}

function validate()
{
    let rawInput =
    document.getElementById("val").value;

    let language =
    document.getElementById("language").value;

    let result =
    document.getElementById("ans");

    if(rawInput.trim() === "")
    {
        result.innerHTML =
        "<p>⚠️ Please enter an error message.</p>";
        return;
    }

    if(language === "")
    {
        result.innerHTML =
        "<p>⚠️ Please select a programming language.</p>";
        return;
    }

    let input =
    extractError(rawInput);

    let selectedLanguage =
    errorDatabase[language];

    let found = false;

    for(let key in selectedLanguage)
    {
        if(input.includes(normalize(key)))
        {
            let error =
            selectedLanguage[key];
            currentError = error;
            currentLanguage = language;

            result.innerHTML = `
            <div class="error-card">

                <h2>${error.title}</h2>

                <h3>What is the Error?</h3>
                <p>${error.meaning}</p>

                <h3>How to Fix It?</h3>
                <p>${error.fix}</p>

                <button onclick="copyFix('${error.fix}')">
                    Copy Fix
                </button>

                <button onclick="downloadReport()">Download Report</button>
                <h3>Example Program</h3>

                <pre>${error.example}</pre>

            </div>
            `;

            saveHistory(rawInput);

            found = true;

            break;
        }
    }

    searches++;

localStorage.setItem(
    "searches",
    searches
);

document.getElementById(
    "searchCount"
).textContent = searches;
    if(!found)
    {
        result.innerHTML = `
        <h2>Unknown Error</h2>
        <p>No matching error found in database.</p>
        `;
    }
}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () =>
{
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
});

document.getElementById("clearHistoryBtn").addEventListener("click", () =>
{
    localStorage.removeItem("history");
    localStorage.removeItem("searches");
    searches = 0;
    document.getElementById("searchCount").textContent = searches;
    loadHistory();
});

function reuseSearch(text)
{
    document.getElementById("val").value=text;
    validate();
}

function downloadReport()
{
    if(!currentError)
    {
        return;
    }

    let report = `
ERROFIND REPORT
====================

Language: ${currentLanguage}

Error:
${currentError.title}

Meaning:
${currentError.meaning}

Fix:
${currentError.fix}

Generated by ErroFind
`;

    let blob = new Blob(
        [report],
        {type:"text/plain"}
    );

    let link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    currentError.title + ".txt";

    link.click();
}