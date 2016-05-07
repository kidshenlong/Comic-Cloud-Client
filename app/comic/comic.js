System.register([], function(exports_1) {
    var Comic;
    return {
        setters:[],
        execute: function() {
            Comic = (function () {
                function Comic(id, issue, writers, 
                    //"comic_book_archive_contents": {"1": "b76af725-2f58-36a0-9849-3e5c7b186703"}
                    series_id, comic_vine_issue_id, status) {
                    this.id = id;
                    this.issue = issue;
                    this.writers = writers;
                    this.series_id = series_id;
                    this.comic_vine_issue_id = comic_vine_issue_id;
                    this.status = status;
                }
                return Comic;
            })();
            exports_1("Comic", Comic);
        }
    }
});
//# sourceMappingURL=comic.js.map