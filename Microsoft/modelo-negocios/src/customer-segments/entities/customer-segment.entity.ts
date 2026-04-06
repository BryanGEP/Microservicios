export class CustomerSegment {
    constructor(
        public id: string,
        public name: string,
        public description: string
    ) {}

     updateWith({
        name,
        description,
    }:UpdateWithOptions) {
        this.name=name??this.name;
        this.description=description??this.description;
    }
}

interface UpdateWithOptions{
        name?:string;
        description?:string;
        }
