const fakture = []
let count = 0

// Input polja
const inputName = document.querySelector('#txt-company-name')
const inputPib = document.querySelector('#txt-company-pib')
const inputDate = document.querySelector('#txt-time')
const inputValue = document.querySelector('#txt-value')
const btnInsert = document.querySelector('#btn-add')
// Dodatno dugme
const btnFakture = document.querySelector('#fakture')
// Lista u koju ubacujemo polja
const itemList = document.querySelector('#item-list')

// Funkcija koja ce da doda jedan element u fakturu
const addElementToDOM = (id) => {
    const divContainer = document.createElement('div')
        divContainer.className = 'item-container'

            const divInfo = document.createElement('div')
            divInfo.className = 'item-info'

                divLabels = document.createElement('div')

                    const labelName = document.createElement('label')
                    labelName.className = 'company-name'
                    labelName.textContent = inputName.value

                    const labelPib = document.createElement('label')
                    labelPib.className = 'company-pib'
                    labelPib.textContent = inputPib.value

                    const labelTime = document.createElement('label')
                    labelTime.className = 'time-created'
                    labelTime.textContent = inputDate.value + ' '

                    const labelPrice = document.createElement('label')
                    labelPrice.className = 'price-value'
                    labelPrice.textContent = inputValue.value + 'RSD'

                divLabels.appendChild(labelName,labelPib,labelTime,labelPrice)

            divInfo.appendChild(divLabels)

                const divTimestamp = document.createElement('div')
                    const labelTimeStamp = document.createElement('label')
                    labelTimeStamp.className = 'insert-timestamp'
                    labelTimeStamp.innerHTML = `<span>[$inputDate.value]</span><span>@${(new Date()).getHours()}:${(new Date()).getMinutes()}</span>`
                divTimestamp.appendChild(labelTimeStamp)

            divInfo.appendChild(divTimestamp)

        divContainer.appendChild(divInfo)

            const divActions = document.createElement('div')
            divActions.className = 'item-actions'

                const btnRemove = document.createElement('button')
                btnRemove.className = 'item-trashCan'
                btnRemove.textContent = 'DELETE'
            divActions.appendChild(btnRemove)

                btnRemove.addEventListener('click', (e) => {
                    e.target.parentElement.parentElement.remove()
                    fakture.splice(fakture.findIndex(el => el.id === id), 1)
                    console.log(fakture)

            })
        divContainer.appendChild(divActions)

    itemList.appendChild(divContainer)

        inputName.value = ''
        inputDate.value = ''
        inputPib.value = ''
        inputValue.value = ''



    }


const validForm = () => inputName.value.trim() !== ''
        // && !Number.isNan(Number(inputPib.value.trim()))
        && inputPib.value.trim().length === 8
        // && !Number.isNan(Number(inputValue.value))
        && inputDate.value !== ''

btnInsert.addEventListener('click', () => {
    if(!validForm()){
        const greska = document.createElement('div')
        greska.innerHTML = `
        <p>1. Поља не смеју бити празна</p>
        <p>2. ПИБ мора да буде 8 цифара</p>
        <p>3. Вредност мора да буде број</p>
        `
        itemList.appendChild(greska)

        setTimeout(() => {
            greska.remove()
        },2000)

        return
    }

    fakture.push({
        name: inputName.value,
        pib: inputPib.value,
        dateIssued: inputDate.value,
        currency: "RSD",
        timeStamp: `${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`,
        dateStamp: inputDate.value,
        id: count
    })
    console.log(fakture[fakture.length - 1])
    addElementToDOM(count)

    count++
})