
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class AutomationRuleCreationDefineActionConfigureActionToPerform extends DynamicHtmlElement {
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
      fgautomation_rule.fields = [{"id":"action_type","name":"Action type","type":"text","required":false,"description":"Action category (e.g., send_message, toggle_device, start_routine).","label":"Action type"},{"id":"action_spec","name":"Action specification","type":"text","required":false,"description":"Structured/serialized action details (destination, message, parameters).","label":"Action specification"}];
      
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

customElements.define("automation-rule-creation-define-action-configure-action-to-perform", AutomationRuleCreationDefineActionConfigureActionToPerform);
export default AutomationRuleCreationDefineActionConfigureActionToPerform;
