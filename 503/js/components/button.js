export function createButton(label, onClick) {

const newBtn = document.createElement('button');
newBtn.textContent = "label";

document.body.appendChild(newBtn); // LÄgger till elementet i body

newBtn.addEventListener('click', () => {
    console.log('CLICK!');
});

}

