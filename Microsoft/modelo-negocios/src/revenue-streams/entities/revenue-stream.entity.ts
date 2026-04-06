export class RevenueStream {
    constructor(
        public id: string,
        public source: string,
        public amount: number
    ) {}

    updateWith({
        source,
        amount,
    }:UpdateWithOptions) {
        this.source=source??this.source;
        this.amount=amount??this.amount;
    }
}

interface UpdateWithOptions{
        source?:string;
        amount?:number;
        }

