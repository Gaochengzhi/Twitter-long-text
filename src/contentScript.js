import { toBlob } from 'html-to-image';
const penIcon = "M17.1032857,0.896707034 C15.9077075,-0.29884961 13.9727111,-0.298955078 12.7770627,0.896707034 C12.5143358,1.15946442 1.36209904,12.3115009 1.28222274,12.3913406 C1.2820118,12.3915516 1.28183601,12.3917625 1.28162507,12.3919734 C1.21071376,12.462989 1.15657225,12.5538677 1.12929055,12.6575785 C1.01140972,13.1054684 0.160368489,16.3390998 0.0303937112,16.832974 C-0.0534904704,17.1516649 0.0391829172,17.4944729 0.272272659,17.7275233 C0.518159485,17.9733706 0.861747124,18.0496244 1.16676773,17.9693276 C1.65425225,17.8410427 4.90713737,16.9849542 5.34220307,16.8704505 C5.44236486,16.8440834 5.53370229,16.7918764 5.60784803,16.7181187 C5.60805897,16.7179078 5.60826991,16.717732 5.60848085,16.7175211 C5.6743999,16.6516032 16.8281132,5.49809016 17.1033208,5.22288748 C18.2988638,4.02736599 18.2989341,2.0924043 17.1032857,0.896707034 Z M2.45051915,16.4147911 L1.5849933,15.5492808 L2.00652362,13.9475998 L4.05219373,15.9933035 L2.45051915,16.4147911 Z M5.192435,15.4695114 L2.53021967,12.8073439 L11.9344943,3.4032381 L14.5967096,6.06540564 L5.192435,15.4695114 Z M16.2712994,4.39088102 L15.428731,5.23339918 L12.7665157,2.57123165 L13.6090841,1.72867833 C14.3447406,0.992999846 15.5355374,0.992894378 16.2712994,1.72867833 C17.0070263,2.46439198 17.0070614,3.65513222 16.2712994,4.39088102 Z"
const closeIcon = "M10.0000814,0 C12.7605205,0 15.261843,1.1201263 17.0725673,2.92743268 C18.8798737,4.73815705 20,7.23964225 20,9.99991862 C20,12.7605205 18.8797109,15.2616802 17.0725673,17.0724046 C15.2620057,18.8800365 12.7605205,20 10.0000814,20 C7.23964225,20 4.73815705,18.8800365 2.92743268,17.0725673 C1.1201263,15.261843 0,12.7605205 0,9.99991862 C0,7.23964225 1.1201263,4.73815705 2.92743268,2.92743268 C4.73831981,1.1201263 7.23964225,0 10.0000814,0 L10.0000814,0 Z M11.9551754,6.37244769 C12.4027702,5.91801691 13.1304779,5.91590101 13.5805142,6.36821589 C14.0303876,6.82004248 14.032178,7.5550745 13.5849087,8.00934252 L11.6211883,10.0008952 L13.5868619,11.9947265 C14.0308759,12.4455765 14.0245282,13.1757257 13.5736782,13.6257619 C13.1225026,14.0759609 12.3970735,14.0746588 11.9535478,13.6238088 L10.0008952,11.6441377 L8.04498735,13.6278778 C7.59739256,14.0824714 6.86984757,14.0844245 6.41981136,13.6319469 C5.97010067,13.180283 5.96798477,12.445251 6.41557955,11.990983 L8.37897444,9.99926757 L6.41313813,8.00543624 C5.96944962,7.55474898 5.97547181,6.82443705 6.42648459,6.37423807 C6.87766014,5.92420186 7.60308922,5.92534119 8.04661496,6.37635397 L9.99926757,8.35618779 L11.9551754,6.37244769 L11.9551754,6.37244769 Z M15.77145,4.22855004 C14.2947127,2.75181276 12.2543315,1.83855663 10.0000814,1.83855663 C7.7456685,1.83855663 5.70528732,2.75181276 4.22855004,4.2287128 C2.75181276,5.70545008 1.83855663,7.74583126 1.83855663,10.0000814 C1.83855663,12.2543315 2.75181276,14.2948754 4.22855004,15.77145 C5.70528732,17.24835 7.7456685,18.1617689 10.0000814,18.1617689 C12.2543315,18.1617689 14.2947127,17.2485128 15.77145,15.77145 C17.2481872,14.2948754 18.1614434,12.2543315 18.1614434,10.0000814 C18.1614434,7.74583126 17.24835,5.70545008 15.77145,4.22855004 L15.77145,4.22855004 Z"
let showPen = true;
let toolbarDiv = null;
let editorIcon = null;
let path = null;
let firstTimeClick = true;
let count1 = 0
let count2 = 0


function checkIfIconExists() {
    // Replace this with your own logic to check for the existence of the icon
    let icon = document.querySelector('.editIcon');
    return icon !== null;
}

function insertIcon() {
    editorIcon = document.createElement('div');
    editorIcon.className = 'close-button ql-formats editIcon';

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");

    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", penIcon);
    path.setAttribute("fill", "rgb(29, 155, 240)");

    svg.appendChild(path);
    editorIcon.appendChild(svg);
    editorIcon.style.position = 'inline-block';

    let firstChild = toolbarDiv.firstElementChild;
    toolbarDiv.insertBefore(editorIcon, firstChild);
    editorIcon.addEventListener('click', iconClickHandler);


}

