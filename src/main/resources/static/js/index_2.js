addEventListener("DOMContentLoaded", (event) => {


    const continueBtn = document.getElementById("chapter-3-btn");
   
    //         displayPopulateMainQuestionCard();
    //     }

    //     function displayPopulateMainQuestionCard() {
    //         let questionObj = questions[questionPointer];

    //         questionDisplayed.innerText = questionObj.question;
    //         questionTypeDisplayed.innerText = questionObj.type.replaceAll('_', ' ').toUpperCase();
    //     }

    //     function displayAboutSection() {

    //     }

    //     function displayContactSection() {

    //     }

    //     function displayQuestionsSection() {
    //         showGreetingCard();
    //     }

    //     function scrollCategoryList(parameters) {
    //         questionOptions.scrollBy(parameters);
    //     }

    //     function getCategoryWidth() {
    //         let widthOfCategory = questionOptions.firstElementChild.offsetWidth;
    //         return widthOfCategory + (widthOfCategory / 2)
    //     }

    //     function closeNav() {
    //         sideNav.style.width = "0";
    //     }

    function addEventListeners() {
        continueBtn.addEventListener("click", () => {
            location.href = "./2";
        })

        //         navCloseBtn.addEventListener("click", () => {
        //             closeNav();
        //         })

        //         //Greetings
        //         // startBtn.addEventListener("click", () => {
        //         //     showChoice();
        //         // })

        //         // showListBtn.addEventListener("click", () => {
        //         //     showCardList();
        //         // })

        //         showRandomBtn.addEventListener("click", () => {
        //             questionPointer = 0;
        //             questions = allQuestions
        //             showMainCard();
        //         })

        //         showCategoriesBtn.addEventListener("click", () => {
        //             showCategoriesList();
        //         })

        //         //Random Card
        //         closeBtn.addEventListener("click", () => {
        //             closeRandom();
        //         })

        //         randomBtn.addEventListener("click", () => {
        //             showRandomQuestion();
        //         })

        //         nextBtn.addEventListener("click", () => {
        //             showNextQuestion();
        //         })

        //         backBtn.addEventListener("click", () => {
        //             showBackQuestion();
        //         })

        //         // header.addEventListener("click", () => {
        //         //     listOfQuestionsContainer.classList.remove('hide');
        //         //     closeRandom();
        //         // })

        //         aboutNav.addEventListener("click", () => {
        //             closeNav();
        //             showAboutSection();
        //             // console.log(window.location.hostname)
        //             // const nextURL = window.location.hostname + '/about';
        //             // const nextTitle = 'About';
        //             // const nextState = {};

        //             // // This will create a new entry in the browser's history, without reloading
        //             // window.history.pushState(nextState, nextTitle, nextURL);

        //             // // // This will replace the current entry in the browser's history, without reloading
        //             // // window.history.replaceState(nextState, nextTitle, nextURL);
        //         })

        //         categoriesNav.addEventListener("click", () => {
        //             closeNav();
        //             showCategoriesList();
        //             // displayQuestionsSection();
        //             // const nextURL = window.location.hostname + '/questions';
        //             // const nextTitle = 'Questions';
        //             // const nextState = {};

        //             // // This will create a new entry in the browser's history, without reloading
        //             // window.history.pushState(nextState, nextTitle, nextURL);
        //         })

        //         randomizeNav.addEventListener("click", () => {
        //             closeNav();
        //             showRandomQuestion();
        //             // displayQuestionsSection();
        //             // const nextURL = window.location.hostname + '/questions';
        //             // const nextTitle = 'Questions';
        //             // const nextState = {};

        //             // // This will create a new entry in the browser's history, without reloading
        //             // window.history.pushState(nextState, nextTitle, nextURL);
        //         })

        //         contactNav.addEventListener("click", () => {
        //             closeNav();
        //             displayContactSection();
        //             // const nextURL = window.location.hostname + '/contact';
        //             // const nextTitle = 'Contact';
        //             // const nextState = {};

        //             // // This will create a new entry in the browser's history, without reloading
        //             // window.history.pushState(nextState, nextTitle, nextURL);
        //         })

        //         homeNav.addEventListener("click", () => {
        //             closeNav();

        //             showGreetingCard();
        //             // const nextURL = window.location.hostname + '/contact';
        //             // const nextTitle = 'Contact';
        //             // const nextState = {};

        //             // // This will create a new entry in the browser's history, without reloading
        //             // window.history.pushState(nextState, nextTitle, nextURL);
        //         })


        //         // categoryPrevBtn.addEventListener("click", () => {
        //         //     scrollCategoryList({
        //         //         left: -1 * getCategoryWidth(),
        //         //         behavior: "smooth",
        //         //     })
        //         // })

        //         // categoryNextBtn.addEventListener("click", () => {
        //         //     scrollCategoryList({
        //         //         left: getCategoryWidth(),
        //         //         behavior: "smooth",
        //         //     })
        //         // })
    }

    //     class DataObject {
    //         getAllQuestions() {
    //             console.log("Requesting data from server")
    //             fetch('api/v1/questions/all')
    //                 .then(response => response.json())
    //                 .then(res => {
    //                     if (res.questions.length > 0) {
    //                         allQuestions = [...res.questions];
    //                         allQuestions.forEach(questionInfo => {
    //                             if (!QUESTIONS_BY_TYPE.has(questionInfo.type)) {
    //                                 QUESTIONS_BY_TYPE.set(questionInfo.type, [questionInfo])
    //                             } else {
    //                                 let questionsByType = QUESTIONS_BY_TYPE.get(questionInfo.type)
    //                                 QUESTIONS_BY_TYPE.set(questionInfo.type, [questionInfo, ...questionsByType])
    //                             }
    //                         })
    //                         questions = allQuestions;
    //                         buildCardList();
    //                         buildQuestionsCategory();

    //                         showGreetingCard();
    //                     } else {
    //                         console.log("Still waiting on data from server, give us a second")
    //                     }
    //                 })
    //                 .catch(err => console.log('Request Failed', err)); // Catch errors
    //         }
    //     }

    //     function buildQuestionsCategory() {
    //         categories = Array.from(QUESTIONS_BY_TYPE.keys());

    //         categories
    //             .map(type => new Category({
    //                 type, onClick: () => {
    //                     questionPointer = 0;
    //                     questions = QUESTIONS_BY_TYPE.get(type);
    //                     showMainCard();
    //                 }
    //             }))
    //             .forEach(category => {
    //                 categoriesSection.appendChild(category.element)
    //             })
    //     }

    //     function buildCardList() {
    //         questions
    //             .map(questionInfo => new Card({ question: questionInfo.question, type: questionInfo.type }))
    //             .forEach(cardQuestion => {
    //                 listOfQuestions.appendChild(cardQuestion.element)
    //                 // swiper.append(cardQuestion.element);

    //             })

    //         // const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    //         // cards.forEach((card, index) => {
    //         //     card.style.setProperty('--i', index);
    //         // });

    //         // listOfQuestions.forEach((question, index) => {


    //         //     question.element.style.setProperty('--i', index);
    //         //   });
    //     }

    //     class Category {
    //         constructor({ type, onClick }) {
    //             this.type = type;
    //             this.onClick = onClick;
    //             this.element = this.createMarkUp();
    //             this.addEventListener();
    //         }

    //         createMarkUp() {
    //             const divTag = document.createElement("div");
    //             const headerTag = document.createElement("header");
    //             const imgTag = document.createElement("img");

    //             divTag.classList.add("grid-item")
    //             const type = this.type.replaceAll('_', ' ').toUpperCase();

    //             headerTag.innerText = type
    //             imgTag.src = this.getIconForCategory(type)

    //             divTag.appendChild(headerTag);
    //             divTag.appendChild(imgTag);

    //             return divTag;
    //         }

    //         addEventListener() {
    //             this.element.addEventListener('click', () => this.onClick())
    //         }

    //         getIconForCategory(category) {
    //             category = category.toLowerCase();

    //             switch (category) {
    //                 case "porn":
    //                     return "../icons/icons8-" + category + "-80.png";
    //                 case "work life balance":
    //                     return "../icons/icons8-tired-80.png"
    //                 case "kids":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "where to live":
    //                     return "../icons/icons8-location-80.png"
    //                 case "intimacy":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "religion":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "divorce":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "family":
    //                     return "../icons/icons8-" + category + "-100.png"
    //                 case "finances":
    //                     return "../icons/icons8-money-80.png"
    //                 case "non categorized":
    //                     return "../icons/icons8-random-80.png"
    //                 case "communication":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "health":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 case "marriage":
    //                     return "../icons/icons8-" + category + "-80.png"
    //                 default:
    //                     return "./icons/favicon-32.png";
    //             }
    //         }
    //     }

    //     class Card {
    //         constructor({ question, type }) {
    //             this.question = question;
    //             this.type = type;
    //             this.element = this.createMarkUp();
    //         }

    //         createMarkUp() {
    //             const outerDivTag = document.createElement("div");
    //             const divTag = document.createElement("div");
    //             const headerTag = document.createElement("header");
    //             const pTag = document.createElement("p");

    //             outerDivTag.classList.add("card-list-item")
    //             divTag.classList.add("question-container")
    //             headerTag.classList.add("question-type");
    //             pTag.classList.add("question")

    //             headerTag.innerText = this.type.replaceAll('_', ' ').toUpperCase();
    //             pTag.innerText = this.question;

    //             divTag.appendChild(headerTag);
    //             divTag.appendChild(pTag);
    //             outerDivTag.appendChild(divTag);

    //             return outerDivTag;
    //         }
    //     }

    //     let dao = new DataObject();
    //     dao.getAllQuestions();
    addEventListeners();
});