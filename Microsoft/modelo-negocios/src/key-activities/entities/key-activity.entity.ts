export class KeyActivity {
    constructor(
        public id: string,
        public activityName: string,
        public description: string
    ) {}

    updateWith({
        activityName,
        description,
    }:UpdateWithOptions) {
        this.activityName=activityName??this.activityName;
        this.description=description??this.description;
    }
}

interface UpdateWithOptions{
        activityName?:string;
        description?:string;
        }

