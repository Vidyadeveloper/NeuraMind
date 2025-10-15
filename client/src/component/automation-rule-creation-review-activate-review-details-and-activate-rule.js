
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class AutomationRuleCreationReviewActivateReviewDetailsAndActivateRule extends DynamicHtmlElement {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
    
    // Listen for language changes to update field labels dynamically
    document.addEventListener("lang-changed", () => this.updateFieldLabels());
  }

  // Single method to handle both initial setup and dynamic updates
updateFieldLabels() {
  
  const fgautomation_rule = this.shadowRoot?.getElementById("fg-automation_rule");
  if (fgautomation_rule) {
    fgautomation_rule.fields = fgautomation_rule.fields.map(field => {
      const translatedLabel = t("automation_rule", "automation_rule." + field.id, field.name);
      console.log("🔍 Checking translation:", { id: field.id, name: field.name, translatedLabel });
      return {
        ...field,
        label: translatedLabel
      };
    });
  }
}


  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-automation_rule" context="automation_rule"></blaze-field-group>
      
    `;

    
      const fgautomation_rule = this.shadowRoot.getElementById("fg-automation_rule");
      fgautomation_rule.context = "automation_rule";
      fgautomation_rule.model = {};
      
      // Set initial fields structure (without translations first)
      fgautomation_rule.fields = [{"id":"rule_id","name":"Rule ID","type":"text","required":false,"description":"Unique identifier for the automation rule.","label":"Rule ID"},{"id":"name","name":"Rule name","type":"text","required":false,"description":"Descriptive name for the automation.","label":"Rule name"},{"id":"is_active","name":"Is active","type":"text","required":false,"description":"Whether the rule is active. Stored as 'true' or 'false'.","label":"Is active"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgautomation_rule.data = { "automation_rule": this._formData.automation_rule || {} };
   
  }

  populateForm() {
    
    const fgautomation_rule = this.shadowRoot?.getElementById("fg-automation_rule");
    if (fgautomation_rule) {
      fgautomation_rule.data = { "automation_rule": this._formData["automation_rule"] || {} };
    }
  
  }
}

customElements.define("automation-rule-creation-review-activate-review-details-and-activate-rule", AutomationRuleCreationReviewActivateReviewDetailsAndActivateRule);
export default AutomationRuleCreationReviewActivateReviewDetailsAndActivateRule;
