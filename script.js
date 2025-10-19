const search_input = document.getElementById('search')

function search() {
    if (search_input.value === '') {
        alert("البحث فارغ تماما, اكتب شيء للبحث عنه");
    }
    else {
        window.open(`https://www.youtube.com/results?search_query=${search_input.value}`)
    }
}
function clearInput() {
    search_input.value = '';
}

function show_account() {
    alert(

        'You: \n\n    Name: Ahmed Ali\n\n    Email: ahmedalii201510@gamil.com\n\n    Password: 10aaa2015 \n------------------------------\nSubscriptions: \n\n    1. Weaam\n    2. Egy otaku\n    3. MeowlyVa\n    4. Codezilla\n------------------------------\nNotifications: \n\n    Meowlyva. تقييم بيوت المتابعين'

    )
}