export class CustomerRelationship {
    constructor(
        public id:string,
        public relationshipType: string,
        public strategy: string
    ) {}

    updateWith({
        relationshipType,
        strategy,
    }:UpdateWithOptions) {
        this.relationshipType=relationshipType??this.relationshipType;
        this.strategy=strategy??this.strategy;
    }
}

interface UpdateWithOptions{
        relationshipType?:string;
        strategy?:string;
        }

