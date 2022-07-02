import Entity from "../../core/entity.class.js";

const _tableField = {
    name: {
        type: "string",
        default: "",
    },
};

class Plan extends Entity {
    static _requestConfig = {
        app: "api",
        domain: "plan",
    };

    static _form = {};

    static _options = {};

    constructor(plan) {
        super(plan, { _tableField });
    }
}

export default Plan;
