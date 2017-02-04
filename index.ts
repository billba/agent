const chats = document.getElementById("chats");
const messages = document.getElementById("messages");

setInterval(() =>
    fetch("http://YOUR_BOT_ENDPOINT/api/agent/1")
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
    iframe.src = 'botchat?s=YOUR_DIRECTLINE_SECRET_ID';
    iframe.width = "320";
    iframe.height = "500";
    iframe.onload = (event: Event) => {
        sendToBot(id, conversationId);
    };
    chats.appendChild(iframe);
    return id;
}
