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
