export class Comic {
    constructor(
        public id: string,
        public issue: number,
        public writers: [string],
        //"comic_book_archive_contents": {"1": "b76af725-2f58-36a0-9849-3e5c7b186703"}
        public series_id: string,
        public comic_vine_issue_id: string,
        public status: string) { }

}