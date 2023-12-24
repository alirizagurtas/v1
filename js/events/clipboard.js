export class ClipboardEvents {
    copy(e) {

    }
    cut(e) {

    }
    paste(e) {
        if (e.type === 'paste') {

            e.preventDefault();

            // Get pasted data via clipboard API
            let clipboardData = e.clipboardData || window.clipboardData;
            let pastedData = clipboardData.getData('Text');
            console.log(pastedData, clipboardData);
        }
    }
}