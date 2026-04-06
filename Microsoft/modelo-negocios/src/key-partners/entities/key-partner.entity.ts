export class KeyPartner {
     constructor(
        public id: string,
        public partnerName: string,
        public collaborationType: string
    ) {}

    updateWith({
        partnerName,
        collaborationType,
    }:UpdateWithOptions) {
        this.partnerName=partnerName??this.partnerName;
        this.collaborationType=collaborationType??this.collaborationType;
    }
}

interface UpdateWithOptions{
        partnerName?:string;
        collaborationType?:string;
        }
