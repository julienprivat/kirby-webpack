const initmodules = (projects) => {

    projects.forEach((project) => {

        const sizes = wichSize(project)
        initLeftPhrases(sizes)

    })

}

const wichSize = (project) => {

    const phrases = [...project.querySelectorAll('.phrase')]
    let smaller = phrases[0]
    let bigger = phrases[0]
    let count = 0

    phrases.forEach((phrase) => {
        const width = phrase.offsetWidth
        if (width > count) {
            bigger = phrase
            count = width
         } else {
            smaller = phrase
         }
    })

    const sizes = {
        bigger : bigger,
        smaller : smaller
    }

    return sizes

}

const initLeftPhrases = (sizes) => {

    console.log(sizes)
    sizes.bigger.classList.add('allLeftRound')
    sizes.smaller.classList.contains('top') && sizes.smaller.classList.add('topLeftSmaller')
    sizes.smaller.classList.contains('bottom') && sizes.smaller.classList.add('bottomLeftSmaller')

}

const Modules = () => {

    const projects = [...document.querySelectorAll('.project')] 

    initmodules(projects)

} 
export default Modules