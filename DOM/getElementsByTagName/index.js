let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });

let dugmeBrisi = document.getElementById('dugmeDeleteParagraph');
        dugmeBrisi.addEventListener('click', () => { 
            let paragrafi = document.getElementsByTagName('p')
            console.log(paragrafi)
        })