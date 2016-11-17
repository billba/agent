const chats = document.getElementById("chats");
const messages = document.getElementById("messages");

setInterval(() =>
    fetch("http://9cfef6c5.ngrok.io/api/agent/1")
    .then(response => response.text())
    .then(text => {
        const conversationId = text.replace(/"/g, '');
        console.log("conversationId", conversationId);
        if (conversationId !== 'None') {
            createIframe(conversationId);
        }
    })
, 3 * 1000);

const sendToBot = (id: string, conversationId: string) => {
    const iframe = (document.getElementById(id) as HTMLIFrameElement).contentWindow;
    console.log("iframe", id);
    iframe.postMessage({ conversationId }, window.location.origin);
}

const createIframe = (conversationId: string) => {
    const id = `botchat_${conversationId}`;
    const iframe = <HTMLIFrameElement>document.createElement('iframe');
    iframe.id = id;
    iframe.src = 'botchat?s=DUzMSzP-KqA.cwA.4no.wkhn45S9bnI5oBw6r9-mzO0PAALVBDrNkEMPYMIig2A';
    iframe.width = "320";
    iframe.height = "500";
    iframe.onload = (event: Event) => {
        sendToBot(id, conversationId);
    };
    chats.appendChild(iframe);
    return id;
}
