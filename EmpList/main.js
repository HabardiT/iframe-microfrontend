var empList = [
    { name: "Ahmed", id: "1", description: "Ahmed is a Software Engineer" },
    { name: "Ali", id: "2", description: "Ali is a Business Analyst" },
    { name: "Abdulaziz", id: "3", description: "Abdulaziz is a Technical Lead" },
];

receive_message = (e) => {
    console.log("received message from " + e.origin + ": " + JSON.stringify(e.data));
    delete e.data.target;
    empList.push(e.data);
    refreshList();
};
window.addEventListener("message", receive_message, false);

refreshList = () => {
    $(".list-group").empty();
    $.each(empList, (i, el) => {
        var clone = $("#listItem").clone(true);
        clone.text(el.name);
        clone.attr("index", i);
        clone.removeClass("d-none");
        $(".list-group").append(clone);
    });
    $(".list-group-item").first().trigger("click");
};

$(() => {
    $("#listItem").on("click", (el) => {
        var elObj = el.target;
        if ($(elObj).hasClass("active")) return;
        $(".list-group-item").each((i, el) => {
            $(el).removeClass("active");
        });
        $(elObj).addClass("active");
        var obj = empList[$(elObj).attr("index")];
        obj.target = "details";
        window.parent.postMessage(obj, "*");
    });
    refreshList();
});
