"use strict";
var Series = (function () {
    function Series(id, title, start_year, publisher, comic_vine_series_id, cover_image) {
        this.id = id;
        this.title = title;
        this.start_year = start_year;
        this.publisher = publisher;
        this.comic_vine_series_id = comic_vine_series_id;
        this.cover_image = cover_image;
    }
    return Series;
}());
exports.Series = Series;
//# sourceMappingURL=series.model.js.map