function iconClickHandler() {
    if (firstTimeClick) {
        initQuillEditor(path);
        firstTimeClick = false;
    }
    showPen ? showQuillEditor(path) : hideQuillEditor(path);
    showPen = !showPen;
}

function toggleQuillEditor(path, show) {
    const editorContainer = document.querySelector('#quill-editor');
    const toolbar = document.querySelector('.ql-toolbar');
    const draftEditorRoot = document.querySelector('div.DraftEditor-root');
    if (editorContainer) editorContainer.style.display = show ? 'block' : 'none';
    if (toolbar) toolbar.style.display = show ? 'block' : 'none';
    if (draftEditorRoot) draftEditorRoot.style.display = show ? 'none' : 'block';
    path.setAttribute("d", show ? closeIcon : penIcon);
}

function showQuillEditor(path) {
    toggleQuillEditor(path, true);
}

function hideQuillEditor(path) {
    toggleQuillEditor(path, false);
}

// This function initializes the Quill editor and manipulates the toolbar and textarea.
function initQuillEditor(path) {
    let draftEditorRoot = document.querySelector('div.DraftEditor-root');
    let editorContainer = document.createElement('div');
    editorContainer.id = 'quill-editor';

    if (draftEditorRoot) draftEditorRoot.style.display = 'none';
    draftEditorRoot.parentNode.insertBefore(editorContainer, draftEditorRoot.parentNode.nextSibling);

    // Initialize Quill editor with configurations
    let quill = new Quill('#quill-editor', quillConfig);

    let toolbar = document.querySelector('.ql-toolbar');
    toolbar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Make textarea initially not visible and stop event propagation on input.
    let textarea = document.querySelector('div.DraftEditor-root');
    textarea.style.display = 'none';
    textarea.addEventListener('input', function (event) {
        event.stopPropagation();
    });

    // Create upload button and add it to toolbar
    let uploadButton = document.createElement('div');
    uploadButton.className = 'upload-button ql-formats';
    uploadButton.textContent = 'finish';
    uploadButton.style.position = 'inline-block';
    toolbar.appendChild(uploadButton);

    uploadButton.addEventListener('click', function () {
        uploadClickHandler(editorContainer, quill, path);
    });
}

const quillConfig = {
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, false] }],
            [{ 'color': [] }, { 'background': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'align': [] }],
            [{ 'size': ['small', 'large', 'huge'] }],  // Font size options
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image']
        ]
    },
    theme: 'snow'
};

function uploadClickHandler(editorContainer, quill, path) {
    let htmlContent = editorContainer;
    toBlob(htmlContent)
        .then(function (bblob) {
            let file = new File([bblob], 'my-node.png', { type: 'image/png' });
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': file
                })
            ]).then(function () {
                successNotification();
                clearQuillEditor(quill);
                hideQuillEditor(path);
                showPen = !showPen;
            }).catch(function (error) {
                console.error("Error: ", error);
            });
        });
}

function successNotification() {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Image copied!';
    document.body.appendChild(notification);

    // Animate the notification
    notification.classList.add('show');
    setTimeout(function () {
        notification.classList.add('fadeout');
        setTimeout(function () {
            // Remove the notification element
            document.body.removeChild(notification);
        }, 300);
    }, 3600);
}

function clearQuillEditor(quill) {
    quill.setContents([{ insert: '\n' }]);
}

function checkForToolbarDiv() {
    toolbarDiv = document.querySelector('div[data-testid="toolBar"]');
    if (toolbarDiv) {
        insertIcon();
    }
    else { // Only start a new initialization if one isn't already in progress
        setTimeout(checkForToolbarDiv, 100);
    }
}



// when page inital refresh
setTimeout(() => {
    if (!checkIfIconExists()) {
        firstTimeClick = true;
        console.log(count1);
        checkForToolbarDiv();
    }
}, 1000);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'urlChanged') {
        if (request.initialLoad) {
            // never going here
            // alert("initial load")
        } else {
            // Page is refreshed or navigated to a new URL
            if (request.url === 'https://twitter.com/home') {
                if (!checkIfIconExists()) {
                    firstTimeClick = true;
                    console.log(count2);
                    checkForToolbarDiv();
                }
            }
        }
    }
});



// Add event listener to the element
setTimeout(() => {
    const tweetButton = document.querySelector('[data-testid="tweetButtonInline"][role="button"]');
    tweetButton.addEventListener('click', handleClick);
}, 3000);


function handleClick() {
    setTimeout(() => {
        const draftEditorRoot = document.querySelector('div.DraftEditor-root').childNodes[0].childNodes;
        if (draftEditorRoot) {
            if (!checkIfIconExists()) {
                firstTimeClick = true;
                console.log(count2);
                checkForToolbarDiv();
            }
        }
        else {
            setTimeout(() => {
                handleClick
            }, 1500);
        }
    }, 1000);

}


