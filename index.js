const data = [{
        id: 1,
        charecter: "madara uchiha",
        show: "naruto shippuden",
        quote: "Man seeks peace, yet at the same time yearning for war... Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They 're two sides of the same coin... to protect something... another must be sacrificed",
        pic: "images/madara1.jpg",
    },
    {
        id: 2,
        charecter: "madara uchiha",
        show: "naruto shippuden",
        quote: "When a man learns to love, he must bear the risk of hatred.",
        pic: "images/madara2.jpg",
    },
    {
        id: 3,
        charecter: "madara uchiha",
        show: "naruto shippuden",
        quote: "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love",
        pic: "images/madara3.jpg",
    },
    {
        id: 4,
        charecter: "madara uchiha",
        show: "naruto shippuden",
        quote: "People cannot show each other their true feelings. Fear, suspicion, and resentment never subside.",
        pic: "images/madara4.jpg",
    },
    {
        id: 5,
        charecter: "madara uchiha",
        show: "naruto shippuden",
        quote: "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.",
        pic: "images/madara5.jpg",
    },
    {
        id: 6,
        charecter: "itachi uchiha",
        show: "naruto",
        quote: `People live their lives bound by what they accept as correct and true. That's how they define "reality". But what does it mean to be "correct" or "true"? Merely vague concepts... Their "reality" may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?`,
        pic: "images/itachi1.jpg",
    },
    {
        id: 7,
        charecter: "itachi uchiha",
        show: "naruto",
        quote: `You and I are flesh and blood. I'm always going to be there for you, even if it's only as an obstacle for you to overcome. Even if you do hate me. That's what big brothers are for`,
        pic: "images/itachi2.jpg",
    },
    {
        id: 8,
        charecter: "itachi uchiha",
        show: "naruto",
        quote: `We are humans, not fish. We don't know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That's what death is, don't you think?`,
        pic: "images/itachi3.jpg",
    },
    {
        id: 9,
        charecter: "itachi uchiha",
        show: "naruto",
        quote: `Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.`,
        pic: "images/itachi4.jpg",
    },
    {
        id: 10,
        charecter: "itachi uchiha",
        show: "naruto",
        quote: `Teachings that do not speak of pain have no meaning, for humankind cannot gain anything in return`,
        pic: "images/itachi5.jpg",
    },
    {
        id: 11,
        charecter: "shogo makashima",
        show: "psycho pass",
        quote: `Everyone is alone. Everyone is empty. People no longer have need of others. You can always find a spare for any replacement. Any relationship can be replaced`,
        pic: "images/makashima1.jpg",
    },
    {
        id: 12,
        charecter: "shogo makashima",
        show: "psycho pass",
        quote: `An unforeseen situation… An unexpected turn of events… In the face of those, you too will face your true self`,
        pic: "images/makashima2.jpg",
    },
    {
        id: 13,
        charecter: "shogo makashima",
        show: "psycho pass",
        quote: `In order to measure a person's worth you must do more than push them. The real way to test their worth is to give them power. When they gain the freedom to act outside the boundaries of law and ethics you can sometimes see their souls`,
        pic: "images/makashima3.jpg",
    },
    {
        id: 14,
        charecter: "shogo makashima",
        show: "psycho pass",
        quote: `When a man faces fear, his soul is tested. What he was born to seek... what he was born to achieve... his true nature will become clear`,
        pic: "images/makashima4.jpg",
    },
    {
        id: 15,
        charecter: "shogo makashima",
        show: "psycho pass",
        quote: `A beautiful flower too will eventually wither and fall. That’s the fate of all living beings. If that’s the case, it’s only natural for one to want to stop the time while they’re still blossoming in all full glory`,
        pic: "images/makashima5.jpg",
    },
    {
        id: 16,
        charecter: "shinya kogami",
        show: "psycho pass",
        quote: `When something impossible happens, there are only two possibilities. Either your assumptions are wrong, or you have gone crazy`,
        pic: "images/kogami1.jpg",
    },
    {
        id: 17,
        charecter: "shinya kogami",
        show: "psycho pass",
        quote: `Being a detective isn’t about bringing someone down, but rather protecting someone`,
        pic: "images/kogami2.jpg",
    },
    {
        id: 18,
        charecter: "shinya kogami",
        show: "psycho pass",
        quote: `Charisma has three points. The nature of a hero or prophet, the ability to simply make you feel good when you’re around them, and the intelligence to eloquently talk about all sorts of things`,
        pic: "images/kogami3.jpg",
    },
    {
        id: 19,
        charecter: "shinya kogami",
        show: "psycho pass",
        quote: `Everything you’ve been taught is based on theories and logic. Soon, you’ll come to realize how pointless they are`,
        pic: "images/kogami4.jpg",
    },
    {
        id: 20,
        charecter: "shinya kogami",
        show: "psycho pass",
        quote: `If you look away and just turn your back on those you don’t understand, you’ll regret it someday. Accept what’s happening before your eyes as a fact. That’s a shortcut to becoming an adult`,
        pic: "images/kogami5.jpg",
    },

]

const imgEl = document.getElementById("img-el")
const chEl = document.getElementById("ch-el")
const showEl = document.getElementById("show-el")
const quoteEl = document.getElementById("quote-el")

const leftEl = document.getElementById("left-el")
const rightEl = document.getElementById("right-el")
const randomEl = document.getElementById("random-el")

let count = 0

window.addEventListener("DOMContentLoaded", function() {
    showInfo()
})

function showInfo() {
    let item = data[count]
    imgEl.src = item.pic
    chEl.textContent = item.charecter
    showEl.textContent = item.show
    quoteEl.textContent = item.quote
}
rightEl.addEventListener("click", function() {
    count++
    if (count > data.length - 1)
        count = 0;
    showInfo()
})
leftEl.addEventListener("click", function() {
    count--;
    if (count < 0)
        count = data.length - 1
    showInfo()
})
randomEl.addEventListener("click", function() {
    count = Math.floor(Math.random() * data.length)
    showInfo()
})