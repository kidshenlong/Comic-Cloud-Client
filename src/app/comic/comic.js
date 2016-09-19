"use strict";
var Comic = (function () {
    function Comic(id, issue, writers, comic_book_archive_contents, 
        //"comic_book_archive_contents": {"1": "b76af725-2f58-36a0-9849-3e5c7b186703"}
        series_id, comic_vine_issue_id, status) {
        this.id = id;
        this.issue = issue;
        this.writers = writers;
        this.comic_book_archive_contents = comic_book_archive_contents;
        this.series_id = series_id;
        this.comic_vine_issue_id = comic_vine_issue_id;
        this.status = status;
    }
    return Comic;
}());
exports.Comic = Comic;
//# sourceMappingURL=comic.model.js.map