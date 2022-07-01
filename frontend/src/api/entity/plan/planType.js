import Entity from "../../core/entity.class.js";

const _tableField = {
  name: {
    type: "string",
    default: "",
  },
};

class PlanType extends Entity {
  static _requestConfig = {
    app: "api",
    domain: "plan",
  };

  static _form = {};

  static _options = {};

  constructor(planType) {
    super(planType, { _tableField });
  }
}

export default PlanType;
