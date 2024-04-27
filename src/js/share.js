const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    console.log("Share button clicked!");
})

document.addEventListener('DOMContentLoaded', function() {
    const link = encodeURIComponent(window.location.href);
    const titleElement = document.querySelector('.name');
    const title = encodeURIComponent(titleElement.textContent.trim());
    const extendedTitle = title + " | Durres International Biennale of Contemporary Art";
    const encodedTitle = encodeURIComponent(extendedTitle);
    const decodedTitle = decodeURIComponent(encodedTitle);
    const hashtags = encodeURIComponent("durresbiennale,biennale,international");

    const fb = document.querySelector('.facebook');
    fb.href = `https://www.facebook.com/share.php?u=${link}&quote=${decodedTitle}`;

    const whatsapp = document.querySelector('.whatsapp');
    whatsapp.href = `https://api.whatsapp.com/send?text=${decodedTitle}: ${link}`;

    const twitter = document.querySelector('.twitter');
    twitter.href = `https://twitter.com/intent/tweet?url=${link}&text=${decodedTitle}&hashtags=${hashtags}`;

    const linkedIn = document.querySelector('.linkedin');
    linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}&title=${decodedTitle}`;

    const telegram = document.querySelector('.telegram');
    telegram.href = `https://telegram.me/share/url?url=${link}&text=${decodedTitle}`;

    const reddit = document.querySelector('.reddit');
    reddit.href = `https://reddit.com/submit?url=${link}&title=${decodedTitle}`;
});

function copyText(button) {
    var text = document.querySelector('.link').innerText;
    navigator.clipboard.writeText(text)
        .then(function() {
            button.innerText = 'copied';
            setTimeout(function() {
                button.innerText = 'copy';
            }, 2000);
        })
        .catch(function(err) {
            console.error('Unable to copy text: ', err);
        });
}
