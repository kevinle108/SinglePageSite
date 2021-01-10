const ballotPage = document.getElementById('ballotPage')
// ballotPage.style.color = 'red'
const reviewPage = document.getElementById('reviewPage')

const reviewButton = document.getElementById('reviewButton')
reviewButton.addEventListener('click', () => {
    ballotPage.style.display = 'none'
    reviewPage.style.display = 'block'
    reviewPage.focus()
    reviewPage.scrollIntoView()
})

const links = document.querySelectorAll('.reviewContestButton')
// const links = document.querySelectorAll('a') // NOTE: links do not show target id, use target.hash property instead

links.forEach((link) => {
    link.addEventListener('click', (event) => {
    ballotPage.style.display = 'block'
    reviewPage.style.visibility = 'hidden'
    console.log(event.target.id)
    console.log(event.target.id.replace('review_', ''))
    const contestId = event.target.id.replace('review_', '')
    const contestEle = document.getElementById(contestId)

    // const newEle = document.createElement("input");
    // newEle.type = "text";
    // contestEle.appendChild(newEle).focus()

    // const copied = ballotPage.innerHTML
    // ballotPage.innerHTML = ''
    // ballotPage.innerHTML = copied
    
    document.getElementById(contestId).focus()
    document.getElementById(contestId).scrollIntoView()

    

    })
})