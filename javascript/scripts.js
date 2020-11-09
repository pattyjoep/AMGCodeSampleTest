// var campaignArray = ["Campaign 1", "Campaign 2", "Campaign 3", "Campaign 4", "Campaign 5", "Campaign 6"]
// var statusArray = ["Live", "Upcoming", "Ended"]
// var randomStatus = statusArray

// class Campaign {
//     constructor(title, date, status) {
//         this.title = title;
//         this.date = date;
//         this.status = status
//     }
// }

// $(document).ready( () => {
//     // createCampaignCards()
// })


// // Creates new instance of Campaign class based on the Campaign Array
// function createCampaignClassInstance() {
//     for (i = 0; i < campaignArray.length; i++){
//         return campaignArray.map(title => new Campaign(title, "1/1/2020", statusArray[Math.floor(Math.random() * statusArray.length)]));
//     }
// }

// // Creates Campaign Cards & Appends them to the row
// let campaigns = createCampaignClassInstance();
// function createCampaignCards() {
//     console.log(campaigns);
//     for (i = 0; i < campaigns.length; i++){
//         var FavoritesRow = $("#favoritesRow")

//         var Column = document.createElement("Div")
//         Column.setAttribute("class", "col-lg-3")

//         var Card = document.createElement("Div")
//         Card.setAttribute("class", "card")

//         //Appends
//         FavoritesRow.append(Column)
//         Column.append(Card)
//     }

// }

// Expand Sidebar
$("#expandSidebar").click( (e) => {
    e.preventDefault();

    $("#sidebarExpanded").attr("class", "sidebar-div-expanded")
});

// Collapse Sidebar
$("#collapseSidebar").click( (e) => {
    e.preventDefault();
    $("#sidebarExpanded").attr("class", "hidden")
});
