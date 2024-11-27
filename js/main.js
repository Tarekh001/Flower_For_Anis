
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday Sayang, Semoga Mejadi Yang Lebih Baik Lagi Dari Yang Kemarin-Kemarin dan Maafin Aku Kalo Ada Salah Yaaaa✌️').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};


// onload = () => {
//   const c = setTimeout(() => {
//     document.body.classList.remove("not-loaded");

//     const titles = ('Happy Birthday Sayang, Semoga Menjadi Yang Lebih Baik Lagi dan Maafin Aku Kalo Ada Salah Yaaaa✌️').split('');
//     const titleElement = document.getElementById('title');
//     let index = 0;

//     // Append letters to the title element
//     function appendTitle() {
//       if (index < titles.length) {
//         titleElement.innerHTML += titles[index];
//         index++;
//         setTimeout(appendTitle, 100); // Add letter every 100ms
//       }
//     }

//     appendTitle();

//     // Convert title to balloons after 15 seconds
//     setTimeout(() => {
//       titleElement.innerHTML = ''; // Clear the title text

//       for (let i = 0; i < 50; i++) { // Generate 50 balloons
//         const balloon = document.createElement('div');
//         balloon.classList.add('balloon');
//         balloon.style.left = `${Math.random() * 100}vw`;
//         balloon.style.animationDelay = `${Math.random() * 3}s`;
//         balloon.style.animationDuration = `${4 + Math.random() * 3}s`;
//         document.body.appendChild(balloon);

//         // Remove balloon after animation
//         balloon.addEventListener('animationend', () => {
//           balloon.remove();
//         });
//       }
//     }, 15000); // 15 seconds delay

//     clearTimeout(c);
//   }, 1000);
// };
