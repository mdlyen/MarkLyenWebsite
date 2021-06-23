var App;
(function (App) {
    $(function () {
        alert('start of app');
        alert($("header").html());
        $("header").load("/header.html");
        alert($("header").html());
        alert('header loaded');
        $("footer").load("/footer.html");
        alert('footer loaded');
        alert('end of app');
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map