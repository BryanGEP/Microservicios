export class Chanel {
    constructor(
        public id: string,
        public type: string,
        public details: string,
        
    ) {}

    updateWith({
        type,
        details,
    }:UpdateWithOptions) {
        this.type=type??this.type;
        this.details=details??this.details;   
    }
}

 interface UpdateWithOptions{
        type?:string;
        details?:string;
        }
