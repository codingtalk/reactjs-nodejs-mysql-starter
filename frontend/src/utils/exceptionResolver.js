window.onerror = (msg, url, line, col, error) => {
    var extra = !col ? '' : '\ncolumn: ' + col;
    extra += !error ? '' : '\nerror: ' + error;

    console.error("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

    // TODO: Report this error via ajax so you can keep track
    //       of what pages have JS issues

    var suppressErrorAlert = true;
    return suppressErrorAlert;
};

window.onunhandledrejection = (e) => {
    console.error(e);
    throw new Error(e.reason.stack);
}