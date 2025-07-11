window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const envelopeWrapper = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');
const subtitleP = document.querySelector('.subtitle p');
const letter = document.querySelector('.letter');

envelopeWrapper.classList.add('shake');

heart.addEventListener('click', toggleEnvelope);
heart.addEventListener('touchstart', toggleEnvelope);


letter.addEventListener('click', toggleEnvelope);
letter.addEventListener('touchstart', toggleEnvelope);

function toggleEnvelope(e) {
  e.preventDefault();

  envelopeWrapper.classList.toggle('flap');

  if (envelopeWrapper.classList.contains('flap')) {
    envelopeWrapper.classList.remove('shake');
    subtitleP.classList.add('hidden');
  } else {
    envelopeWrapper.classList.add('shake');
    subtitleP.classList.remove('hidden');
  }
}
