export class ValueProposition {
    constructor(
        public id: string,
        public title: string,
        public benefits: string
    ) {}

    updateWith({
        title,
        benefits,
    }:UpdateWithOptions) {
        this.title=title??this.title;
        this.benefits=benefits??this.benefits;
    }
}

interface UpdateWithOptions{
        title?:string;
        benefits?:string;
        }


