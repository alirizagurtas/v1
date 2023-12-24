export class FormItem {

    constructor(data) {
        this.data = data;
        this.parameters = [
            {
                trim: ["all", "start", "end"],
                regex: [

                ]
            }
        ];
        this.rules = [
            {
                identity: {
                    tr: {
                        trim: 0, // 'all','start', 'end', 'null',
                    }
                }
            },
            {
                creditCard: {
                    trim: null,
                }
            }
        ];
        this.result = {};
    }

    trim(direction = 'all') {

        if (direction == 'all') {
            this.result.trim = this.data.trim();
        }
        else if (direction == 'start') {
            this.result.trim = this.data.trimStart();
        }
        else if (direction == 'end') {
            this.result.trim = this.data.trimEnd();
        }
        return this.result;

    }

    regex() {

    }




    event() {

    }

    formatter() {

    }

    input() {

    }

    display() {

    }
}





