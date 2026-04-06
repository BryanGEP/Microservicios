export class CostStructure {
    constructor(
        public id: string,
        public costName: string,
        public amount: number
    ) {}

    updateWith({
        costName,
        amount,
    }:UpdateWithOptions) {
        this.costName=costName??this.costName;
        this.amount=amount??this.amount;
    }
}

interface UpdateWithOptions{
        costName?:string;
        amount?:number;
        }

