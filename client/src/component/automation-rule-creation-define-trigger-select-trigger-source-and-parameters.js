
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class AutomationRuleCreationDefineTriggerSelectTriggerSourceAndParameters extends DynamicHtmlElement {
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
  const fghabit_profile = this.shadowRoot?.getElementById("fg-habit_profile");
  if (fghabit_profile) {
    fghabit_profile.fields = fghabit_profile.fields.map(field => {
      const translatedLabel = t("habit_profile", "habit_profile." + field.id, field.name);
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
      
        <blaze-field-group id="fg-habit_profile" context="habit_profile"></blaze-field-group>
      
    `;

    
      const fgautomation_rule = this.shadowRoot.getElementById("fg-automation_rule");
      fgautomation_rule.context = "automation_rule";
      fgautomation_rule.model = {};
      
      // Set initial fields structure (without translations first)
      fgautomation_rule.fields = [{"id":"trigger_type","name":"Trigger type","type":"text","required":false,"description":"Trigger category (e.g., time, habit_detected, external_event).","label":"Trigger type"},{"id":"trigger_spec","name":"Trigger specification","type":"text","required":false,"description":"Structured/serialized trigger details (e.g., cron, habit id).","label":"Trigger specification"},{"id":"user_id","name":"User ID","type":"text","required":false,"description":"Owner of the rule.","label":"User ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgautomation_rule.data = { "automation_rule": this._formData.automation_rule || {} };
   
      const fghabit_profile = this.shadowRoot.getElementById("fg-habit_profile");
      fghabit_profile.context = "habit_profile";
      fghabit_profile.model = {};
      
      // Set initial fields structure (without translations first)
      fghabit_profile.fields = [{"id":"habit_id","name":"Habit ID","type":"text","required":false,"description":"Unique identifier for the habit.","label":"Habit ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fghabit_profile.data = { "habit_profile": this._formData.habit_profile || {} };
   
  }

  populateForm() {
    
    const fgautomation_rule = this.shadowRoot?.getElementById("fg-automation_rule");
    if (fgautomation_rule) {
      fgautomation_rule.data = { "automation_rule": this._formData["automation_rule"] || {} };
    }
  
    const fghabit_profile = this.shadowRoot?.getElementById("fg-habit_profile");
    if (fghabit_profile) {
      fghabit_profile.data = { "habit_profile": this._formData["habit_profile"] || {} };
    }
  
  }
}

customElements.define("automation-rule-creation-define-trigger-select-trigger-source-and-parameters", AutomationRuleCreationDefineTriggerSelectTriggerSourceAndParameters);
export default AutomationRuleCreationDefineTriggerSelectTriggerSourceAndParameters;
