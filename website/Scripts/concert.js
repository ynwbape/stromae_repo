// Show link and address when button is focus
const test_button = document.querySelector("#datesExtends");
const test_link = document.querySelector("#testLink");

let isTestBtnClicked = false;

// To show link and address
test_button.addEventListener("click", e => {
    e.preventDefault();
    !isTestBtnClicked;
    test_link.classList.toggle("hidden");
    console.log('This works !', test_link.classList, !isTestBtnClicked);
});

// $(document).ready(() => {
//     $(".hidden").hide();
// }) 