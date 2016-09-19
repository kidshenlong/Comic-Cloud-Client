export class Comic {
    constructor(
        public id: string,
        public issue: number,
        public writers: [string],
        public comic_book_archive_contents: [string],
        public series_id: string,
        public comic_vine_issue_id: string,
        public status: string) { }
}